const router = require("express").Router();

router.use("/players", require("./player.routes"));

module.exports = router;
