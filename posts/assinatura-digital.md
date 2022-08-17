---
title: "Sobre assinaturas digitais e confiança nas transações"
date: "2022-08-10"
---

Como é possível confiar em transações? **Assinaturas digitais**, transações contém assinaturas dos proprietários dos fundos e gastar bitcoins é **resgatar saídas de transações anteriores**.

### **Como funciona?**

- Remetente gera um par de chaves privada e pública **(endereço)**
- Rementente envia a mensagem com a assinatura, envia sua chave pública, a assinatura e a mensagem para a rede
- Os nós que receberem checam através do algoritmo de verificação que a mensagem foi assinada pelo remetente, que só pode ser feita pelo detentor da chave privada da chave pública enviada
- Isso **"comprova"** a propriedade sobre uma transação

### **Esquema de Assinatura Digital (DSS)**

Destinatários de posse do par [mensagem, assinatura] podem verificar:

- **Autenticidade**: remetente original (detentor da chave privada) autorizou essa mensagem ou transação
- **Não-repúdio**: remetente original (detentor da chave privada) não pode negar quee autorizou essa mensagem ou transação
- **Integridade**: mensagem não pode ter sido modificada após seu envio

### **Criptografia de curva elíptica**

- Bitcoin usa o algoritmo **ECSDA** para produzir o par de chaves
- *Elliptic Curve Digital Signature Algorithm*
- **secp256k1**
- Chave pública se deriva da chave privada

