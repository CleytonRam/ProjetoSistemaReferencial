---
title: "ADR-0001 — Escolhas Técnicas (SPA)"
owner: "tech-lead"
status: "draft"
last_review: "2025-10-02"
---

## Decisão
- **Front**: SPA **vanilla JS** (ES modules) com **hash router** (`#/route`) — zero frameworks
- **API**: ASP.NET Core Web API (.NET 8)
- **DB**: MySQL 8 + EF Core
- **Auth**: JWT; senhas com hash (ex.: PBKDF2 nativo do .NET)

## Justificativa
- Prazo curto: hash router evita configuração de servidor/rewrites
- Simplicidade e controle total do DOM para o MVP

## Consequências
- Código front minimalista, fácil de revisar
- Possível migração futura para framework sem reescrever API