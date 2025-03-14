import express from 'express';
import dotenv from 'dotenv'
dotenv.config();

import { connectDB } from './lib/db.js';

import userRoutes from './routes/user.route.js';
import authRoutes from './routes/auth.route.js';
import adminRoutes from './routes/admin.route.js';
import songRoutes from './routes/song.route.js';
import albumRoutes from './routes/album.route.js';
import statsRoutes from './routes/stats.route.js';

const app = express();
const port = process.env.PORT;

app.use(express.json()); //to parse req.body

app.use('/api/users', userRoutes)
app.use('/api/auth', authRoutes);
app.use('/api/admin', adminRoutes);
app.use('/api/songs', songRoutes);
app.use('/api/albums', albumRoutes);
app.use('/api/stats', statsRoutes);


app.listen(port, () => {
    console.log(`Server is running on Port ${port}`);
    connectDB();
})