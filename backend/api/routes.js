module.exports = function(app){
    let movieController = require("./controllers/MovieController")
    let loginController = require("./controllers/LoginController")
    app.route("/movie").get(movieController.get).post(movieController.store)
    app.route("/login").post(loginController.post)
    app.route("/middle").get(loginController.get)
    app.route("/signup").post(loginController.store)
    app.route("/movie/:movieId").get(movieController.detail).put(movieController.update).delete(movieController.delete)
}