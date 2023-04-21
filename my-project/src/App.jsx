import { useState } from "react";
import Header from "./components/Header";
import TodoComputed from "./components/TodoComputed";
import TodoCreate from "./components/TodoCreate";
import TodoFilter from "./components/TodoFilter";
import TodoList from "./components/TodoList";
 

const initialState= [
  {id:1,  title: "Funca esto??", completed: true},
  {id:2,  title: "Funca ", completed: false},
  {id:3,  title: "Funca si??", completed: true},
  {id:4,  title: "Funca no??", completed: false},
  {id:5,  title: "Funca Funky??", completed: false}
]

const App = () => {

  const [todos, setTodos] = useState(initialState);

  const createTodo = (title) => {

    const newTodo = {
      id: Date.now(),
      title: title,
      completed: false
    }
    setTodos([...todos, newTodo])
  }

  const updatedTodo = (id) => {
     const list = todos.map((item) =>{
          if(item.id === id) {
            item.completed = !item.completed
          }
          return item
        })
        setTodos(list);
  }

  const removeTodo = (id) => {
    let list = todos.filter((todo) => todo.id !== id )
    setTodos(list)
  }


  const computedItemsLeft = () => {
    return todos.filter((todo) => !todo.completed).length;
  }

  const clearComplete = () => {
    let list = todos.filter((todo) => todo.completed === false )
    setTodos(list)
  }

  return (
    <div className="min-h-screen bg-gray-200 bg-[url('./assets/images/bg-mobile-light.jpg')] bg-contain bg-no-repeat">
      <Header />

      <main className="container mx-auto mt-8 px-4 ">
        <TodoCreate createTodo={createTodo} />

        <TodoList todos={todos} updatedTodo={updatedTodo} removeTodo={removeTodo}/>
        
        <TodoComputed computedItemsLeft={computedItemsLeft()} clearComplete={clearComplete}/>

        <TodoFilter />
    
      </main>

      <footer className="mt-4 text-center">Drag and Drop List</footer>
    </div>
  );
};

export default App;
