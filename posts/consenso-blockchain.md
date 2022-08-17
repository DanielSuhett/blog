---
title: "Sobre consenso de transação em uma blockchain"
date: "2022-08-10"
---

Como a rede concorda sobre quais transações são mais confiáveis.

# **Proof-of-Work**

Sistema em que a informação deve ser custosa para ser produzida, mas fácil de ser verificada.,

- Acertar(Minerar) o **POW** é como jogar dardos em um alvo com os olhos vendados
- Probabilidade é igual pra qualquer parte do alvo
- Lançadores vai velozes fazem mais acertos por segundo

Como é o acerto? Achar um hash **abaixo** de um alvo decidido por um algoritmo.

### **Dificuldade**

Representa o valor necessário para achar um bloco válido, se ajusta a cada 2016 blocos, que levam (~2 semanas)

### **Pseudocódigo de Mineração com CPU**
```
Target = (655355 << 208) / DIFFICULT;
coinbase_nonce = 0;
while (1) {
	header = makeBlockHeader(transactions, coinbasee__nonce);
	for(header_noncee = 0; header_nonce < (1 << 32); header_nonce++){
		if(SHA256(SHA256(makeBlock(header, header_nonce))) < TARGET){
			break; // BLOCO ENCONTRADO
		}
	}
	coinbase_nonce++;
}
```
### **Coinbase**

Criar blocos válidos custa:

- Energia
* Tempo
* Dinheiro

Pra isso cria-se um sistema de recompensas para que as pessoas se interessem em fazer esse trabalho, recebendo bitcoins **criados**

### **Taxas de transação**

- A maioria das transações incluem **transactions fees** para recompensar mineradores
- Incentivo para que mineradores incluam sua transação no proximo bloco
- Taxas de transação são recolhidas pelo mineirador
- `fees = sum(inputs) - sum(outputs)`

# **Proof-of-Stake**

Sistema no qual os nós "apostam" suas moedas para terem chances de serem o próximo validador,

propondo um novo bloco a ser inserido na blockchain.

- No **PoS** não existem mineiradores e sim validadores
    - não é necessário investir recursos computacionais
- O validador pode ser sorteado a propor um bloco na rede
    - existe um peso de quanto mais dinheiro vc coloca mais fácil de ser sorteado
- Moedas apostadas não podem ser gastas
- **Slashing**: moedas destruídas por comportamento indevido

# **PoW vs PoS**

- **Mineiradores (PoW)**
    - Tem poder de voto proporcional ao seu poder computacional
- **Validadores (PoS)**
    - Tem poder de voto proporcional ao seu stake apostado
    - Na rede **eth** o valor é fixo de **32 ETH** mas você poder ter mais de um nó