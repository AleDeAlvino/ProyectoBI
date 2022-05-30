import React, { Fragment, useState } from 'react';
// import { useForm } from 'react-hook-form';
import { createRoot } from 'react-dom/client';
import FormPronosticos from './Form_pronostico';
import FormPronosticos2 from './Form_pronostico2';

function Opciones () {
    function redireccion(data){
        console.log(data);
          if(data == 1){
              const container = document.getElementById('Inicio');
              const root = createRoot(container);
              root.render(<FormPronosticos/>);
          }else if (data ==2){
            const container = document.getElementById('Inicio');
              const root = createRoot(container);
              root.render(<FormPronosticos2/>);
          };
    }
      return (
        <div>
            <div className="encabezado">
                <h4>Favor de elegir una de las siguiente varaibles</h4>
            </div>

            <div className="container">
                <input className="button-6" type="submit" value="Precipitación " onClick={() =>{redireccion(1);}}/>
                <div className="overlay-container-2">
                    <div className="overlay-container-3">
                    <input className="button-7" type="submit" value="Temperatura prom" onClick={() =>{redireccion(2)}}/>
                    </div>
                </div>
            </div>
        </div>
    );
  }

export default Opciones;