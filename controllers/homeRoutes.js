const router = require("express").Router();

router.get("/", async (req, res) => {
  res.render("home", {
    layout: "main"
  });
});

module.exports = router;