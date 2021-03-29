from flask.views import MethodView
from flask import Flask, request, jsonify
from flask_mysqldb import MySQL, MySQLdb
from flaskext.mysql import MySQL
import time
import bcrypt
import os

app = Flask(__name__)

app.config['MYSQL_HOST'] = 'localhost'
app.config['MYSQL_USER'] = 'root'
app.config['MYSQL_PASSWORD'] = ''
app.config['MYSQL_DB'] = 'refugio'

mysql = MySQL(app)


productos = [{"url": "https://elrefugio.org/contenido/animales/thumbs/El-Refugio-Pistas.jpg", "nombre": "Tony", "edad": "3 años de edad", "sexo": "Macho"},
             {"url": "https://elrefugio.org/contenido/animales/thumbs/El-Refugio-Moncheriweb_1.jpg",
                 "nombre": "Carlos", "edad": "4 años de edad", "sexo": "Hembra"},
             {"url": "https://elrefugio.org/contenido/animales/thumbs/El-Refugio-Brutusweb.jpg",
                 "nombre": "Max", "edad": "3 años de edad", "sexo": "Macho"},
             {"url": "https://elrefugio.org/contenido/animales/thumbs/El-Refugio-Bichaweb.jpg",
                 "nombre": "Lucas", "edad": "1 años de edad", "sexo": "Macho"},
             {"url": "https://elrefugio.org/contenido/animales/thumbs/El-Refugio-Kalimbaweb.jpg",
                 "nombre": "Mia", "edad": "5 años de edad", "sexo": "Hembra"},
             {"url": "https://elrefugio.org/contenido/animales/thumbs/El-Refugio-Zambezeweb.jpg",
                 "nombre": "Leo", "edad": "2 años de edad", "sexo": "Hembra"},
             {"url": "https://elrefugio.org/contenido/animales/thumbs/El-Refugio-Haruweb.jpg",
                 "nombre": "Toby", "edad": "1 años de edad", "sexo": "Hembra"},
             {"url": "https://elrefugio.org/contenido/animales/thumbs/El-Refugio-Roriweb.jpg",
                 "nombre": "Mono", "edad": "5 años de edad", "sexo": "Macho"},
             {"url": "https://elrefugio.org/contenido/animales/thumbs/El-Refugio-Pintaweb.jpg",
                 "nombre": "Lola", "edad": "2 años de edad", "sexo": "Macho"},
             {"url": "https://elrefugio.org/contenido/animales/thumbs/El-Refugio-Mono.jpg",
                 "nombre": "Daya", "edad": "1 años de edad", "sexo": "Hembra"},
             {"url": "https://elrefugio.org/contenido/animales/thumbs/El-Refugio-Cholaweb2.jpg",
                 "nombre": "Son", "edad": "3 años de edad", "sexo": "Macho"},
             {"url": "https://elrefugio.org/contenido/animales/thumbs/El-Refugio-Ukanweb.jpg",
                 "nombre": "Bruno", "edad": "3 años de edad", "sexo": "Hembra"}
             ]


class datosUserControllers(MethodView):
    """
        datos
    """

    def get(self):
        return jsonify({"data": productos}), 200



class registroUserControllers(MethodView):
    """
        Registro
    """
    def post(self):
        # simulacion de espera en el back con 1.5 segundos
        time.sleep(1)
        content = request.get_json()
        nombre = content.get("nombre")
        ultinombre = content.get("ultinombre")
        celular = content.get("celular")
        email = content.get("email")
        password = content.get("password")
        salt = bcrypt.gensalt()
        hash_password = bcrypt.hashpw(bytes(str(password), encoding= 'utf-8'), salt)
        # comandos sql para agregar infomacion a la tabla users
        cur = mysql.connection.cursor()
        cur.execute("INSERT INTO users (nombre, ultinombre, celular, email, password) VALUES (%s,%s,%s,%s,%s)",
                    (nombre, ultinombre, celular, email, hash_password))
        mysql.connection.commit()
        cur.close()
        return jsonify({"registro ok": True, "nombre": nombre,  "ultinombre": ultinombre, "celular": celular, "email": email}), 200
       


class LoginUserControllers(MethodView):
    """
        Login 
    """
    def post(self):
        # simulacion de espera en el back con 1.5 segundos
        user = ""
        time.sleep(1)
        content = request.get_json()
        email = content.get("email")
        password = content.get("password")
        token = "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9"
        # creamos comandos sql para verificar que la informacion que ingresamos sea correcta
        cur = mysql.connection.cursor()
        cur.execute("SELECT nombre, ultinombre, celular, email, password FROM users WHERE email=%s", ([email]))
        user = cur.fetchall()
        user = user[0]
        correo = user[3]
        clave = user[4]
        usuario = {}
        usuario[correo] = {"contraseña":clave} 
        cur.close() 
        # creamos diversos caminos que el sofware puede coger 
        if usuario.get(correo):

            passwordUser = usuario[correo]["contraseña"]

            if bcrypt.checkpw(bytes(str(password), encoding= 'utf-8'), passwordUser.encode('utf-8')):

                return jsonify({"auth": True, "nombre": user[0], "ultinombre": user[1], "celular": user[2], "email": user[3], "token": token}), 200  

            else:  
            
                return jsonify({"auth": False,}), 403

        else:  
            
            return jsonify({"auth": False,}), 401


class anuncioUserControllers(MethodView):
    """
         adopcion
     """

    def post(self):
        # simulacion de espera en el back con 1.5 segundos
        time.sleep(1)
        content = request.get_json()
        nombre = content.get("nombre")
        edad = content.get("edad")
        enfermedades = content.get("enfermedades")
        raza = content.get("raza")
        tamaño = content.get("tamaño")
        contacto = content.get("contacto")
        informacion = content.get("informacion")
        foto = request.files("foto")
        # comandos sql para agregar infomacion a la tabla users
        cur = mysql.connection.cursor()
        cur.execute("INSERT INTO anuncio (nombre, edad, enfermedades, raza, tamaño, contacto, informacion, foto) VALUES (%s,%s,%s,%s,%s,%s,%s.%s)",
                    (nombre, edad, enfermedades, raza, tamaño, contacto, informacion, filename))
        mysql.connection.commit()
        cur.close()
        return jsonify({"registro ok": True, "nombre": nombre, "edad": edad, "enfermedades": enfermedades, "raza": raza, "tamaño": tamaño}), 200
