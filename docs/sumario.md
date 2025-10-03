---
title: "Sumário de Documentação"
owner: "docs-owners"
status: "active"
last_review: "2025-10-02"
tags: [toc, docs, spa]
---

# Sumário (SPA)

## 1. Visão Geral
- [Índice (SPA)](./indice.md)
- [Requisitos](./requirements.md)
- [Design Thinking (1-pager)](./design-thinking.md)

## 2. Arquitetura
- [ADR-0001 — Escolhas Técnicas](./architecture/adr-0001-tech-choices.md)
- [C4 — Contexto/Containers (SPA)](./architecture/c4-context.md)

## 3. API e Contratos
- Swagger: `/swagger`
- Exemplo `.http`: [`./api/http-examples.http`](./api/http-examples.http)

## 4. Implementação
- **Front SPA** — hash-router (`#/route`), views dinâmicas, `localStorage` p/ JWT
- **API** — ASP.NET Core + EF Core + MySQL

## 5. Qualidade e Entrega
- DoD: ver Índice
- Testes: Swagger + `.http`
- Checklist de PR: requisitos, SPA ok, README atualizado