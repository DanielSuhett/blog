---
title: "Sobre redes de transação para blockchain"
date: "2022-08-10"
---

Um blockchain é suportado por uma **rede distribuída peer-to-peer**

E essa rede se refere a coleção de nós executando o protocolo **P2P**

- **Não existe o papel de servidor**
- Descentralizado
- Sem hierarquia

# **Memory Pool**

A taxa de novas transações na rede é maior que o processamento do blockchain, por isso antes de entrarem na blockchain transações passam pela **mempool**, um backlog de transações.

### **Transações BTC demoram em média 10~30 minutos para serem confirmadas**

### **Quando uma transação sai do mempool?**

* A transação foi efetivada em um bloco
* A transação expira por timeout **(por opção dos clientes)**
* Conflito de transações já incluídas
* overflow faz a transação ser descartada