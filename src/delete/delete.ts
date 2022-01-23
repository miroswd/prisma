import { PrismaClient } from "@prisma/client";



const prisma = new PrismaClient()

const deleteTeacher = async () => {
  const result = await prisma.teachers.deleteMany({
    where: {
      id: '0f7efc09-a48f-4a10-9774-b6aa652c4644'
    }
  })

  console.log(result)
}

deleteTeacher()