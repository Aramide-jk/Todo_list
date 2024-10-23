import TodoItem from "./TodoItem";

function TodoList(props) {
  const { items, clearList, deleteItem,handleEdit } = props;

  return (
    <div className="items-center text-center mt-10 border p-6 w-[30rem]">
      <ul className="mb-5">
        <h3>To Do List</h3>
        {items.map((item) => {
          return (
            <TodoItem
              key={item.id}
              title={item.title}
              deleteItem={() => deleteItem(item.id)}
              handleEdit={() => handleEdit(item.id)}
            />
          );
        })}
      </ul>
      <button
        type="button"
        onClick={clearList}
        className="bg-red-500 w-full rounded"
      >
        Clear List
      </button>
    </div>
  );
}

export default TodoList;
