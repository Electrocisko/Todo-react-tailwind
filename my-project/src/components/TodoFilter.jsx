
const TodoFilter = ({changeFilter, filter}) => {
    return(
        <section className="container mx-auto mt-4 rounded-md  py-4 ">
        <div className="flex justify-center gap-4 bg-white p-4  dark:bg-gray-800">
          <button onClick={ () =>  changeFilter("all")}
           className={` dark:text-gray-300${filter === "all" ? "text-blue-500 hover:text-blue-500" :"text-black hover:text-blue-500"}`}>
            
            All</button>
          <button onClick={ () =>  changeFilter("active")} className="hover:text-blue-600  dark:text-gray-300">Active</button>
          <button onClick={ () =>  changeFilter("completed")}  className="hover:text-blue-600  dark:text-gray-300">Completed</button>
        </div>
      </section>
    )
}

export default TodoFilter;