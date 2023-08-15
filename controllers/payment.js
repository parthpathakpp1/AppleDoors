import dotenv from "dotenv";
dotenv.config();
import { PaymentGateway } from "@cashfreepayments/cashfree-sdk";

const CLIENT_ID = process.env.CLIENT_ID;
const CLIENT_SECRET = process.env.CLIENT_SECRET;

const pg = new PaymentGateway({
  env: "TEST",
  appId: CLIENT_ID,
  secretKey: CLIENT_SECRET,
});

export const paymentController = async (req, res) => {
    const { amount, orderId, customerName, customerEmail, customerPhone } =
    req.body;

  pg.orders
    .createOrders({
      orderId: orderId,
      orderAmount: amount, 
      orderCurrency: "INR",
      customerName: customerName,
      customerPhone: customerPhone, 
      customerEmail: customerEmail, 
      paymentModes: "cc, dc, nb, upi, paypal, wallet",
      returnUrl: "http://localhost:5000/payment/response",
    })
    .then((response) => {
      res.json(response);
    })
    .catch((error) => {
      console.error(error);
      res.status(500).json({ error: "Failed to create payment order" });
    });
}


export const successPayment = (req, res)=> {
    res.send("Payment Successful");
}