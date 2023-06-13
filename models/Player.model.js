const { Schema, model } = require("mongoose");

const playerSchema = new Schema(
  {
    firstName: {
      type: String,
      required: true,
    },
    lastName: {
      type: String,
      required: true,
    },
    gender: {
      type: String,
      enum: ["MAN", "WOMAN"],
      default: "MAN",
    },
    country: {
      type: String,
      required: true,
    },
    federated: {
      type: Boolean,
      default: false,
    },
  },
  {
    timestamps: true,
  }
);

const Player = model("Player", playerSchema);

module.exports = Player;
