import { Footer } from "../components/footer";

export default function Login() {
    return `
        <div class="auth-page">
            <div class="auth-container">
                <h1 class="auth-title">VORTEX</h1>
                <h2 class="auth-subtitle">Entrar</h2>
                
                <form id="login-form" class="auth-form">
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
                
                <p class="auth-switch">
                    Caso não tenha uma conta, <a href="#/register">Registre-se aqui</a>.
                </p>
            </div>
            
            <div class="auth-side">
                <h3>INDIQUE E GANHE</h3>
                <p>Indique amigos com seu link único e ganhe pontos acumulativos!!</p>
            </div>
            
            ${Footer()}
        </div>
    `;
}