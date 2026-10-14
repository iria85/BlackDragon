package es.entrenos.box

import android.annotation.SuppressLint
import android.net.Uri
import android.os.Bundle
import android.view.WindowManager
import android.webkit.JavascriptInterface
import android.webkit.WebResourceRequest
import android.webkit.WebResourceResponse
import android.webkit.WebView
import android.webkit.WebViewClient
import androidx.activity.ComponentActivity
import androidx.activity.OnBackPressedCallback
import androidx.activity.result.PickVisualMediaRequest
import androidx.activity.result.contract.ActivityResultContracts
import androidx.core.content.FileProvider
import androidx.webkit.WebViewAssetLoader
import com.google.mlkit.vision.common.InputImage
import com.google.mlkit.vision.text.TextRecognition
import com.google.mlkit.vision.text.latin.TextRecognizerOptions
import org.json.JSONObject
import java.io.File

class MainActivity : ComponentActivity() {

    private lateinit var webView: WebView

    // ---- Leer la pizarra: foto (cámara o galería) -> texto con ML Kit, sin conexión ----
    private var photoUri: Uri? = null

    private val takePhoto = registerForActivityResult(ActivityResultContracts.TakePicture()) { ok ->
        val uri = photoUri
        if (ok && uri != null) recognize(uri) else sendBoardText(null, "cancel")
    }

    private val pickPhoto = registerForActivityResult(ActivityResultContracts.PickVisualMedia()) { uri ->
        if (uri != null) recognize(uri) else sendBoardText(null, "cancel")
    }

    /** Puente con la web: window.Android.scanBoard("camera" | "gallery"). */
    inner class Bridge {
        @JavascriptInterface
        fun scanBoard(source: String) {
            runOnUiThread {
                try {
                    if (source == "gallery") {
                        pickPhoto.launch(PickVisualMediaRequest(ActivityResultContracts.PickVisualMedia.ImageOnly))
                    } else {
                        val file = File(cacheDir, "pizarra.jpg")
                        val uri = FileProvider.getUriForFile(this@MainActivity, "$packageName.fileprovider", file)
                        photoUri = uri
                        takePhoto.launch(uri)
                    }
                } catch (e: Exception) {
                    sendBoardText(null, "No se pudo abrir la cámara.")
                }
            }
        }
    }

    private fun recognize(uri: Uri) {
        val image = try {
            InputImage.fromFilePath(this, uri)
        } catch (e: Exception) {
            sendBoardText(null, "No se pudo abrir la foto.")
            return
        }
        TextRecognition.getClient(TextRecognizerOptions.DEFAULT_OPTIONS)
            .process(image)
            .addOnSuccessListener { result -> sendBoardText(result.text, null) }
            .addOnFailureListener { sendBoardText(null, "No se pudo leer el texto de la foto.") }
    }

    private fun sendBoardText(text: String?, error: String?) {
        val t = if (text == null) "null" else JSONObject.quote(text)
        val e = if (error == null) "null" else JSONObject.quote(error)
        runOnUiThread {
            webView.evaluateJavascript("window.onBoardText && window.onBoardText($t, $e)", null)
        }
    }

    @SuppressLint("SetJavaScriptEnabled")
    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)

        // Mantener la pantalla encendida mientras entrenas.
        window.addFlags(WindowManager.LayoutParams.FLAG_KEEP_SCREEN_ON)

        val assetLoader = WebViewAssetLoader.Builder()
            .addPathHandler("/assets/", WebViewAssetLoader.AssetsPathHandler(this))
            .build()

        webView = WebView(this).apply {
            settings.javaScriptEnabled = true
            settings.domStorageEnabled = true
            settings.allowFileAccess = false
            webViewClient = object : WebViewClient() {
                override fun shouldInterceptRequest(
                    view: WebView, request: WebResourceRequest
                ): WebResourceResponse? = assetLoader.shouldInterceptRequest(request.url)
            }
        }
        webView.addJavascriptInterface(Bridge(), "Android")
        setContentView(webView)

        if (savedInstanceState != null) {
            webView.restoreState(savedInstanceState)
        } else {
            webView.loadUrl("https://appassets.androidplatform.net/assets/www/index.html")
        }

        // Botón atrás: primero vuelve dentro de la app (sesión -> inicio); si ya estás en inicio, sale.
        onBackPressedDispatcher.addCallback(this, object : OnBackPressedCallback(true) {
            override fun handleOnBackPressed() {
                webView.evaluateJavascript("window.appBack ? window.appBack() : false") { result ->
                    if (result != "true") finish()
                }
            }
        })
    }

    override fun onSaveInstanceState(outState: Bundle) {
        super.onSaveInstanceState(outState)
        webView.saveState(outState)
    }
}
