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

const update = async () => {
  try {
    await prisma.user.update({
      where: {
        email: "baby.com",
      },
      data: {
        email: "baby@gmail.com",
      },
    });
  } catch (error) {
    console.log(error);
  }
};

const deleteData = async () => {
  await prisma.user.delete({
    where: {
      email: "baby@gmail.com",
    },
  });
};

const main = async () => {
  //   await create();
  //   await read();
  //   await update();
  //   await deleteData();
};

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
