const util = require("util")
const mysql = require("mysql")
const db = require("../db")
let bcrypt = require("bcrypt")
let saltRounds = 10
module.exports = {
    store : async (req , res) => {
        const password = req.body.password;
        const encryptedPassword = await bcrypt.hash(password, saltRounds)
        var user ={
            "name":req.body.name,
            "password": encryptedPassword
        }
        let sql = "INSERT INTO users SET ?" 
        db.query(sql , [user] , (err , response) => {
            if(err){
                res.json("400")
            }else{
                res.json("Đăng kí thành công")
            }
            
        })
    },
    post : async (req , res) => {
        const password = req.body.password;
        const name = req.body.name;
        let sql = "SELECT * FROM users WHERE name = ?" 
        db.query(sql , [name] , async (err , response) => {
            if(err){
                res.json("400")
            }else{
                if(response.length > 0){
                    const comparision = await bcrypt.compare(password, response[0].password)
                    if(comparision){
                        
                        req.session.loggedIn = true;
                        req.session.name = name;
                        res.json("200")
                    }
                    else{
                        res.json("400")
                    }
                }else{
                    res.json("204")
                }
                
            }
            
        })
    },
    get : async (req, res) => {
        if(req.session && req.session.name){
            res.json(req.session.name)
        }else{
            res.json("400")
        }
    }
}