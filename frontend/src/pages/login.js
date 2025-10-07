import { Header } from '../components/header';
import { AuthBranding } from '../components/auth-branding';

export default function Login() {
  return `
        <div class="auth-page"> 
            ${Header()}

            <div class="auth-container">
                <div class="auth-wrapper">
                    <div class="auth-title">
                        <h1 class="fw-medium text-3xl">Entrar</h1>

                        <span class="auth-link">Caso não tenha uma conta, <a href="#/register"><b>Registre-se aqui</b></a>.</span>
                    </div>

                    <form id="login-form" class="auth-form">
                        <div class="form-group">
                        <label for="email" class="form-font">Email</label>
                        <input type="email" id="email" name="email" placeholder="Coloque seu email" class="input" required>
                        </div>
                    
                        <div class="form-group">
                            <label for="password" class="form-font">Senha</label>
                            <input type="password" id="password" name="password" placeholder="Coloque sua senha" class="input" required >
                        </div>
                    
                        <div class="form-options">
                            <label class="checkbox-label">
                                <input type="checkbox" name="remember">
                                <span>Mantenha-me conectado</span>
                            </label>
                        </div>
                    
                        <button type="submit" class="btn-primary mt-5">Entrar</button>
                    </form>
                </div>
            </div>
            ${AuthBranding()}
        </div>
    `;
}
