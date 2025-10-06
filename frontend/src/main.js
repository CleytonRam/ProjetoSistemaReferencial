import Login from './pages/login.js';
import Register from './pages/register.js';
import Profile from './pages/profile.js';
import './styles/main.scss';
import { router } from './utils/router.js';
import { redirect, shouldRedirectToLogin } from './utils/redirect.js';

// DEBUG: Verificar se componentes foram carregados
console.log('🔧 Componentes carregados:');
console.log('- Login:', typeof Login);
console.log('- Register:', typeof Register);
console.log('- Profile:', typeof Profile);

// ✅ Registrar rotas com redirecionamento automático
router.addRoute('/', redirect('/login')); // Redireciona / para /login
router.addRoute('/login', Login);
router.addRoute('/register', Register);
router.addRoute('/profile', Profile);

console.log('✅ Todas rotas registradas');

// ✅ Inicializar o router manualmente DEPOIS das rotas
router.init();

// Inicialização da aplicação
document.addEventListener('DOMContentLoaded', () => {
    console.log('🚀 DOM carregado - App inicializando');
    
    // Verificação adicional de redirecionamento
    const currentPath = window.location.hash.slice(1);
    if (shouldRedirectToLogin(currentPath)) {
        console.log('🔍 Verificação: Redirecionando rota raiz para login');
        window.location.hash = '/login';
    }
    
    // Remover loading
    const loading = document.querySelector('.loading');
    if (loading) {
        loading.style.display = 'none';
    }
});