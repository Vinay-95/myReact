import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

const friends = [
  {
    id: 1,
    name: "Vinay",
    image: "https://i.pravatar.cc/300",
    balance: -7,
  },
  {
    id: 2,
    name: "Rupam",
    image: "https://i.pravatar.cc/299",
    balance: 20,
  },
  {
    id: 3,
    name: "Rahul",
    image: "https://i.pravatar.cc/250",
    balance: -14,
  },
  {
    id: 4,
    name: "Prasad",
    image: "https://i.pravatar.cc/265",
    balance: 0,
  },
];

function Button({ children, onClick }) {
  return (
    <button className="button" onClick={onClick}>
      {children}
    </button>
  );
}
function App() {
  const [addFriend, setAddFriend] = useState(false);
  const [newFriend, setNewFriend] = useState([]);
  const [selectFriend, setSelectFriend] = useState(null);

  function handleSetNewFriend(Friend) {
    setNewFriend((newFriend) => [...newFriend, Friend]);
    setAddFriend(false);
  }

  function handleSelect(friend) {
    // selectFriend?.id === friend.id
    //   ? setSelectFriend(null)
    //   : setSelectFriend(friend);
    setSelectFriend((curr) => (curr?.id === friend.id ? null : friend));
  }

  function handleSplitBill(value) {
    // console.log(value);

    setNewFriend((friends) =>
      friends.map((friend) =>
        friend.id === selectFriend.id
          ? { ...friend, balance: friend.balance + value }
          : friend
      )
    );

    setSelectFriend(null);
  }

  return (
    <div className="app">
      <div className="sidebar">
        <FriendsList
          friends={newFriend}
          onClickSelect={handleSelect}
          selectFriend={selectFriend}
        />

        {addFriend && <AddFriend onAddFriend={handleSetNewFriend} />}

        <Button onClick={() => setAddFriend((is) => !is)}>
          {!addFriend ? "Add Friend" : "close"}
        </Button>
      </div>
      {selectFriend && (
        <SplitBill
          selectFriend={selectFriend}
          onSplitBill={handleSplitBill}
          key={selectFriend.id}
        />
      )}
    </div>
  );
}

function FriendsList({ friends, onClickSelect, selectFriend }) {
  return (
    <ul>
      {friends.map((friend) => (
        <Friend
          friend={friend}
          key={friend.id}
          onClickSelect={onClickSelect}
          selectFriend={selectFriend}
        />
      ))}
    </ul>
  );
}

function Friend({ friend, onClickSelect, selectFriend }) {
  const isSelected = selectFriend?.id === friend.id;

  return (
    <li className={isSelected ? "selected" : ""}>
      <img src={friend.image} alt="potrait" />
      <h3>{friend.name}</h3>

      {friend.balance < 0 && (
        <p className="red">
          You owe {friend.name} ${Math.abs(friend.balance)}
        </p>
      )}
      {friend.balance > 0 && (
        <p className="green">
          {friend.name} owes you ${Math.abs(friend.balance)}
        </p>
      )}
      {friend.balance === 0 && <p>You both are clear</p>}

      <Button onClick={() => onClickSelect(friend)}>
        {isSelected ? "Close" : "Select"}
      </Button>
    </li>
  );
}

function AddFriend({ onAddFriend }) {
  const [name, setName] = useState("");
  const [image, setImage] = useState("https://i.pravatar.cc/59");

  function handleSubmit(e) {
    e.preventDefault();

    const newFriend = { name, id: Math.random() * 1000, image, balance: 0 };

    onAddFriend(newFriend);

    setName("");
    setImage("https://i.pravatar.cc/59");
  }

  return (
    <form className="form-add-friend" onSubmit={handleSubmit}>
      <label>🧑‍🤝‍🧑 Friend name </label>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      <label>🏜️ Image URL </label>
      <input
        type="text"
        value={image}
        onChange={(e) => setImage(e.target.value)}
      />

      <Button>Add</Button>
    </form>
  );
}

function SplitBill({ selectFriend, onSplitBill }) {
  const [bill, setBill] = useState("");
  const [paidByUser, setPaidByUser] = useState("");
  const expense = bill ? bill - paidByUser : "";
  const [paidByWho, setPaidByWho] = useState("user");

  function handleSubmit(e) {
    e.preventDefault();

    if (!bill || !paidByUser) return;

    onSplitBill(paidByWho === "user" ? expense : -paidByUser);
  }

  return (
    <form className="form-split-bill" onSubmit={handleSubmit}>
      <h2>SPLIT BILL WITH {selectFriend.name}</h2>
      <label>Bill value</label>
      <input
        type="text"
        value={bill}
        onChange={(e) => setBill(Number(e.target.value))}
      />

      <label>Your expense</label>
      <input
        type="text"
        value={paidByUser}
        onChange={(e) =>
          setPaidByUser(
            Number(e.target.value) > bill ? paidByUser : Number(e.target.value)
          )
        }
      />

      <label>{selectFriend.name} expense:</label>
      <input type="text" value={expense} disabled />

      <label>Who's paying the bill? </label>
      <select value={paidByWho} onChange={(e) => setPaidByWho(e.target.value)}>
        <option value="user">You</option>
        <option value="friend">{selectFriend.name}</option>
      </select>

      <button className="button">Split Bill</button>
    </form>
  );
}

export default App;
