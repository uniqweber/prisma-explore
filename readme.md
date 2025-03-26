## Setup Prisma

- first run `npm init -y`
- then run ` npm install prisma typescript tsx @types/node --save-dev`
- Next, initialize TypeScript: `npx tsc --init`
- now i can invoke the prisma cli by prefixing in with `npx`
- Next, set up your Prisma ORM project by creating your Prisma Schema file with the following command:`npx prisma init --datasource-provider database `
- then create a model : `model ModelName { name String }` etc.
- then sync the database `npx prisma migrate dev --name change_name`
- then run `npx prisma generate`
- to see visually changes run `npx prisma studio`
- and install prisma extension for syntax highlighting or many more feature.

## important method

- `create` - for creating data
- `findMany` - for get all data
- `update` - for updating data
- `delete` - for deleting data
