import React, { Fragment, useState } from 'react';
import { useForm } from 'react-hook-form';
import Login from './Login';
import { createRoot } from 'react-dom/client';


function Registro () {

        //constantes que necesita el useform para validar
    const {register, formState: { errors }, handleSubmit} = useForm();

    //Funcion que consulta la ruta SignIn para registrar al usuario
    const onSubmit = (data, e) => {
        console.log(data)
        e.target.reset()
        fetch("/register", {
            method: "POST",
            body: JSON.stringify({
                Username: data.Usuario,
                Password: data.Password,
                Password2: data.Password2
            }),
            headers: {
              Accept: "application/json",
              "Content-Type": "application/json",
            },
          })
          .then((res) => res.json())
          .then((data) => {
            console.log("Hecho")
            if(data.code==200){
                const container = document.getElementById('Inicio');
            const root = createRoot(container);
            root.render(<Login/>);
            }else{
              render(element, document.getElementById('message_err'))
            }
          });
    }

    
      return (
        <div className="container">
            <div className="form-container Registro-container">
                <form onSubmit={handleSubmit(onSubmit)}>
                    <h1 className="element-form">¡Registrate!</h1>
                    <input 
                        className="input_form element-form"
                        type="text"
                        name="Usuario"
                        id="Usuario"
                        placeholder="Nombre de Usuario"
                        {...register('Usuario',{
                            required: true,
                        })}/>{errors.Usuario && <span> Campo requerido </span>} {/* manda mensaje de error al useform */}
                    <input 
                        className="input_form element-form"
                        type="password"
                        name="Password" 
                        id="Password" 
                        placeholder="Contraseña"
                        {...register('Password',{
                            required: true,
                            minLength: 8
                        })}/>{errors.Password && <span> Campo requerido con minimo de 8 caracteres </span>}
                    <input 
                        className="input_form element-form"
                        type="password"
                        name="Password2"
                        id="Password-2"
                        placeholder="Confirmar Contraseña"
                        {...register('Password2',{
                            required: true,
                            minLength: 8
                        })}/>{errors.Password2 && <span> Campo requerido con minimo de 8 caracteres </span>}
                    <input className="button" type="submit" value="Registrar"/>
                </form>
            </div>

            <div className="overlay-container">
                <div className="overlay">
                    <div className="overlay-panel overlay-right">
                        <h1>¿No cuentas con una cuenta?</h1>
                    </div>
                </div>
            </div>

        </div>
    );
  }

export default Registro;