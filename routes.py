from controllers import registroUserControllers, LoginUserControllers, anuncioUserControllers, datosUserControllers


user = {
    "datos_user": "/api/v01/user/datos", "datos_user_controllers": datosUserControllers.as_view("datos_api"),
    "registro_user": "/api/v01/user/registro", "registro_user_controllers": registroUserControllers.as_view("registro_api"),
    "login_user": "/api/v01/user/login", "login_user_controllers": LoginUserControllers.as_view("login_api"),
    "anuncio_user": "/api/v01/user/anuncio", "anuncio_user_controllers": anuncioUserControllers.as_view("anuncio_api"),

}

