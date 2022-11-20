const router =require("express").Router();
const authMiddleware= require("@middlewares/authMiddleware")
const todoController= require("@controllers/todoController")

router.get("/", authMiddleware.verifyUser, todoController.getTodo)
router.put("/add", authMiddleware.verifyUser, todoController.addTodo)
router.post("/update", authMiddleware.verifyUser, todoController.updateTodo)
router.delete("/delete", authMiddleware.verifyUser, todoController.deleteTodo)

module.exports=router