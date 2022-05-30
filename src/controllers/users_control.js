const jwt = require('jsonwebtoken');
const db = require('../../config/database');
var bcrypt = require('bcrypt');
const {secret} = require('../../config/config');

// import {Fecha_actual} from '../funciones_js/validaciones';

export const getPrueba = async (req, res) => {
    res.send('Hello Worldddddd')
}

export const register = async (req, res) => {
    console.log(req.body);
    const {Username, Password, Password2} = req.body;

    //comprobar que los campos esten completos
    if(Username && Password && Password2){
        //comprobar que el usuario no exista
        console.log('entro');
        let query = "SELECT * FROM usuarios WHERE Username = ?";
        const rows = await db.query(query, [Username]);
        if(rows.length > 0){
            return res.status(400).json({ code: 400, message: 'El usuario ya existe' });
        }

        //comprobar que ambas contraseñas coincidan
        if(Password !== Password2){
            return res.status(400).json({ code: 400, message: 'Las contraseñas no coinciden' });
        }
        var BCRYPT_SALT_ROUNDS =12   //variable para indicar los saltos a bcrypt
        bcrypt.hash(Password, BCRYPT_SALT_ROUNDS)
        .then(function(hashedPassword){
            var password = hashedPassword;
            let query = "INSERT INTO usuarios (Username, Password)";
            query += `VALUES ('${Username}', '${password}')`;
            db.query(query);

            res.json({code: 200, message: 'Usuario guardado'}).status(200);
        })
        .catch(function(error){
            console.log("Error saving user: ");
            console.log(error);
            res.status(500).json({code: 500, message:'Algo salio mal'});
        })
        
    }else{
        //campos incompletos
        res.status(400).json({code: 400, message: 'Campos incompletos'});
    }

    ///codigos de respuesta . . .
    //200: usuario autenticado
    //400: error del usuario
    //500: error del servidor
}

//funcion para login
export const login = async (req, res) => {
    console.log(req.body);
    const { Username, Password } = req.body;
    let query = "SELECT * FROM usuarios WHERE Username = ?";
    let result = await db.query(query, [Username]);

    //comprobar que los campos esten completos
    if(Username && Password){
        console.log('entro');
        //validar que existe el usuario
        if(result.length > 0){
            console.log('existe user');
            //validar que la contraseña sea correcta
            if(bcrypt.compareSync(Password, result[0].Password)){
                //generar token
                const token = jwt.sign({
                    Username: result[0].Username,
                    Usuario_id: result[0].Socio_id
                }, secret);

                //mandando token por el header
                res.status(200)
                    .header('Authorization', token)
                    .json({ code: 200, message: 'Usuario autenticado'})
            }
        }
        else{
            //usuario no existe
            console.log('NO existe user');
            res.status(400).json({code: 400, message: 'Usuario no existe'});
        }
    }else{
        //campos incompletos
        res.status(400).json({code: 400, message: 'Campos incompletos'});
    }
    //codigos de respuesta . . .
    //200: usuario autenticado
    //400: error del usuario
    //500: error del servidor
}
