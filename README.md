# Api de teste para crud simples de clientes (Contatos)
Api baseada em Nodejs(Javascript) com framework NestJs

## Arquitetura
Projeto criado para test da qualicorp

## Para rodar o NestJs no ambiente de desenvolvimento
- npm run start:dev

## Para rodar o ambiente em produção
- Publiquei a aplicação no AWS ECS com;
  - ECS
  - ECR
  - Codebuild
  - Docker
  - Loadbalance

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