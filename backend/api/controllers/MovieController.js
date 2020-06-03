const util = require("util")
const mysql = require("mysql")
const db = require("../db")
var session = require('express-session');
module.exports = {
    get : (req , res) => {
        let sql = "SELECT * FROM movies ORDER BY id DESC LIMIT 12 "
        db.query(sql , (err, response) => {
            if(err){
                console.log(err)
            }
            res.json(response)
        })
    },
    detail : (req , res) => {
        let sql = "SELECT * FROM movies WHERE id = ?"
        db.query(sql ,[req.params.movieId], (err, response) => {
            if(err){
                console.log(err)
            }
            res.json(response)
        })
    },
    update : (req , res) => {
        let sql = "UPDATE movies SET ? WHERE id = ?"
        db.query(sql , [req.body , req.params.movieId] , (err , response) => {
            if(err){
                console.log(err)
            }
            res.json("Update thành công !")
        })
    },
    delete : (req , res) => {
        let sql  = "DELETE FROM movies WHERE id = ?"
        db.query(sql , [req.params.movieId] , (err , response) =>{
            if(err){
                console.log(err)
            }
            res.json("Delete thành công")
        })
    },
    store : (req , res) => {
        let sql = "INSERT INTO movies"
        db.query(sql , [req.body] , (err , response) => {
            if(err){
                console.log(err)
            }
            res.json("Insert thành công")
        })
    }

}