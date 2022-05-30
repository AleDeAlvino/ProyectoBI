import React, { Fragment, useState } from 'react';
import { createRoot } from 'react-dom/client';
import Inicio from './Pages/Inicio';
import Login from './Pages/Login';
import Registro from './Pages/Registro';
// import FormPronosticos from './Pages/Form_Pronostico';
// import FormPronosticos2 from './Pages/Form_Pronostico2';
// import Documento from './Pages/Documento'
// import Principal from './Pages/Principal'
import {BrowserRouter, Routes, Route} from 'react-router-dom';

  function Index () {

    return (
        <div>
            <BrowserRouter>
            <Routes>
                    <Route exact path="/" element={<Inicio />}/>
                    <Route exact path="/Login" element={<Login />}/>
                    <Route exact path="/Registro" element={<Registro />}/>
                    {/* <Route exact path="/Form" element={<FormPronosticos />}/>
                    <Route exact path="/Form2" element={<FormPronosticos2 />}/> */}
                    {/* 
                    <Route exact path="/Principal">
                        <Principal />
                    </Route> */}
                    {/* <Route render={() => <h1>Not found!</h1>} /> */}
            </Routes>
            </BrowserRouter>
        </div>
    );
  }


const container = document.getElementById('Inicio');
const root = createRoot(container);
root.render(<Index/>);