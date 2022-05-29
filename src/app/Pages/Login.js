
import { useForm } from 'react-hook-form';
function Login () {
  const {register, formState: { errors }, handleSubmit} = useForm();
    return (
        <div className="container">
            <div className="form-container log-in-container">
                <form onSubmit={handleSubmit(onSubmit)}>
                    <h1 className="element-form">Inicia Sesión</h1>
                    <input className="input_form element-form" type="text" name="Usuario" id="Usuario" placeholder="Usuario"/>
                    <input className="input_form element-form" type="password" name="Password" id="Password" placeholder="Contraseña"/>
                    <input className="button" type="submit" value="Entrar"/>
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