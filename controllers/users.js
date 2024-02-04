const mongodb = require("../data/database"); // mongodb connection

// a variable that mongo will use to create uniqui identifier for each database
const ObjectId = require("mongodb").ObjectId;

const getAll = async (req, res) => {
  const result = await mongodb.getDatabase().db().collection("users").find();
  result.toArray().then((users) => {
    res.setHeader("Content-Type", "application/json");
    res.status(200).json(users);
  });
};

const getSingle = async (req, res) => {
  const userId = new ObjectId(req.params.id);
  // constant variable that connects to the database
  const result = await mongodb
    .getDatabase()
    .db()
    .collection("users")
    .find({ _id: userId });
  result.toArray().then((users) => {
    res.setHeader("Content-Type", "application/json");
    res.status(200).json(users);
  });
};

module.exports = {
  getAll,
  getSingle,
};
