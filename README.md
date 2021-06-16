# SYSC4D - Projeto em andamento

Construído em NodeJs no Backend e ReactJs no Frontend, pretendo desenvolver o mobile utilizando React Native.

## Tecnologias

[ReactJs](https://pt-br.reactjs.org/)
[NodeJs](https://nodejs.org/en/)
[Sequelize](https://sequelize.org/)
[MySQL](https://dev.mysql.com/downloads/mysql/)
[JWTToken](https://jwt.io/)
[StyledComponents](https://styled-components.com)
[ApiSauce](https://www.npmjs.com/package/apisauce)
[Polished](https://polished.js.org/)
[React Toastify](https://fkhadra.github.io/react-toastify/introduction/)

## Tarefas a azer

- [x] Backend com autenticação jtw
- [x] Privatizar rotas no frontend
- [ ] Desenvolver Mobile

# Screenshots

### Register.js

![Register](https://user-images.githubusercontent.com/18725901/122153390-3efa9780-ce39-11eb-82dd-bded34ea5948.png)

### Login.js

![Login](https://user-images.githubusercontent.com/18725901/122153491-7ff2ac00-ce39-11eb-98dd-769b9395ad3d.png)

### Home.js

![Home](https://user-images.githubusercontent.com/18725901/122153555-a284c500-ce39-11eb-9f53-e7bb4079d824.png)

### AddUser.js

![Add User](https://user-images.githubusercontent.com/18725901/122153639-c6480b00-ce39-11eb-8f39-856e87f8df5e.png)

### AddProvider - 1.js

![Add Provider 1](https://user-images.githubusercontent.com/18725901/122153860-33f43700-ce3a-11eb-9cb8-37552bab3910.png)

### AddProvider - 2.js

![Add Provider 2](https://user-images.githubusercontent.com/18725901/122153894-44a4ad00-ce3a-11eb-91af-2ad776e7147a.png)

## Como rodar a aplicação

### Backend
Config database in: ./src/config/database.js

```1 - yarn```

```2 - yarn sequelize db:create && yarn sequelize db:migrate```

```3 - yarn dev```

### Frontend
Config IP in api file: ./src/services/api.js

```1 - yarn```

```2 - yarn start```

Habilitar cors para funcionamento do cadastro automático de fornecedores

![cors](https://user-images.githubusercontent.com/18725901/122154212-d6acb580-ce3a-11eb-9b40-8c338d521fbb.png)

É necessário um passo a mais para poder funcionar o cadastro de fornecedor automático, depois que a aplicação estiver em execução, copie este link: https://cors-anywhere.herokuapp.com/corsdemo, cole em seu navegador e clique no botão: Request temporary access to the demo server, conforme print acima.

#### Dúvidas e/ou sugestões? 
[Guilherme Lellis](mailto:lguilherme44@gmail.com)
