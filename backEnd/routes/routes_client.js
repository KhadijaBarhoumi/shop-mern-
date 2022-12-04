const express = require("express");
const Client = require("../models/Client");
const router = express.Router();

//add client
router.post("/addClient", async (req, res) => {
    try {
      const newClient = new Client({...req.body});
      await newClient.save();
      res.send({ client: newClient, message: "client succesffuly" });
    } catch (err) {
      res.status(400).send(err.message);
    }
  });
//getAllClient
router.get("/", async (req, res) => {
  try {
    const allClients = await Client.find({});
    res.send({ allClients });
  } catch (err) {
    res.status(400).send(err.message);
  }
});
  module.exports = router;