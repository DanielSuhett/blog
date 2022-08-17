---
title: "Sobre blocos de transação em uma blockchain"
date: "2022-08-10"
---


Base das transações no algoritmo de **BLOCK**chain

## **Um bloco é construído por**

- Cabeçalho
- Transações

## **Quais são os metadados do cabeçalho**

1. Hash do bloco anterior **(prevBlockHash)**
2. Timestamp
3. Merkle Root
4. Nonce
5. Protocolo
6. Dificuldade da rede

### **Previous Block Hash**

 BlockID = **SHA256(SHA256(blockHeader))**

### **Timestamp**

 Data e hora da criação do bloco

### **Merkle Root**

- Representação de todas as transações de um bloco
- A cada 2 transações é criado uma hash até ela se mergear com uma hash principal chamada de **Merklee Root**
- Árvore acima é feita para encurtar caminhos na busca de validar transações do bloco
- Merkle root é o ator que quebraria todas as chain em caso de mudança na hash original de uma transação

### **Nonce**

- 32 bits
- **Proof of work**
- Valida que um bloco é válido resolvendo um enigma criptografico
- Calcular a hash do cabeçalho e achar uma hash que seja menor que o alvo
- `H(BlockID) < target`
- Dificuldade do target atender ao nonce tende a aumentar ou diminuir baseado no número de pessoas que existe na rede, se tem muitas ficaria muito fácil de descobrir o nonce válido se tem poucos seria muito difícil, por isso ele é **dinâmico**.

### **Qualquer tipo de alteração em um bloco específico quebra toda a chain pois os blocos vão perder os links**

### **Todo bloco tem um tamanho máximo, no BTC é 1mb**