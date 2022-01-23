import { PrismaClient } from "@prisma/client"

const prisma = new PrismaClient()
// many to many

const main = async ()=> {
  const result = await prisma.coursesModules.create({
    data: {
      course: {
        create: {
          duration: 200,
          name: "NodeJs",
          description: "Curso completo de node"
        }
      },
      module: {
        create: {
          name: "Prisma.io",
          description:"Curso de prisma"
        }
      }
    }
  })
  console.log(result)
}

main()