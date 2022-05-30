import React, { Fragment, useState } from 'react';
// import { useForm } from 'react-hook-form';

function FormPronosticos () {
    
      return (
        <div>
            <div className="container">
                <div className="form-container in-container">
                <form >
                        <label for="K">K</label>
                        <input className="input_form element-form" type="number" name="K" id="K"/>
                        <br/>
                        <label for="J">J</label> 
                        <input className="input_form element-form" type="number" name="J" id="J"/>
                        <br/>
                        <label for="M">M</label> 
                        <input className="input_form element-form" type="number" name="M" id="M"/>
                        <br/>
                        <label for="M">ALFA</label> 
                        <input className="input_form element-form" type="number" step="any" name="ALFA" id="ALFA"/>
                    </form>
                </div>
                <div className="overlay-container">
                    <div className="overlay">
                        <div className="overlay-panel overlay-right">
                            <label for="Tecnica" >Elige La tecnica a  usar</label><br/>
                            <label for="PS">PS</label><input type="radio" name="TECNICA" id="TECNICA" value="PS"/><br/>
                            <label for="PMS">PMS</label><input type="radio" name="TECNICA" id="TECNICA" value="PMS"/><br/>
                            <label for="PMD">PMD</label><input type="radio" name="TECNICA" id="TECNICA" value="PMD"/><br/>
                            <label for="PMDA">PMDA</label><input type="radio" name="TECNICA" id="TECNICA" value="PMDA"/><br/>
                            <label for="PTMAC">PTMAC</label><input type="radio" name="TECNICA" id="TECNICA" value="PTMAC"/><br/>
                            <input className="button-4" type="submit" value="Clik"/>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
  }

export default FormPronosticos;