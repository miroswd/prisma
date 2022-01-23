import {PrismaClient} from '@prisma/client';


const prisma = new PrismaClient()


const update = async () => {
  const result = await prisma.courses.update({
    where: {
      id: '567cf3be-29ee-4fd9-94bc-74dda518b849',
    },
    data: {
      duration: 299
    }
  })
  console.log('[update]', result)
}



update()