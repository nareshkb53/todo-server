const router = require("express").Router();
const authRoute =require("./authRoutes");
const projectRoute=require("./projectRoutes");
const todoRoute=require("./todoRoutes");

router.use("/", authRoute);
router.use("/project", projectRoute);
router.use("/todo",todoRoute)

module.exports = router;