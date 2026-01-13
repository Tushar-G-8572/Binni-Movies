import express from "express";
import { adminLogin, adminLogout } from "../controllers/admin.Controller.js";
import authMiddleware from "../middlewares/auth.middleware.js";
import roleMiddleware from "../middlewares/role.middleware.js";
import { addMovie,updateMovie,deleteMovie } from "../controllers/movie.controller.js";

const router = express.Router();


router.post("/login", adminLogin);

router.post("/add-movie", authMiddleware, roleMiddleware("admin"), addMovie);
router.put("/update-movie",authMiddleware,roleMiddleware('admin'), updateMovie);
router.delete(
  "/delete-movie",
  authMiddleware,
  roleMiddleware("admin"),
  deleteMovie
);
router.post('/logout',adminLogout)


export default router;
