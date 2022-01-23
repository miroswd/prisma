import {PrismaClient} from '@prisma/client'

const prisma = new PrismaClient()

const createCourse = async () => {
  const result = await prisma.courses.create({
    data: {
      name: 'Curso de react',
      duration: 40,
      description: 'Curso de react',
      teacher: {
       connect: {
         id: '45ea5cd1-d97c-4641-8e42-62b115bef27c'
       }
      } 
    }
  })

  console.log(result)
}

createCourse()