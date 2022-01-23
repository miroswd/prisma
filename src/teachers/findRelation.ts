// Buscando os dados da tabela relacionada tmb

import {PrismaClient} from '@prisma/client';


const prisma = new  PrismaClient()


const main = async () => {
  const result = await prisma.courses.findMany({
    include: {
      teacher: true
    }
  })

  console.log(result)
}

main()