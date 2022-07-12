# Api de teste para crud simples de clientes (Contatos)
Api baseada em Nodejs(Javascript) com framework NestJs

Construi uma base de contatos pra o contexto de Clientes, ou seja,
cada cliente poderia possuir seus próprios contatos.

## Arquitetura
Projeto criado para test da qualicorp

## Para rodar o projeto no ambiente de desenvolvimento
- npm run start:dev

## Para rodar o ambiente em produção

Para gerar um deploy em produção, poderia ter usado o CI/CD no Github.

Para gerar a imagem para deploy com Docker na Aws Ecs Fargate

```bash
docker build -t qualicorp-test .
```

Para rodar em docker no local em test

```bash
docker run -p 8888:80 qualicorp-test
```

- Publicações feitas em;
  - ECS Fargate
  - ECR
  - Docker
  - MongoDB (Atlas Milistone)

## Documentação da api (Endpoints)
A documentação da api foi desenvolvida com pacote do swagger para nestjs com
modelagem de padrão OpenApi.

Url da documentação: `http://localhost:3000/api`
### **{/contacts, POST}** Criar um novo registro
```
body {
  "name": "Nome com mais de chars",
  "phone" "999999999", // Formato BR brasil para celulares
}
```

### **{/contacts/:id, PATCH}** Atualiza um registro específico
```
body {
  "name": "Nome com mais de chars",
  "phone" "999999999", // Formato BR brasil para celulares
}
```

### **{/contacts/:id, GET}** Recupera um registro

### **{/contacts, GET}** Recupera todos os registros

### **{/contacts/:id, DELETE}** Deletar um registro

## Informações gerais

Com base na infraestrutura e necessidade do negócio, trabalhar com imagens se torna
uma prática muito legal e torna fácil a vida dos devs que desejam dominar suas aplicações de
ponta a ponta.

### **Considerações Finais**
- Daria para cobrir mais de testes de unidade com a camada de super test para tests de integração.
- A documentação do Swagger ficou em falta nos pontos dos **Dtos**
- Melhoria nas escritas da documentação com uma revisão entre outros colegas do time.
- Adicionar um **.env** para proteger os dados sensíveis do Mongoose.

### Links
- [Documentaçao da Api](http://44.200.76.178/api/#/)
- [Frontend](http://qualicorp-site.s3-website-us-east-1.amazonaws.com/)
- [Endpoint do backend](http://44.200.76.178)