import 'dotenv/config';
import express from 'express';
import cors from 'cors';
import connectDB from './config/mongodb.js';
import userRouter from './routes/userRoutes.js';

const app = express();
const PORT=process.env.PORT || 4000
await connectDB();

// Middlewares
app.use(express.json());
app.use(cors());

// Routes
app.get('/', (req, res) => res.send("API Working"));
app.use('/api/user',userRouter)


app.listen(PORT,()=>{
    console.log("Server Start on Port:"+PORT);
})
