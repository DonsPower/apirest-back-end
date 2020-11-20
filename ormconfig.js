module.exports = {
    "type": process.env.TYPEORM_CONNECTION,
    "host": TYPEORM_HOST,
    "port": TYPEORM_PORT,
    "username": TYPEORM_USERNAME,
    "password": TYPEORM_PASSWORD,
    "database": TYPEORM_DATABASE,
    "synchronize": TYPEORM_SYNCHRONIZE,
    "logging": TYPEORM_LOGGING,
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