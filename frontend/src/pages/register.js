import { Footer } from '../components/footer.js';

export default function Register() {
    return `
        <div class="auth-page">
            <div class="auth-container">
                <h1 class="auth-title">Registrar</h1>
                <p class="auth-description">Preencha seus dados para começar a acumular pontos</p>
                
                <form id="register-form" class="auth-form">
                    <div class="form-group">
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
                    
                    <button type="submit" class="btn-primary">Registrar</button>
                </form>
                
                <p class="auth-promo">INDIQUE E GANHE<br>Indique amigos com seu link único e ganhe pontos acumulativos!!</p>
            </div>
            
            ${Footer()}
        </div>
    `;
}