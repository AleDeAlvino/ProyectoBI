module.exports = {
    port: process.env.PORT || 3000,
    host: process.env.DB_HOST || 'us-cdbr-east-05.cleardb.net',
    user: process.env.DB_USER || 'b444e733ee072b',
    password: process.env.DB_PASSWORD || 'a336b844',
    database: process.env.DB_NAME || 'heroku_6ad1ce678f7ba3e',
    secret: process.env.JWT_SECRET || 'gato'
}