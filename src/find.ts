import {PrismaClient} from '@prisma/client';

const prisma = new PrismaClient()


const find = {
  first: async ()  => {
    // select * from courses limit 1;
    const result = await prisma.courses.findFirst()
    console.log('[first]', result)
  },
  last: async () => {
    const result = await prisma.courses.findFirst({
      take: -1,
    })
    console.log('[last]',result)
  }
}

find.first()
find.last()
