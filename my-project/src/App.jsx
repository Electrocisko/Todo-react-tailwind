import { useEffect, useState } from "react";
import Header from "./components/Header";
import TodoComputed from "./components/TodoComputed";
import TodoCreate from "./components/TodoCreate";
import TodoFilter from "./components/TodoFilter";
import TodoList from "./components/TodoList";

const initialState = JSON.parse(localStorage.getItem("todos","todos")) || [];

const App = () => {
  const [todos, setTodos] = useState(initialState);

  const [filter, setFilter] = useState("all");

  useEffect(() => { 
    localStorage.setItem("todos", JSON.stringify(todos));
  },[todos]);

  const createTodo = (title) => {
    const newTodo = {
      id: Date.now(),
      title: title,
      completed: false,
    };
    setTodos([...todos, newTodo]);
  };

  const updatedTodo = (id) => {
    const list = todos.map((item) => {
      if (item.id === id) {
        item.completed = !item.completed;
      }
      return item;
    });
    setTodos(list);
  };

  const removeTodo = (id) => {
    let list = todos.filter((todo) => todo.id !== id);
    setTodos(list);
  };

  const computedItemsLeft = () => {
    return todos.filter((todo) => !todo.completed).length;
  };

  const clearComplete = () => {
    let list = todos.filter((todo) => todo.completed === false);
    setTodos(list);
  };

  const filterTodo = () => {
    if (filter === "active") {
      return todos.filter((todo) => todo.completed === false);
    }
    if (filter === "completed") {
      return todos.filter((todo) => todo.completed === true);
    }
    return todos;
  };

  const changeFilter = (state) => {
    setFilter(state);
  };

  return (
    <div className=" min-h-screen bg-gray-200 bg-[url('./assets/images/bg-mobile-light.jpg')] bg-contain bg-no-repeat dark:bg-[url('./assets/images/bg-mobile-dark.jpg')] dark:bg-gray-900 md:bg-[url('./assets/images/bg-desktop-light.jpg')] dark:md:bg-[url('./assets/images/bg-desktop-dark.jpg')]">
      <Header />



      <main className="container mx-auto mt-8 px-4">
        <TodoCreate createTodo={createTodo} />

        <TodoList
          todos={filterTodo(todos)}
          updatedTodo={updatedTodo}
          removeTodo={removeTodo}
        />

        <TodoComputed
          computedItemsLeft={computedItemsLeft()}
          clearComplete={clearComplete}
        />

        <TodoFilter changeFilter={changeFilter} filter={filter} />
      </main>

      <footer className="mt-4 text-center">Drag and Drop List</footer>
    </div>
  );
};

export default App;
