import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const create = async () => {
  const result = await prisma.courses.create({
    data: {
      name: "Elixir",
      duration: 6,
      description: "Criação de dado usando o prisma",
    },
  });

  console.log(result)
};

create();
