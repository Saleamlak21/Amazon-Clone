require("dotenv").config(); // Load environment variables from a .env file

// Import required libraries and modules
const functions = require("firebase-functions");
const express = require("express");
const cors = require("cors");
const stripe = require("stripe")(process.env.stripe,);

const app = express(); // Create an Express application
app.use(cors({origin: true})); // Automatically allow cross-origin requests
app.use(express.json()); // Automatically parse request body as JSON

// Define a route to handle payment creation
app.post("/payments/create", async (request, response) => {
  try {
    // Get the total from the request body
    const total = request.query.total;

    // Create a PaymentIntent with the order amount and currency
    const paymentIntent = await stripe.paymentIntents.create({
      amount: total,
      currency: "usd",
    });
// Send PaymentIntent details to client
    response.status(201).send({
      clientSecret: paymentIntent.client_secret,
    });
  } catch (error) {
    // Handle errors
    console.error("Error creating payment intent:", error);
    response.status(500).send(error);
  }
});
// Export the Express app as an HTTP Cloud Function
exports.api = functions.https.onRequest(app);
