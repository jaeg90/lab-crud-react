const router = require("express").Router();

router.use("/players", require("./player.routes"));
router.use("/auth", require("./auth.routes"));

module.exports = router;
