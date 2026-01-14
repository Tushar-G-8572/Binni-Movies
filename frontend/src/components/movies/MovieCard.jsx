import { useNavigate } from "react-router-dom";

const MovieCard = ({ data }) => {
  const navigate = useNavigate();
  return (
    <div className="relative h-80 rounded-xl overflow-hidden cursor-pointer group">

      <div
        className="absolute inset-0 bg-cover bg-center transition 
                   group-hover:blur-sm group-hover:brightness-50"
        style={{ backgroundImage: `url(${data.poster})` }}
      />

      <div className="absolute bottom-2 w-full text-center z-10">
        <h4 className="text-xl font-bold text-white">{data.title}</h4>
        <span className="text-red-500 font-semibold">
          ⭐ {data.rating.toFixed(1)}
        </span>
      </div>

      <div className="absolute inset-0 z-20 p-4 flex flex-col 
                      justify-end opacity-0 group-hover:opacity-100 
                      transition">
        <p className="text-sm text-gray-300 line-clamp-3 mb-3">
          {data.description}
        </p>

        <button
          onClick={() => navigate(`/`)}
          className="bg-red-600 hover:bg-red-700 text-white py-2 rounded-lg"
        >
          View Details
        </button>
      </div>
    </div>
  );
};

export default MovieCard;

