import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient;

const create = {
  one: async () => {
    const result = await prisma.books.create({
      data: {
        name: "Arquitetura limpa",
        author_id: '6eeb38ab-27eb-470d-90aa-ec56140d3e8e'
      }
    })
    console.log(result)
  }
}

create.one()