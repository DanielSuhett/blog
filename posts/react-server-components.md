---
title: "Sobre React Server Components"
date: "2022-08-22"
---

## Sobre o componente de servidor

Uma nova maneira de escrever React, como vejo, tem como base a diminuição do bundle-size e no aumento de velocidade de início. E para isso, usa a renderização progressiva e a transmissão de dados incremental de uma determinada UI para o cliente.

## Sobre o componente Suspense

Um componente importante a se conhecer pois faz parte da construção dos RSC é o [Suspense](https://pt-br.reactjs.org/docs/concurrent-mode-suspense.html), através dele é possível construir um escopo que vá aguardar em loading e será renderizado quando for resolvido, isso nos auxilia a lidar com a concorrência dos estados e componentes, disponibiliza um fallback e retorna cada recurso no seu tempo e diminuindo o waterfall do browser.

### Sobre o ganho

O segredo das otimizações com os componentes de server é poder acessar diretamente bancos de dados, micro-serviços, arquivos do sistema e etc. Disponibilizando esses dados acessados via elementos nativos como divs e spans e também para outros componentes React sejam eles servidor ou cliente. Contemplando o fato de que a nível de implementação do React, componentes de servidor são capazes de escolher dinamicamente quais componentes de cliente eles vão renderizar para que seja interpretado o mínimo de código possível a determinada página.

### Sobre a restrição

Como são componentes de montagem no servidor, eles não podem usar internamente nenhum tipo de estado do React que é feito para o cliente, assim como também não pode usar nenhum tipo de ciclo de vida para renderizar ou atualizar dados. Operações no DOM também não são possíveis. Também não é possível passar contexto a esses componente.

### Sobre o componente **quântico**

Um componente ele pode estar em uma zona cinzenta onde ele não é totalmente construído no servidor nem totalmente construído no cliente, ele começa sendo renderizado com dados para uma rota onde não haverá mudança no estado**(servidor)** mas pode ser renderizado também em outra rota onde um componente **cliente** realiza mutações.