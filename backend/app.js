import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import movieRoutes from './routes/movie.route.js';
import adminRoutes from './routes/admin.route.js';

dotenv.config();

const app = express();

app.use(cors({
  origin: [
    "http://localhost:5173",
    "https://binni-movies.netlify.app"
  ],
  credentials: true
}));


app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/admin',adminRoutes);
app.use('/movies',movieRoutes);

export default app;