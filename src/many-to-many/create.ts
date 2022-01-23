import { PrismaClient } from "@prisma/client"

const prisma = new PrismaClient()
// many to many

const main = async ()=> {
  const result = await prisma.coursesModules.create({
    data: {
    fk_id_course: 'cb796c9a-b45e-4972-b062-0caa9f6f53c0',
    fk_id_module: 'dd25f043-310a-4195-8f9a-516975b1959c'
    }
  })
  console.log(result)
}

main()