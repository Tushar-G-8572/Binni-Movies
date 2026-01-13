import { createServer } from 'http';
import app from './app.js';
const port = process.env.PORT;
import connectDB from './config/db.js';


const server = createServer(app);

const startServer = async () => {
  try {
    await connectDB();
    server.listen(port, () => {
      console.log("Server is running");
    });
  } catch (error) {
    console.error(error);
  }
};

startServer();