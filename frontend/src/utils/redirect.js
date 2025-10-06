// Helper para redirecionamento de rotas
export function redirect(path) {
    return function() {
        console.log(`🔄 Redirecionando de "/" para "${path}"`);
        
        // Redireciona imediatamente
        window.location.hash = path;
        
        // Retorna um loading simples (será mostrado brevemente durante o redirecionamento)
        return `
            <div style="text-align: center; padding: 50px;">
                <p>Redirecionando para login...</p>
            </div>
        `;
    };
}

// Helper para verificar se precisa redirecionar
export function shouldRedirectToLogin(path) {
    return path === '/' || path === '';
}