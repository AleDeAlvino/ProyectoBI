import React, { Fragment, useState } from 'react';
import { Link } from 'react-router-dom';

function Inicio () {

    return (
        <div className="container">
            <h4>Bienvenido al Proyecto BI</h4>
            <Link to="/Login"><input className="button-2" type="submit" value="Login"/></Link>
            <Link to="/Registro"><input className="button-3" type="submit" value="Sign up"/></Link>
            <div className="overlay-container-2"/>
            <div className="overlay-container-3">
                <h3>Informacion del Equipo</h3>
                <input className="button-4" type="submit" value="Clik"/>
            </div>
        </div>
    );
  }

export default Inicio;
