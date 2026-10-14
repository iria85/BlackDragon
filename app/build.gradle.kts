plugins {
    id("com.android.application")
    id("org.jetbrains.kotlin.android")
}

android {
    namespace = "es.entrenos.box"
    compileSdk = 34

    defaultConfig {
        applicationId = "es.entrenos.blackdragon"
        minSdk = 26
        targetSdk = 34
        // GitHub Actions los pasa al compilar un tag (-PappVersionName=0.0.1 -PappVersionCode=...).
        // En local se usan los valores por defecto.
        versionCode = (project.findProperty("appVersionCode") as String?)?.toInt() ?: 2
        versionName = (project.findProperty("appVersionName") as String?) ?: "1.1"
    }

    // Clave de firma fija: así cada APK que compila GitHub Actions (o tu ordenador) lleva la misma firma
    // y se instala encima del anterior sin desinstalar ni perder datos. No la borres ni la cambies.
    signingConfigs {
        create("box") {
            storeFile = file("entrenos.keystore")
            storePassword = "hmlYBEj-2SjKmzWv6iuWF1z4"
            keyAlias = "entrenos"
            keyPassword = "hmlYBEj-2SjKmzWv6iuWF1z4"
        }
    }

    buildTypes {
        debug {
            signingConfig = signingConfigs.getByName("box")
        }
        release {
            isMinifyEnabled = false
            signingConfig = signingConfigs.getByName("box")
        }
    }
    compileOptions {
        sourceCompatibility = JavaVersion.VERSION_17
        targetCompatibility = JavaVersion.VERSION_17
    }
    kotlinOptions { jvmTarget = "17" }
}

dependencies {
    implementation("androidx.activity:activity-ktx:1.9.0")
    implementation("androidx.webkit:webkit:1.11.0")
    // Reconocimiento de texto en el móvil (modelo incluido en la app, funciona sin conexión)
    implementation("com.google.mlkit:text-recognition:16.0.1")
}
