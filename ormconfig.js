module.exports = {
    "type": process.env.TYPEORM_CONNECTION,
    "url" : process.env.DATABASE_URL,
    "host": process.env.TYPEORM_HOST,
    "port": process.env.TYPEORM_PORT,
    "username": process.env.TYPEORM_USERNAME,
    "password": process.env.TYPEORM_PASSWORD,
    "database": process.env.TYPEORM_DATABASE,
    "synchronize": process.env.TYPEORM_SYNCHRONIZE,
    "logging": process.env.TYPEORM_LOGGING,
    "entities": [
       "dist/entity/**/*.ts"
    ],
    "migrations": [
       "dist/migration/**/*.ts"
    ],
    "subscribers": [
       "dist/subscriber/**/*.ts"
    ],
    "cli": {
       "entitiesDir": "src/entity",
       "migrationsDir": "src/migration",
       "subscribersDir": "src/subscriber"
    }
 }