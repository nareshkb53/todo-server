const router= require("express").Router()
const authController = require("@controllers/authController")
const authMiddleware= require("@middlewares/authMiddleware")

router.get("/",(req,res)=>res.send("Direct Access not allowed"))
router.post("/register", authMiddleware.validRegister ,  authController.register)
router.post("/login", authMiddleware.login ,  authController.login)

module.exports= router