
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const create = async () => {
  const result = await prisma.modules.create({
    data: {
      name: 'firebase',
      
    },
  });

  console.log(result)
};

create();
