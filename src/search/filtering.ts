import { PrismaClient } from "@prisma/client";


const prisma = new PrismaClient()


const filtering = {
  startsWith: async () => {
    const result = await prisma.courses.findMany({
      where: {
        description: {
          startsWith: "curso",
          mode: 'insensitive'
        }
      }
    })
    console.log(result)
  },
  filterOr: async () => {
    const result = await prisma.courses.findMany({
      where: {
        OR: [
          {
            name: {
              contains: "react",
              mode: 'insensitive'
            }
          },
          {
            name: {
              contains: "Node"
            }
          }
        ],
        AND: {
          duration: {
            gte: 200
          }
        }
      }
    })
    console.log(result)
  }
}


filtering.filterOr()