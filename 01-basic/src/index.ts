import {PrismaClient} from "@prisma/client";

const prisma = new PrismaClient();

const create = async () => {
  await prisma.user.create({
    data: {
      name: "baby",
      email: "baby.com",
    },
  });
};

const read = async () => {
  const find = await prisma.user.findMany();
  console.log(find);
};

const main = async () => {
  await create();
  await read();
};

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
