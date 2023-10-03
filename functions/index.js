const functions = require("firebase-functions");
const express = require("express");
const cors = require("cors");
const stripe = require("stripe")(
  "sk_test_51NwdTnCJhvhzyW5KzkwAJ9nyIB89hS0GBDrSERa8fkJfM7iPFClbLa7rpSuQokLOIchF4OBKz7s2TNgDmYJF10Qq00hfoxSoCX"
);

const app = express();

app.use(cors({ origin: true }));
app.use(express.json());

app.get("/", (request, response) => response.status(200).send("hello world"));

app.post("/payments/create", async (request, response) => {
  try {
    const total = request.query.total;

    const paymentIntent = await stripe.paymentIntents.create({
      amount: total, 
      currency: "usd", 
    });
    response.status(201).send({
      clientSecret: paymentIntent.client_secret,
    });
  } catch (error) {
    console.error("Error creating payment intent:", error);
    response.status(500).send(error);
  }
});

exports.api = functions.https.onRequest(app);

//http://127.0.0.1:5001/fifth-base-398400/us-central1/api
