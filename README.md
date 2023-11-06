# Basic Setup

##Clone the repo

```
git clone https://github.com/technobyte-nitkkr/middleman
```

## Generate the env file

```
cp env-sample .env
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
