const TodoFilter = ({ changeFilter, filter }) => {
  return (
    <section className="container mx-auto mt-4 rounded-md  py-4 ">
      <div className="flex justify-center gap-4 bg-white p-4  dark:bg-gray-800">
        <button
          onClick={() => changeFilter("all")}
          className={`${
            filter === "all"
                ? "text-blue-500 hover:text-gray-400"
                : "text-gray-400 hover:text-blue-500"
        }`}
        >
          All
        </button>
        <button
          onClick={() => changeFilter("active")}
          className={`${
            filter === "active"
                ? "text-blue-500 hover:text-gray-400"
                : "text-gray-400 hover:text-blue-500"
        }`}
        >
          Active
        </button>
        <button
          onClick={() => changeFilter("completed")}
          className={`${
            filter === "completed"
                ? "text-blue-500 hover:text-gray-400"
                : "text-gray-400 hover:text-blue-500"
        }`}
        >
          Completed
        </button>
      </div>
    </section>
  );
};

export default TodoFilter;
