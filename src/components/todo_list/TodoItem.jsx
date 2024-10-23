import { MdDelete, MdEdit } from "react-icons/md";

function TodoItem(props) {
  const {title,deleteItem,handleEdit}=props
  return (
    <li className="flex justify-between border p-2 my-4 gap-4 capitalize">
      <h6>{title}</h6>

      <div className="flex gap-1 items-center cursor-pointer">
        <MdEdit onClick={handleEdit} className="text-blue-600" />
        <MdDelete onClick={deleteItem} className="text-red-500" />
      </div>
    </li>
  );
}

export default TodoItem;
