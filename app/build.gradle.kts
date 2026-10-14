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
        versionCode = (project.findProperty("appVersionCode") as String?)?.toInt() ?: 2
        versionName = (project.findProperty("appVersionName") as String?) ?: "1.1"
    }

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
    implementation("com.google.mlkit:text-recognition:16.0.1")
}
