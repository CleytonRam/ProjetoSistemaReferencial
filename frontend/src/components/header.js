export function Header() {
    return `
        <header class="header">
            <div class="container">
                <h1 class="logo">VORTEX</h1>
                <nav class="nav">
                    <a href="#/profile" class="nav-link">Meu Perfil</a>
                    <button id="logout-btn" class="btn-secondary">Sair</button>
                </nav>
            </div>
        </header>
    `;
}