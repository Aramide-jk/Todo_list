import { FaBook } from "react-icons/fa";
function TodoInput(props) {
  const { item, handleChange, handleSubmit,editItem } = props;

  return (
    <>
      <form onSubmit={handleSubmit} className=" items-center text-center">
        <h3>Todo List</h3>
        <div className="flex flex-col gap-6 border-2 p-8 mt-4">
          <div className="flex w-[30rem] border">
            <div className="">
              {" "}
              <FaBook className="h-full items-center " />
            </div>
            <div className="w-full">
              <input
                type="text"
                value={item}
                onChange={handleChange}
                placeholder="Add A Todo Items"
                className=" w-full outline-none outline border border-blue-500 capitalize"
              />
            </div>
          </div>
          <button
            type="submit"
            className= {editItem ? "bg-green-400 w-full text-gray-200 rounded" : "bg-blue-500 w-full text-gray-200 rounded"}
          >
            {editItem ? "Edit Item" : "Add Item"}
          </button>
        </div>
      </form>
    </>
  );
}

export default TodoInput;
