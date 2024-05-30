import express from 'express';
import connectDB from './config/db.js';
import dotenv from 'dotenv';
import cors from 'cors';
import morgan from 'morgan';
import authRoutes from './routes/authRoutes.js';
import slideFormRoutes from './routes/slideRoutes.js';

const app = express();

dotenv.config();
connectDB();


//middlewares
app.use(cors());
app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));


const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
})

app.get('/', (req, res) => {
    res.send(`<h1>Hellolololoo</h1>`);
})

app.use('/auth', authRoutes);
app.use('/slide', slideFormRoutes);