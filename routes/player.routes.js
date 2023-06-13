const router = require("express").Router();
const Player = require("../models/Player.model");
const player = require("../controllers/player.controller");

// TODO: CRUD

// C(R)UD
router.get("/", player.playerList);

router.get("/:id", player.detailPlayer);

// (C)RUD
router.post("/", player.newPlayer);

// CR(U)D
router.put("/:id", player.updatePlayer);

// CRU(D)
router.delete("/:id", player.detelePlayer);

module.exports = router;
