/* eslint-disable react/prop-types */
/* eslint-disable react/react-in-jsx-scope */
function Item({ itemList, onDeleteItem, onCheckedItem }) {
  return (
    <div className="todo darker-todo">
      <li className="todo-item">{itemList.quantity + " " + itemList.name}</li>

      <button className="delete-btn" onClick={() => onDeleteItem(itemList.id)}>
        Delete
      </button>
      <button className="check-btn" onClick={() => onCheckedItem(itemList.id)}>
        {itemList.isChecked ? "Checked" : <div>Check</div>}
      </button>
    </div>
  );
}

export default Item;
