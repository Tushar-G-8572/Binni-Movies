const Loader = () => {
  return (
    <div className="fixed inset-0 bg-black flex justify-center items-center z-50">
      <div className="w-14 h-14 border-4 border-gray-700 border-t-red-600 rounded-full animate-spin"></div>
    </div>
  );
};

export default Loader;
