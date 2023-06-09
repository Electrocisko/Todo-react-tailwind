import TodoItem from "./TodoItem";


const TodoList = ({todos, updatedTodo, removeTodo }) => {

    
    return (
        <div className="mt-8 rounded-t-md bg-white  dark:bg-gray-900">
        { todos.map((todo) => (
             <TodoItem key={todo.id} todo={todo} updatedTodo={updatedTodo} removeTodo={removeTodo}/>
        ))
        }
      </div>

    )
}

export default TodoList;