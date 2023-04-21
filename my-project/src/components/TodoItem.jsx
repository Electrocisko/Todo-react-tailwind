import CrossIcon from "./icons/CrossIcon";
import CheckIcon from "./icons/CheckIcon";

const TodoItem = ({ todo, updatedTodo, removeTodo }) => {
  const { id, title, completed } = todo;

  return (
    <article className="flex gap-4 border-b border-b-gray-400 px-4 py-4">
    
      <button onClick={() => updatedTodo(id)}   className={` h-5 w-5 rounded-full border-2 flex-none ${completed ? "flex justify-center items-center   flex-none  bg-gradient-to-r from-teal-400 to-purple-500" : "inline-block" }`}>
        {completed &&  <CheckIcon />}
      </button>

      <p className={`grow text-gray-500 ${completed && "text-decoration-line: line-through"}`}>{title}</p>
      <button onClick={() => removeTodo(id)}  className="flex-none">
        <CrossIcon />
      </button>
    </article>
  );
};

export default TodoItem;
