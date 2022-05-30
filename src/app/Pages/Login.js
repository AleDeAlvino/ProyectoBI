import React, { Fragment, useState } from 'react';
import { useForm } from 'react-hook-form';
import Opciones from './Opciones';
import { createRoot } from 'react-dom/client';

function Login () {
    // //constantes que necesita el useform para validar
    const {register, formState: { errors }, handleSubmit} = useForm({ shouldUseNativeValidation: true });

    //mensaje de error en caso de no sel valido los datos enviados
    const element = <h4>Usuario o correo incorrecto</h4>;
    
    //Funcion que consulta la ruta Login para iniciar sesion
      const onSubmit = (data, e) => {
          console.log(data);
          e.target.reset()
          fetch("/login", {
            method: "POST",
            body: JSON.stringify({
                Username: data.Usuario,
                Password: data.Password
            }),
            headers: {
              Accept: "application/json",
              "Content-Type": "application/json",
            },
          })
          .then((res) => res.json(), console.log('entro'))
          .then((data) => {
            console.log("Hecho");
            if(data.code==200){
                const container = document.getElementById('Inicio');
                const root = createRoot(container);
                root.render(<Opciones/>);
            }else{
              render(element, document.getElementById('message_err'))
            }
          });
      }
  
      return (
        <div className="container">
            <div className="form-container log-in-container">
                <form onSubmit={handleSubmit(onSubmit)}>
                    <h1 className="element-form">Inicia Sesión</h1>
                    <input 
                        className="input_form element-form" 
                        type="text" 
                        name="Usuario" 
                        id="Usuario" 
                        placeholder="Usuario"
                        {...register('Usuario',{
                            required: true,
                            type: 'text'
                        })}
                        />{errors.Usuario && <span>Ingrese un correo valido</span>}{/* manda mensaje de error al useform */}
                    <input 
                        className="input_form element-form" 
                        type="password" 
                        name="Password" 
                        id="Password" 
                        placeholder="Contraseña"
                        {...register('Password',{
                            required: true,
                            minLength: 8
                        })}
                        />{errors.Password && <span> Campo requerido con minimo de 8 caracteres </span>}{/* manda mensaje de error al useform */}
                        <div id="message_err"></div>
                    <button className="button">Entrar</button>
                </form>
            </div>
            <div className="overlay-container">
                <div className="overlay">
                    <div className="overlay-panel overlay-right">
                        <h1>Bienvenido</h1>
                    </div>
                </div>
            </div>
        </div>
    );
  }

export default Login;