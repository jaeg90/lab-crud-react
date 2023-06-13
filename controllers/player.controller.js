const Player = require("../models/Player.model");

const playerList = async (req, res, next) => {
  try {
    const player = await Player.find();
    return res.status(200).json(player);
  } catch (error) {
    next(error);
  }
};

const detailPlayer = async (req, res, next) => {
  try {
    const { id } = req.params;
    const player = await Player.findById(id);
    return res.status(200).json(player);
  } catch (error) {
    next(error);
  }
};

const newPlayer = async (req, res, next) => {
  try {
    if (!req.body.firstName) return res.status(400).json({ message: "Bad request" });
    const player = await Player.create(req.body);
    return res.status(201).json(player);
  } catch (error) {
    next(error);
  }
};

const updatePlayer = async (req, res, next) => {
  try {
    const { id } = req.params;
    const player = await Player.findByIdAndUpdate(id, req.body, { new: true });
    return res.status(200).json(player);
  } catch (error) {
    next(error);
  }
};

const detelePlayer = async (req, res, next) => {
  try {
    const { id } = req.params;
    await Player.findByIdAndDelete(id);
    return res.status(200).json({ message: `Player ${id} successfully deleted 🗑` });
  } catch (error) {
    next(error);
  }
};

module.exports = { playerList, detailPlayer, newPlayer, updatePlayer, detelePlayer };
