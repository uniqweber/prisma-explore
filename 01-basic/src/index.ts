import {PrismaClient} from "@prisma/client";

const prisma = new PrismaClient();

const create = async () => {
  await prisma.user.create({
    data: {
      name: "john",
      email: "john.com",
    },
  });
};

const main = async () => {
  await create();
};

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
