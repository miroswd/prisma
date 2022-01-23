import {PrismaClient} from '@prisma/client'

const prisma = new PrismaClient()

const createCourse = async () => {
  const result = await prisma.courses.create({
    data: {
      name: 'Curso de reactjs 23',
      duration: 40,
      description: 'Curso de react com dani 23',
      teacher: {
        connectOrCreate: {
          where: {
            name: 'Miro'
          },
          create: 
          {
            name: 'Miro'
          }
        }
      } 
    }
  })

  console.log(result)
}

createCourse()