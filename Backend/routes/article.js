const router = require("express").Router();
const verifyToken = require("../middlewares/verifyToken.js");
const ArticleController = require("../controllers/ArticleController");

router.post("/", ArticleController.saveArticle);
router.post("/like", ArticleController.like);
router.get("/:id", ArticleController.getArticle);
module.exports = router;