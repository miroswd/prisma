import {PrismaClient} from '@prisma/client'

const prisma = new PrismaClient()

const createCourse = async () => {
  const teachers  = await prisma.teachers.createMany({
    data: [
      {
        name: 'Erick',
      },
      {
        name: 'Diego'
      }

    ]
  })

  const selectedTeachers = await prisma.teachers.findMany({
    where: {
      course: {
        is: null
      }
    }
  })


  const onlyTeacher = await prisma.teachers.create({
    data: {
      name: 'Roberto Justos'
    }
  })
  console.log(selectedTeachers)


  const result = await prisma.courses.create({
    data: {
      name: 'Curso de react native ' + onlyTeacher.name,
      duration: 40,
      description: 'Curso de react native',
      fk_id_teacher: onlyTeacher.id
    }
  })


  console.log(result)
}

createCourse()