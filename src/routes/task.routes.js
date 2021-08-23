const router = require("express").Router();
const {
  getTasks,
  addTask,
  deleteTask,
  updateTask,
} = require("../controller/task.controller");
const { authJwt,isValid } = require("../middleware");

router.get("/", [authJwt.check], getTasks);
router.post("/", [authJwt.check], addTask);
router.delete("/:id", [authJwt.check,isValid.admin], deleteTask);
router.put("/:id", [authJwt.check], updateTask);

module.exports = router;
