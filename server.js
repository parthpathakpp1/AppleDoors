import express from "express";
import dotenv from "dotenv";
import connectDB from "./config/db.js";
import authRoutes from './routes/authRoute.js';
import categoryRoutes from './routes/categoryRoutes.js'
import productRoutes from './routes/productRoutes.js'
import cors from "cors"
dotenv.config();

connectDB();

const app = express();

//middlewares
app.use(express.json({ limit: '10mb' }));
app.use(cors({ origin: '*' }));
app.use("/api/v1/product", (req, res, next) => {
    res.setHeader("Cache-Control", "no-store, max-age=0"); // Disable caching
    next();
  }, productRoutes);
  


//routes
app.use("/api/v1/auth", authRoutes);
app.use("/api/v1/category",categoryRoutes);
app.use("/api/v1/product",productRoutes);



app.get('/', (req, res) => {
    res.send("<h1>WELCOME To Apple Doors</h1>")
});

const PORT = process.env.PORT;

app.listen(PORT, () => {
    console.log(`Server Running at PORT ${PORT}`);
})