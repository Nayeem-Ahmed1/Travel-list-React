import { useState } from "react";
import Logo from "./Logo";
import Form from "./Form";
import PackingList from "./PackingList";
import Stats from "./Stats";

function App() {
  const [prodItem, setprodItem] = useState([]);

  function handleClearList() {
    setprodItem([]);
  }

  function handleAddItem(item) {
    setprodItem((items) => [...items, item]);
  }

  function handleCheckingItem(id) {
    setprodItem((items) =>
      items.map((item) =>
        item.id === id ? { ...item, packed: !item.packed } : item
      )
    );
  }

  function handleDeleteItem(id) {
    setprodItem((items) => items.filter((item) => item.id !== id));
  }

  return (
    <div className="app">
      <Logo />
      <Form onAddItem={handleAddItem} />
      <PackingList
        itemList={prodItem}
        onDeleteItem={handleDeleteItem}
        onCheckPacked={handleCheckingItem}
        onClearList={handleClearList}
      />
      <Stats itemList={prodItem} />
    </div>
  );
}

export default App;
