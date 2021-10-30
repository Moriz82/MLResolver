import ML = require("./ml");

const ml = new ML();

ml.SetMap("Mirage");
ml.StartTraining();

console.log(ml.GetYaw({"x":53,"y":65,"z":25}));

ml.SaveNetwork();