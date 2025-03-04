package com.movieapp

import android.os.Bundle  // 🔹 Add this import
import com.facebook.react.ReactActivity
import com.facebook.react.ReactActivityDelegate
import com.facebook.react.defaults.DefaultNewArchitectureEntryPoint.fabricEnabled
import com.facebook.react.defaults.DefaultReactActivityDelegate

class MainActivity : ReactActivity() {
    override fun onCreate(savedInstanceState: Bundle?) {  // 🔹 Bundle properly imported
        super.onCreate(null)
    }

    override fun getMainComponentName(): String = "movieApp"

    override fun createReactActivityDelegate(): ReactActivityDelegate =
        DefaultReactActivityDelegate(this, mainComponentName, fabricEnabled)
}
