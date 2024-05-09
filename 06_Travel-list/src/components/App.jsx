import { useState } from "react";
import "../App.css";
import { Header } from "./Header";
import { Form } from "./Form";
import { ListItems } from "./ListItems";
import { Footer } from "./Footer";

function App() {
  const [items, setItems] = useState([]);

  function handleAddItems(item) {
    setItems((items) => [...items, item]);
  }

  function handleDeleteItems(id) {
    setItems((items) => items.filter((item) => item.id !== id));
  }

  function handleUpdateItems(id) {
    setItems((items) =>
      items.map((item) =>
        item.id === id ? { ...item, packed: !item.packed } : item
      )
    );
  }
  return (
    <>
      <Header />
      <Form handleAddItems={handleAddItems} />
      <ListItems
        items={items}
        onDeleteItems={handleDeleteItems}
        onCkeckedItem={handleUpdateItems}
        setItems={setItems}
      />
      <Footer items={items} />
    </>
  );
}

export default App;
