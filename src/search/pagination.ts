import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient()


/**
 * [1,2,3,4,5,6,7]
 *  skip:2,
 *  take: 4
 *  -> pegaria 4 elementos, a partir da posição 3
 */

const pagination = async () => {

  let skip = 0
  let exists = true

  while(exists) {
  const result = await prisma.courses.findMany({
    skip: skip,
    take: 2
  })
  
  skip += 2

  if (result.length <= 0) {
    exists = false
  } else { 
    console.log(result)
    console.log('--------------------------------')
  }
}
  
}


pagination()