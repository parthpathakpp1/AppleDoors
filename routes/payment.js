import express from "express";
import {
    paymentController,
    successPayment
} from "../controllers/payment.js";


const router = express.Router();

router.post("/", paymentController);

router.post("/response", async (req, res) => {
    const data = req.body;
   
    res.redirect("http://localhost:5000/payment/success");
    
  });

  router.post("/success", successPayment);  

export default router;