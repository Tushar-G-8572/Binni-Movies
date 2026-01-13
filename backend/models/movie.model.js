import mongoose from "mongoose";

const movieSchema = new mongoose.Schema(
  {
    tmdbId: { type: Number, unique: true },
    title: String,
    description: String,
    rating: Number,
    duration: Number,
    releaseDate: Date,
    poster: String
  },
  { timestamps: true }
);

export default mongoose.model("Movie", movieSchema);
