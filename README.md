# Prisma
- Framework ORM (pega os nossos dados dentro da aplicação e converte de uma forma que o banco consiga entender)
- Toda tabela que a gente queira mapear, devemos criar uma model

## TypeScript Start

```shell
yarn add typescript ts-node-dev -D
yarn tsc --init # gera o arquivo de configuração do ts
```

### Prisma Client

- Responsável por fazer a manipulação no banco de dados

- Acessando o arquivo schema.prisma, a gente cria a model

```prisma

model Courses {
  id          String   @id @default(uuid())  // @id -> primaryKey
  name        String   @unique
  description String?                        // String? -> permite ser nulo
  duration    Int
  created_At  DateTime @default(now())
  teacher       Teachers @relation(fields: [fk_id_teacher], references: [id]) // pegando o id de teachers e referenciando em fk_id_teacher
  fk_id_teacher String   @unique

  @@map("courses") // define o nome da tabela, caso não fosse passado, seria "Courses"
}
```

- Depois de criar a model, rodar:

```shell
# gerando o sql
yarn prisma migrate dev # gerando a migration, vai perguntar o nome da migration
```


```shell
yarn prisma generate # acessando node_modules/.prisma/client/index.js, conseguimos ver se de fato criou a model
```

### Prisma Migrate

- Pega a model, tudo que tenha dentro da nossa tabela e ao rodar um comando que transforma a estrutura em um SQL

### Prisma Studio

- Como se fosse uma IDE
- É possível visualizar o banco de dados sem instalar nada

```shell
# precisa ter model no projeto
yarn prisma studio # npx prisma studio
```

### Data Platform

- Criar estrutura sem iniciar um projeto

## VsCode

- Instalar algumas dependências:

`prisma`

`prisma - insider`

- ctrl + shift + p
- acesso as configurações do usuário (settings json)
- checar se tem essas propriedades:

```json
{
   "[prisma]": {
    "editor.defaultFormatter": "Prisma.prisma",
    "editor.formatOnSave": true,
  },
}
```

## Docker

```shell
docker run --name ignite-prisma -e POSTGRES_DB=ignite-prisma -e POSTGRES_PASSWORD=admin -e POSTGRES_USER=admin -p 5432:5432 -d postgres
```

## Start

```shell
yarn add prisma
```

```shell
yarn prisma init # inicializa o prisma
```

- Ao inicializar o prisma, será criado um arquivo `.env`, que já virá com a url de uma database, basta alterar para nossas credenciais


## Insert data

```ts
import {PrismaClient} from '@prisma/client';

const prisma = new PrismaClient()

(async () => {
  await prisma.courses.create({
    data: {
      name: 'Ignite - Prisma',
      duration: 4,
      description: 'Curso de Prisma'
    }
  })
})()
```

## Find Data

```ts
const main = async () => {
  const result = await prisma.courses.findMany({
    include: {
      teacher: true // busca os dados ta tabela referenciada
    }
  })

  console.log(result)
}
```


```shell
yarn ts-node-dev server.ts && yarn prisma studio
```

![Prisma - insert data](/assets/prisma-example-insert-data.png)



## Importando dados de um banco já existente

```shell 
yarn prisma db pull
```