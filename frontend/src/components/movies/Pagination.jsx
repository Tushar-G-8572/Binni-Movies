const Pagination = ({ currentPage, totalPages, onPageChange }) => {
  return (
    <div className="flex justify-center items-center gap-2 mt-6 flex-wrap">

      <button
        disabled={currentPage === 1}
        onClick={() => onPageChange(currentPage - 1)}
        className="px-3 py-2 bg-gray-800 text-white rounded 
                   disabled:opacity-40 hover:bg-red-600 transition"
      >
        Prev
      </button>

      {[...Array(totalPages)].map((_, index) => {
        const page = index + 1;
        return (
          <button
            key={page}
            onClick={() => onPageChange(page)}
            className={`px-3 py-2 rounded transition
              ${
                currentPage === page
                  ? "bg-red-600 text-white"
                  : "bg-gray-800 text-gray-300 hover:bg-red-600 hover:text-white"
              }`}
          >
            {page}
          </button>
        );
      })}

      <button
        disabled={currentPage === totalPages}
        onClick={() => onPageChange(currentPage + 1)}
        className="px-3 py-2 bg-gray-800 text-white rounded 
                   disabled:opacity-40 hover:bg-red-600 transition"
      >
        Next
      </button>

    </div>
  );
};

export default Pagination;
