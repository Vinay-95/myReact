import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

const friends = [
  {
    id: 1,
    name: "Vinay",
    image: "https://i.pravatar.cc/300",
    balance: 20,
  },
  {
    id: 2,
    name: "Rupam",
    image: "https://i.pravatar.cc/300",
    balance: 20,
  },
  {
    id: 3,
    name: "Rahul",
    image: "https://i.pravatar.cc/300",
    balance: 20,
  },
  {
    id: 4,
    name: "Prasad",
    image: "https://i.pravatar.cc/300",
    balance: 20,
  },
];
function App() {
  return (
    <div className="app">
      <div className="sidebar">
        <FriendsList />
      </div>
    </div>
  );
}

function FriendsList() {
  return (
    <ul>
      {friends.map((friend) => (
        <Friend friend={friend} key={friend.id} />
      ))}
    </ul>
  );
}

function Friend({ friend }) {
  return <li>{friend.name}</li>;
}

function AddFriend() {
  return (
    <div className="form-add-friend">
      <form>
        <label>🧑‍🤝‍🧑 Freind name : </label>
        <input type="text" value="Clark" />

        <label>🏜️ Image URL : </label>
        <input type="url" value="https://i.pravatar.cc/300" />

        <button className="button">Add</button>
      </form>
      <button className="button">Close</button>
    </div>
  );
}

function SplitBill() {
  return (
    <div className="form-split-bill">
      <form>
        <h2>SPLIT BILL WITH SARAH</h2>
        <label>Bill value</label>
        <input type="number" />

        <label>Your expense</label>
        <input type="number" />

        <label>Sarah's expense:</label>
        <input type="number" value="50" />

        <label>Who's paying the bill? </label>
        <select>
          <option>You</option>
          <option>Clark</option>
        </select>

        <button className="button">Split Bill</button>
      </form>
    </div>
  );
}

export default App;
