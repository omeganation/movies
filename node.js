const fetch = require("node-fetch");

const SECRET_KEY = "sk_test_5e53b09a2e48eaebb86b716ab5585617a0da79f0";

async function verifyPayment(reference) {
  const response = await fetch(`https://api.paystack.co/transaction/verify/${reference}`, {
    method: "GET",
    headers: {
      "Authorization": `Bearer ${SECRET_KEY}`,
      "Content-Type": "application/json",
    },
  });

  const data = await response.json();
  console.log(data);

  if (data.status && data.data.status === "success") {
    console.log("Payment successful! Unlock the movie.");
  } else {
    console.log("Payment failed!");
  }
}
