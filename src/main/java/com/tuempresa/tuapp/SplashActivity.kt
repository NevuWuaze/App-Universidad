package com.tuempresa.tuapp

import android.content.Intent
import android.os.Bundle
import android.os.Handler
import android.os.Looper
import android.view.animation.AlphaAnimation
import android.view.animation.Animation
import androidx.appcompat.app.AppCompatActivity

class SplashActivity : AppCompatActivity() {

    private val splashDuration: Long = 3000 // Duración en milisegundos (3 segundos)

    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContentView(R.layout.activity_splash)

        // Crear animación de desvanecimiento
        val fadeOut = AlphaAnimation(1f, 0f)
        fadeOut.duration = 1000 // Duración de la animación de desvanecimiento (1 segundo)
        fadeOut.fillAfter = true

        // Ejecutar temporizador para mostrar splash y luego animar desvanecimiento
        Handler(Looper.getMainLooper()).postDelayed({
            val splashView = findViewById(android.R.id.content)
            splashView.startAnimation(fadeOut)
            fadeOut.setAnimationListener(object : Animation.AnimationListener {
                override fun onAnimationStart(animation: Animation?) {}

                override fun onAnimationEnd(animation: Animation?) {
                    // Iniciar la siguiente actividad después del desvanecimiento
                    startActivity(Intent(this@SplashActivity, MainActivity::class.java))
                    finish()
                }

                override fun onAnimationRepeat(animation: Animation?) {}
            })
        }, splashDuration)
    }
}
