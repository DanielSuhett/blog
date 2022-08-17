---
title: "Sobre hashing"
date: "2022-08-10"
---

Função de criptografia,

Requisitos de existência

- Resistência a pré imagem
    - Dado **H(x)** tende ao impossível determinar **x**
- Resistência a segunda pré imagem
    - Dado **x** tende ao impossível encontrar algum valor **x'** em que **H(x) == H(x')**
- Resistência a colisão
    - Tende ao impossível encontrar **x** e **y** em que **H(x) == H(y)**
    - Algoritmo **MD5** está obsoleto por conta dessa regra
- Avalanche
    - Um pequena mudança na entrada torna totalmente diferente o hash
    - Diminuir a presivilibidade do hash

### **Algoritmo mais utilizado para Hash é o SHA-256**

que significa **SHA-256^2** ou **H(x) = SHA256( SHA256(x) )**

# **Usos no bitcoin**

- IDs das transações
- IDs dos blocos
    - Mineração
- Assinaturas digitais
- Endereços
- Merkle root: *Representação de todas as transações de um bloco*