const router = require("express").Router();

router.use("/todos", require('./todo.routes'));

module.exports = router