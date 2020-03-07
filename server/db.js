const mysql = require("mysql")
const pool = mysql.createPool({
  // how many people are allowed to connet
  connectionLimit: 10,
  // host is the database that you are connecting to
  host: "localhost",
  // never do this on a actually project, learning purpose only (no password)
  user: "ryan",
  password: "ryanslist!",
  database: "catergories"
})

//
module.exports = pool
