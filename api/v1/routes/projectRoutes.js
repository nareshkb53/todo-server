const router =require("express").Router();
const authMiddleware= require("@middlewares/authMiddleware")
const projectMiddleware= require("@middlewares/projectMiddleware")
const projectController= require("@controllers/projectController")

router.get("/", authMiddleware.verifyUser, projectController.getProjects)
router.put("/add", authMiddleware.verifyUser, projectMiddleware.insertProject, projectController.addProjects)
router.post("/update", authMiddleware.verifyUser, projectMiddleware.updateProject, projectController.updateProjects)
router.delete("/delete", authMiddleware.verifyUser, projectMiddleware.deleteProject, projectController.deleteProjects)

module.exports=router