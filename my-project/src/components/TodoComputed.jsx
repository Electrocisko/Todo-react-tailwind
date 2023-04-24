
const TodoComputed = ({computedItemsLeft, clearComplete}) => {

    return (
        <section className="flex justify-between rounded-b-md bg-white px-4 py-4  dark:bg-gray-800">
        <span className="text-gray-500  dark:text-gray-300">{computedItemsLeft} items left</span>
        <button onClick={() => {clearComplete()}} className="text-gray-500">Clear completed</button>
      </section>
    )
}

export default TodoComputed;