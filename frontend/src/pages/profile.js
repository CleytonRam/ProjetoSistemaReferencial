import { Header } from '../components/header.js';
import { Footer } from '../components/footer.js';

export default function Profile() {
  return `
        ${Header()}
        
        <main class="profile-page">
            <div class="container">
                <div class="profile-header">
                    <h1>Bem-vindo, <span id="user-name">Pedro</span>!</h1>
                    <div class="level-badge gold">
                        <span class="level-name">Gold</span>
                        <span class="level-points">1.200 Pentos</span>
                    </div>
                </div>
                
                <div class="progress-section">
                    <p>Indique mais <strong>6</strong> amigos para aumentar seu nível</p>
                    <div class="progress-bar">
                        <div class="progress-fill" style="width: 50%"></div>
                    </div>
                </div>
                
                <div class="stats-card">
                    <h3>Você indicou <span class="highlight">3</span> amigos.</h3>
                </div>
                
                <div class="referral-section">
                    <h2>Indique seus amigos e ganhe pontos</h2>
                    <p>Copie o link de indicação, envie para seus amigos e acumule pontos de indicação.</p>
                    
                    <div class="referral-link-container">
                        <input 
                            type="text" 
                            id="referral-link" 
                            readonly 
                            value="https://vortex.com/register?ref=ABCD1234"
                            class="referral-input"
                        >
                        <button id="copy-btn" class="btn-primary">
                            <span>Copiar</span>
                        </button>
                    </div>
                    
                    <div id="copy-feedback" class="copy-feedback hidden">
                        Link copiado com sucesso!
                    </div>
                </div>
            </div>
        </main>
        
        ${Footer()}
    `;
}
