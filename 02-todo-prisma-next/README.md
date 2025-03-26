## Todo with Prisma and Next Js

- create app
- then in terminal run `npm i -D prisma`
- then run `npx prisma init --datasource-provider sqlite`
- then create model
- then run `npx prisma migrate --name init`
- then add dev.db to the git ignore
- then create utils folder
- then create db.ts then import `prismaClient` and create intenseOf and then export

## Server action

- create a form
- then write an async function then write `use server`
- received a parameter called and type will be `FormData`
- then in the action method bind the function with form `action={abcFn}`
- `formData.get("inputNam")` method will give you the form data and also check null `as string` or number
- then use everything like normal prisma with js
