// Usi web document 
//  https://www.prisma.io/docs/getting-started/prisma-orm/quickstart/mysql#1-create-a-new-project

//  npm install prisma @types/node --save-dev 
// npm install @prisma/client @prisma/adapter-mariadb dotenv

// npx prisma migrate dev --name init 
// this command will create migrations folder 
//  in Short SQL command file this commands are taked from schema.prima file

// prisma\migrations/
//   └─ 20260213170555_init/
//     └─ migration.sql

// npx prisma generate
// this command will exicute in actual database for generating tables



// Second method 
//npx prisma init
// npx prisma db pull
// take changes from db to schema.prisma

// npx prisma generate
// generate the model means table which is present in database in typscript format

// optinal
// mkdir prisma\migrations\0_init
// for creating diractory migration under prisma folder

//npx prisma migrate diff --from-empty --to-schema prisma/schema.prisma --script > prisma/migrations/0_init/migration.sql
//for creating migration file SQL command file.

//   "dev": "node --experimental-transform-types --watch --env-file=.env index.js"
// for db file which present in typscript ts file convert into js 



// in case use dont hava data base 
// npx prisma studio
// this command will provide you GUI for data base activity