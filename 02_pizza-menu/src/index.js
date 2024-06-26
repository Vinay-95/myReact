import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

const pizzaData = [
  {
    name: "Focaccia",
    ingredients: "Bread with italian olive oil and rosemary",
    price: 6,
    photoName: "pizzas/focaccia.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Margherita",
    ingredients: "Tomato and mozarella",
    price: 10,
    photoName: "pizzas/margherita.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Spinaci",
    ingredients: "Tomato, mozarella, spinach, and ricotta cheese",
    price: 12,
    photoName: "pizzas/spinaci.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Funghi",
    ingredients: "Tomato, mozarella, mushrooms, and onion",
    price: 12,
    photoName: "pizzas/funghi.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Salamino",
    ingredients: "Tomato, mozarella, and pepperoni",
    price: 15,
    photoName: "pizzas/salamino.jpg",
    soldOut: true,
  },
  {
    name: "Pizza Prosciutto",
    ingredients: "Tomato, mozarella, ham, aragula, and burrata cheese",
    price: 18,
    photoName: "pizzas/prosciutto.jpg",
    soldOut: false,
  },
];

function App() {
  return (
    <div className="container">
      <Header />
      <Menu />
      <Footer />
    </div>
  );
}

function Header() {
  return (
    <header className="header">
      <h1>Buono Pizza Co.</h1>
    </header>
  );
}

function Menu() {
  // const empty = [];
  // const pizza = empty.length;
  const pizza = pizzaData;
  return pizza ? (
    <main className="menu">
      <h2>Our Menu</h2>
      <p>
        Authentic Italian cuisine, 6 creative dishes to choose from. All from
        our stone oven, all delicious.
      </p>
      <ul className="pizzas">
        {pizzaData.map((pizza) => (
          <Pizza each={pizza} key={pizza.name} />
        ))}
      </ul>
    </main>
  ) : (
    <p>We're currently working on our menu, Please visit after some time ☺️</p>
  );
}

function Pizza({ each }) {
  // if (each.soldOut) return null;    //delete soldOut pizza
  // console.log(each);
  return (
    <li className={`pizza ${each.soldOut ? "sold-out" : ""}`}>
      <img src={each.photoName} alt={each.name} />
      <div>
        <h3>{each.name}</h3>
        <p>{each.ingredients}</p>
        <span>{each.soldOut ? "SOLD OUT" : each.price}</span>
      </div>
    </li>
  );
}

function Footer() {
  const hour = new Date().getHours();

  const open = 10;
  const close = 22;
  const isOpen = hour >= open && hour <= close;
  // const isOpen = true;

  // console.log(isOpen);
  return (
    <footer className="footer">
      {isOpen ? (
        <Order closeHour={close} openHour={open} />
      ) : (
        <p>
          We're currently closed, plaese come back between {open}:00 to {close}
          :00
        </p>
      )}
    </footer>
  );
}

function Order({ closeHour, openHour }) {
  return (
    <div className="order">
      <p>
        We're open to order from {openHour}:00 till {closeHour}:00
      </p>
      <button className="btn">Order</button>
    </div>
  );
}

// React v18
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
