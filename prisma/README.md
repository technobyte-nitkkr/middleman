
# Setting up Database in Backend




## Installing postgres

- Intall PostgresSQL (use chatgpt if you want)
## Creating .env file
-> Create a .env file

-> Enter the following details in .env file

-> DATABASE_URL="postgresql://username:password@localhost:host/database_name"

-> PORT=host

-> username and password is you postgresql username, password (genrally 'postgres')

-> host is your host where postgreSQL is hosted (genrally 5432)

-> database_name is the name is database name you have created for techno backend

## Pushing schema to database

*After creating .env push schema to database using following command*

-  npx prisma migrate dev
-  node prisma/seed.js


NOTE- to reset/empty the database use: node prisma/reset.js
