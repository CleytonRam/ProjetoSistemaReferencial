class Router {
    constructor() {
        this.routes = {};
        this.currentRoute = null;
        // ✅ SEM init() no constructor - controle manual
    }

    addRoute(path, component) {
        console.log(`📍 Registrando rota: ${path}`, component);
        this.routes[path] = component;
    }

    async navigate(path) {
        console.log(`🧭 Navegando para: ${path}`);
        console.log(`📋 Rotas disponíveis:`, Object.keys(this.routes));
        
        if (this.routes[path]) {
            window.location.hash = path;
            await this.render(path);
        } else {
            console.log('❌ Rota não encontrada:', path);
            this.renderNotFound();
        }
    }

    async render(path) {
        console.log(`🎨 Renderizando: ${path}`);
        const app = document.getElementById('app');
        const component = this.routes[path];

        if (!component) {
            console.log('❌ Componente não encontrado para rota:', path);
            this.renderNotFound();
            return;
        }

        if (typeof component === 'function') {
            console.log('⚡ Executando componente função');
            try {
                app.innerHTML = await component();
                console.log('✅ Componente renderizado com sucesso');
            } catch (error) {
                console.error('❌ Erro ao renderizar componente:', error);
                app.innerHTML = '<p>Erro ao carregar página</p>';
            }
        } else {
            console.log('📄 Usando componente estático');
            app.innerHTML = component;
        }

        this.currentRoute = path;
    }

    renderNotFound() {
        const app = document.getElementById('app');
        app.innerHTML = `
            <div style="text-align: center; padding: 50px;">
                <h2>404 - Página não encontrada</h2>
                <p>Rotas disponíveis:</p>
                <ul>
                    <li><a href="#/">Home</a></li>
                    <li><a href="#/login">Login</a></li>
                    <li><a href="#/register">Registro</a></li>
                    <li><a href="#/profile">Perfil</a></li>
                </ul>
            </div>
        `;
    }

    // ✅ init() separado para controle manual
    init() {
        console.log('🔄 Inicializando router...');
        
        window.addEventListener('hashchange', () => {
            const path = window.location.hash.slice(1) || '/';
            console.log('🔀 Hash mudou para:', path);
            this.navigate(path);
        });

        // Rota inicial
        const initialPath = window.location.hash.slice(1) || '/';
        console.log('🚀 Rota inicial:', initialPath);
        this.navigate(initialPath);
    }
}

export const router = new Router();