---
title: "Requisitos — Sistema de Indicação (MVP, SPA)"
owner: "product-engineering"
status: "draft"
last_review: "2025-10-02"
---

## 1. Escopo
**SPA** (HTML/JS/CSS) que consome API C# (JWT + MySQL). Rotas por **hash**:
- `#/register` (pública)
- `#/profile` (protegida; exige JWT)
- (default) redirect para `#/register`

## 2. Funcionais

### F1. Cadastro de usuário (SPA)
- Form: `name`, `email`, `password`
- Validações no front (email válido; senha ≥ 8 c/ letras e números)
- Se `#/register?ref=CODE` presente → enviar `?ref=CODE` para a API
**Aceitação**
- Mensagens inline em erros
- Sucesso → login automático e redirect para `#/profile`

### F2. Login (SPA)
- Autenticação por `email + password`
- Salvar JWT em `localStorage`
**Aceitação**
- Erro 401 mostra feedback e mantém na rota atual

### F3. Perfil (SPA)
- Exibir `name`, `points`, `refLink = {ORIGIN}/#/register?ref={refCode}`
- Botão **Copiar link** com feedback
**Aceitação**
- Dados atualizados após reload
- Guard de rota: sem token → redirect `#/register`

### F4. Navegação e Router
- Navegação sem recarregar a página (hashchange)
- Rotas: `#/register`, `#/profile`, 404 mínima → redirect `#/register`

### F5. Responsividade
- 360–1440px; sem overflow horizontal

## 3. Não-funcionais
- Front sem frameworks de UI/CSS
- Router simples (hash) para evitar config de servidor
- CORS: liberar origem do front
- Swagger ativo + `.http` para testes

## 4. Endpoints
`POST /auth/register` (+ `?ref=CODE`)  
`POST /auth/login`  
`GET /me` (Bearer)

## 5. Métricas
- Conclusão de cadastro
- Indicações válidas/usuário
- Zero frameworks de UI