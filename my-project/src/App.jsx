import CrossIcon from "./components/icons/CrossIcon";
import MoonIcon from "./components/icons/MoonIcon";

const App = () => {
  return (
    <div className="min-h-screen bg-gray-200 bg-[url('./assets/images/bg-mobile-light.jpg')] bg-contain bg-no-repeat">
      <header className="container mx-auto px-4 pt-8">
        <div className="flex justify-between ">
          <h1 className="text-3xl font-semibold  text-white ">T O D O</h1>
          <button><MoonIcon/></button>
        </div>

        <form className=" mt-8 flex items-center gap-4 overflow-hidden rounded-md bg-white px-4 py-3">
          <span className="inline-block h-5 w-5 rounded-full border-2 "></span>
          <input
            type="text"
            placeholder="Create a new Todo"
            className="w-full text-gray-400 outline-none"
          />
        </form>
      </header>
      <main className="container mx-auto mt-8 px-4 ">
        <div className="rounded-md bg-white ">
          <article className="flex gap-4 border-b border-b-gray-400 px-4 py-4">
            <button className="inline-block h-5 w-5  flex-none  rounded-full border-2 "></button>
            <p className="grow text-gray-500">Proyecto de React Udemy</p>
            <button className="flex-none">
              <CrossIcon />
            </button>
          </article>

          <article className="flex gap-4 border-b border-b-gray-400 px-4 py-4">
            <button className="inline-block h-5 w-5  flex-none  rounded-full border-2 "></button>
            <p className="grow text-gray-500">Proyecto de React Udemy</p>
            <button className="flex-none">
              <CrossIcon />
            </button>
          </article>

          <article className="flex gap-4 border-b border-b-gray-400 px-4 py-4">
            <button className="inline-block h-5 w-5  flex-none  rounded-full border-2 "></button>
            <p className="grow text-gray-500">Proyecto de React Udemy</p>
            <button className="flex-none">
              <CrossIcon />
            </button>
          </article>
        </div>

        <section className="flex justify-between rounded-md bg-white px-4 py-4">
          <span className="text-gray-500">5 items left</span>
          <button className="text-gray-500">Clear completed</button>
        </section>
      </main>

      <section className="container mx-auto mt-4 rounded-md px-4 py-4 ">
        <div className="bg-white p-4 flex justify-center gap-4">
          <button className="text-blue-600">All</button>
          <button className="hover:text-blue-600">Active</button>
          <button className="hover:text-blue-600">Completed</button>
        </div>
      </section>

      <p className="text-center mt-4">Drag and Drop List</p>
    </div>
  );
};

export default App;
