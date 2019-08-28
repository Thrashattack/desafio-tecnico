# Microserviço de classificação de famílias 

• Implementação do sistema de classificação de famílias com a arquitetura de microserviço

- Requisitos 

```
    Node.js >= 10.0.0
    Typescript >= 3.6.2
    yarn ou npm
```

## Setup do Projeto 

> yarn install

## Build com hot-reload para desenvolvimento (Nodemon)

> yarn dev 

• Porta padrão : 3001 
• Entrada: [src/index.ts](https://github.com/Thrashattack/desafio-tecnico/src/index.js "src/index.ts")

## Build para produção 

> yarn build 

• Dir: [dist/](https://github.com/Thrashattack/desafio-tecnico/dist "dist/")
• Target: ES5 


## Build para produção e executa o projeto

> yarn prod 

• Porta padrão : 3001 
• Entrada: [dist/index.js](https://github.com/Thrashattack/desafio-tecnico/dist/index.js "dist/index.js")


## Executa o teste unitário do serviço de classificação

> yarn test

Dir: [src/service/tests/](https://github.com/Thrashattack/desafio-tecnico/src/service/tests "src/service/tests/")
Entrada: [src/service/tests/classificacao.test.ts](https://github.com/Thrashattack/desafio-tecnico/src/service/tests/classificacao.test.ts "src/service/tests/classificacao.test.ts")


## Exemplo de requisição 
![Alt Text](https://github.com/Thrashattack/desafio-tecnico/raw/master/doc/main.jpg)






[src/index.ts]: https://github.com/Thrashattack/desafio-tecnico/src/index.ts "src/index.ts"
[dist/index.js]: https://github.com/Thrashattack/desafio-tecnico/dist/index.ts "dist/index.js"
[dist/]: https://github.com/Thrashattack/desafio-tecnico/dist "dist/"
[src/service/tests/]: https://github.com/Thrashattack/desafio-tecnico/src/service/tests "src/service/tests/"
[src/service/tests/classificacao.test.ts]: https://github.com/Thrashattack/desafio-tecnico/src/service/tests/classificacao.test.ts "src/service/tests/classificacao.test.ts"