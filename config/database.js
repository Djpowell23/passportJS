// module.exports = {
//   url: "mongodb://<user>:<pass>@mongo.onmodulus.net:27017/Mikha4ot",
//   url: "mongodb://localhost/NightShift"
// };

// grab the packages we need
var mongoose = require("mongoose");

mongoose.connect("mongodb://localhost/nightShift");

module.exports = {
  url: "mongdb://localhost/nightShift"
};
