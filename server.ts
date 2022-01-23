import {PrismaClient} from '@prisma/client';

const prisma = new PrismaClient()

async function main() {
  (async () => {
    await prisma.courses.create({
      data: {
        name: 'Ignite - Prisma',
        duration: 4,
        description: 'Curso de Prisma'
      }
    })
  })()

}

main()
