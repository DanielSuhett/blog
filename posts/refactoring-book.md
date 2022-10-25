---
title: "Sobre o livro: Refatoração"
date: "2022-10-24"
---

# Capítulo 1

O que é um código bom? Códigos bons são feitos para pessoas, quanto mais fácil for de entender e mudar melhor pode ser considerado o código.

> "Quando programar, siga a regra do acampamento: sempre deixe a base de código mais saudável do que estava quando você a encontrou.”
>

E se a refatoração piorar o desempenho? Os ganhos ou perdas em troca da legibilidade quase nunca serão revelantes no sentido de velocidade entretanto certamente, se feito da maneira certa, vai ser relevante em longevidade.

Como refatorar certo? Faça bons testes, e cada mudança ser pequena o suficiente para que caso quebre os testes seja fácil de localizar e corrigir.

> "O verdadeiro teste para um bom código é a facilidade com que ele pode ser alterado.”
>

---

# Capítulo 2

A definição de refatoração para o autor é relatada como

> “Uma modificação feita na estrutura interna do software para deixá-lo mais fácil de compreender e menos custoso para alterar.”
>

A metáfora dos dois chapéus: um para desenvolver uma funcionalidade e outro para refatoração, não confundir os papéis é chave fundamental para não se perder, por mais que você precisa trocar entre os chapéus frequentemente saiba e respeite aquilo que está proposto.

A regra dos três: na terceira vez que precisar refazer algo, você refatora.

Refatorações oportunistas: Refatorações onde o trabalho de melhoria se faz ao natural, sem dedicar tempo, devem ser parte do fluxo de programação afim de facilitar a implementação da feature ou da refatoração a ser implementada.

O que devo dizer ao meu gerente? Se o gerente sabe da importância não é difícil de justificar e caso ele não saiba: **não conte.**

Quando não devo refatorar? Quando não for para me meter onde não sou chamado, um código confuso e que não precisa de modificação pode certamente permanecer do mesmo jeito até que eu precise entender como ele funciona.

Como refatorar código legado? Crie testes para esse código.

YAGNI: Você não vai precisar disso, faça o design da aplicação de maneira incremental e ganhará flexibilidade.

> "Mesmo que você saiba exatamente o que está acontecendo em seu sistema, tenha métricas, não especule. Você aprenderá algo.”
>

---

# Capítulo 3

Autor detalhe casos que podem auxiliar a entender que é necessária refatoração

- Nome misterioso
  - Variaveis com falta de contexto
  - Funções que não digam qual seu propósito
- Código duplicado
- Função longa
- Lista longa de parametros
  - Prefira consultas
  - Combine os parametros em um objeto
- Dados globais
  - Se forem poucos é controlavel mas não pode ser deliberado
- Dados mutáveis
  - Dados muitas vezes modificados são um problema para entendimento e funcionamento do código a longo prazo, prefira trabalhar com dados imutáveis quando possível.
- Alteração divergente
  - Alterações que necessitam ser acessadas em vários locais do código
- Engenharia exagerada
- Inveja de recursos
  - Função gasta mais recurso conversando com outras do que com seu objetivo
- Switches repetidos
- Laços
  - Prefira pipelines como filter e map
- Elemento ocioso
- Generalidade especulativa
- Campo temporário
- Intermediário
  - Remover intermediários é ter mais clareza na comunicação entre recursos
- Classe grande
- Classe de dados
- Comentários

---

# Capítulo 4

Autor relata a eficiência sobre escrever testes, não apenas para refatoração mas sim para aumentar o tempo produtivo resolvendo realmente problemas não descobertos ao invés de revisitar complexidades que poderiam se auto testar a cada iteração de código.

> "Uma suíte de testes é um detector de bugs eficaz, que reduz o tempo necessário para encontrar bugs."
>

Acrescentar um teste antes de uma funcionalidade, não é algo inverso pois você pratica o hábito de se perguntar quais são os requisitos e como eles se resolvem deixando a complexidade do código em si bem facilitada.

Refatoração ********exige******** testes, se quiser refatorar, você deve escrever testes.

> “Sempre garanta que um teste vai falhar quando deve falhar.”
>

Compartilhar objeto entre vários testes de um describe é uma má prática pois mesmo que seja uma constante, os valores dentro do objeto podem ser mudados(em javascript), defina uma var ou let e faça uma inserção **********beforeEach********** que vai executar a inserção do conteúdo integro a cada teste que for executado.

> "Pense nas condições limites nas quais algo pode dar errado e concentre aí seus testes"
>

Jamais tente provar através de testes que o código é a prova de falha, esse não é o propósito de testar.

Experimente escrever um teste que capture o comportamento de um relátorio de bug e sua vida será mais fácil.

---

Depois do capítulo 4 sobre testes o autor entra em seu catálogo de refatorações, dando exemplos técnicos e práticos que não demandam de um resumo, finalizando aqui essas anotações.
