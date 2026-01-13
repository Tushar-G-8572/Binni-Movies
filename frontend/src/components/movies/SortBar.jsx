const SortBar = ({ onSort }) => {
  return (
    <div className="flex justify-center flex-wrap gap-3 mt-4">

      <button
        onClick={() => onSort("title", "asc")}
        className="
          px-4 py-2
          rounded-full
          bg-gray-800
          text-gray-200
          text-sm
          border border-gray-700
          hover:bg-red-600
          hover:border-red-600
          hover:text-white
          transition
        "
      >
        Title A–Z
      </button>

      <button
        onClick={() => onSort("releaseDate", "desc")}
        className="
          px-4 py-2
          rounded-full
          bg-gray-800
          text-gray-200
          text-sm
          border border-gray-700
          hover:bg-red-600
          hover:border-red-600
          hover:text-white
          transition
        "
      >
        Latest
      </button>

      <button
        onClick={() => onSort("rating", "asc")}
        className="
          px-4 py-2
          rounded-full
          bg-gray-800
          text-gray-200
          text-sm
          border border-gray-700
          hover:bg-red-600
          hover:border-red-600
          hover:text-white
          transition
        "
      >
        Rating ↓
      </button>

      <button
        onClick={() => onSort("rating", "desc")}
        className="
          px-4 py-2
          rounded-full
          bg-gray-800
          text-gray-200
          text-sm
          border border-gray-700
          hover:bg-red-600
          hover:border-red-600
          hover:text-white
          transition
        "
      >
        Rating ↑
      </button>

    </div>
  );
};

export default SortBar;
