const express = require("express")
const router = express.Router()
//connection to the database file
const connection = require("../db")

router.get("/catergories", (req, res, next) => {
  const sql = `SELECT * FROM catergories.categories;`

  // err - errors connecting to the database
  // results- results that your asking for
  // fields - are all the fields that your looking for
  connection.query(sql, (err, results, fields) => {
    console.log(err)
    res.json(results)
  })
})

module.exports = router
