const router = require("express").Router();
const {
  getCategorias,
  addCategoria,
  deleteCategoria,
  updateCategoria,
} = require("../controller/categoria.controller");
const { authJwt,isValid } = require("../middleware");

router.get("/", getCategorias);
router.post("/", addCategoria);
router.delete("/:id", [authJwt.check], deleteCategoria);
router.put("/:id", [authJwt.check], updateCategoria);

module.exports = router;
