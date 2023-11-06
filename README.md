# Basic Setup

## Clone the repo

```
git clone https://github.com/technobyte-nitkkr/middleman
```

Move into the repo and install the packages

```
cd middleman && npm i
```

## Generate the env file

```
cp env-example .env
```

## Start the Database

Start the postgres container

```
docker compose up -d
```

Apply the latest migration

```
npx prisma migrate dev
```

Seed the data

```
npm run db:seed
```

## General Information

While working, if you want to clean the data stored and seed the data again

```
npm run db:dev
```
