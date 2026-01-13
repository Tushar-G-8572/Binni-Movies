import express from "express";
import { seedMovies,getAllMovies } from "../controllers/movie.controller.js";

const router = express.Router();

router.get("/", getAllMovies);


router.post("/seed", seedMovies);

export default router;
