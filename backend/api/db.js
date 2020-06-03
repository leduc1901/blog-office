let sql = require('mysql')

let connect = sql.createConnection({
    host : process.env.DB_HOST || "localhost",
    user : process.env.DB_USER || 'root',
    password : process.env.DB_PASSWORD || "",
    database : process.env.DB_NAME || "box_office"
})


module.exports = connect