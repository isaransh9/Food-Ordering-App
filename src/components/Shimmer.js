const Shimmer = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 p-2 gap-3">
      {[...Array(20)].map((_, index) => (
        <div
          key={index}
          className="shimmer-card bg-gray-300 rounded-lg w-full h-[300px] max-w-[300px]"
        ></div>
      ))}
    </div>
  );
};

export default Shimmer;
