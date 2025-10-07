import { Header } from '../components/header';
import { AuthBranding } from '../components/auth-branding';

export default function Login() {
  return `
        <div class="auth-page"> 
            ${Header()}

            <div class="auth-container">
                <div class="auth-title">
                    <h1>Entrar</h1>

                    <span class="auth-description">Caso não tenha uma conta, <a href="#/register"><b>Registre-se aqui</b></a>.</span>
                </div>

                <form id="login-form" class="auth-form">
                    <div class ="form-group">
                        <label for="name">Nome</label>
                        <input type="text" id="name" name="name" placeholder="Coloque seu nome" required>
                    </div>

                    <div class="form-group">
                        <label for="email">Email</label>
                        <input type="email" id="email" name="email" placeholder="Coloque seu email" required>
                    </div>
                    
                    <div class="form-group">
                        <label for="password">Senha</label>
                        <input type="password" id="password" name="password" placeholder="Coloque sua senha" required>
                    </div>
                    
                    <div class="form-options">
                        <label class="checkbox-label">
                            <input type="checkbox" name="remember">
                            <span>Mantenha-me conectado</span>
                        </label>
                    </div>
                    
                    <button type="submit" class="btn-primary">Entrar</button>
                </form>
            </div>
            
            ${AuthBranding()}
            
        </div>
    `;
}
