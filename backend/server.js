// server.js

import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import connectDB from './config/db.js'; // <--- burada kullanılıyor

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

const PORT = process.env.PORT || 5000;

// MongoDB bağlantısını kur
connectDB(); // <--- burada çağrılıyor

app.listen(PORT, () => {
  console.log(`🚀 Server is running on port ${PORT}`);
});
