const express = require("express");
const MongoClient = require("mongodb").MongoClient;

const app = express();
app.use(express.json());
app.listen(5000, () => console.log("app is running on port::5000🚀"));

MongoClient.connect("mongodb://keru:keru@localhost:27017").then((client) => {
  const db = client.db("user-account");
  const collection = db.collection("yusers");

  app.get("/", async (req, res) => {
    const users = await collection.find().toArray();
    return res.json(users);
  });

  app.post("/post", (req, res) => {
    collection
      .insertOne(req.body)
      .then((result) => {
        console.log(result);
      })
      .catch((error) => console.error(error));
  });
});
