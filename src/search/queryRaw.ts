// Rodando sql na mao

import { PrismaClient, Prisma, Modules } from "@prisma/client";



const prisma = new PrismaClient()


const main = async () => {
  // const result = await prisma.$queryRaw(
  //   Prisma.sql`
  //     SELECT * FROM modules;
  //   `
  // )

  /** Identificando a tipagem */
   const result = await prisma.$queryRaw<Modules[]>(
     Prisma.sql`
       SELECT * FROM modules;
     `
   )


  console.log(result)
  result.map(res => console.log(res.name))

}

main()