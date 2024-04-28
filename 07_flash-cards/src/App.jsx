import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  return (
    <div>
      <FlashCards />
    </div>
  );
}

const questions = [
  {
    id: 3457,
    question: "What language is React based on?",
    answer: "JavaScript",
  },
  {
    id: 7336,
    question: "What are the building blocks of React apps?",
    answer: "Components",
  },
  {
    id: 8832,
    question: "What's the name of the syntax we use to describe a UI in React?",
    answer: "JSX",
  },
  {
    id: 1297,
    question: "How to pass data from parent to child components?",
    answer: "Props",
  },
  {
    id: 9103,
    question: "How to give components memory?",
    answer: "useState hook",
  },
  {
    id: 2002,
    question:
      "What do we call an input element that is completely synchronised with state?",
    answer: "Controlled element",
  },
];

function FlashCards() {
  function handleClick(id) {
    setSelectId(id !== selectId ? id : null);
  }

  const [selectId, setSelectId] = useState(null);

  return (
    <div className="flashcards">
      {questions.map((card) => (
        <div
          key={card.id}
          className={selectId === card.id ? "selected" : ""}
          onClick={() => handleClick(card.id)}
        >
          {card.id === selectId ? card.answer : card.question}
        </div>
      ))}
    </div>
  );
}

export default App;
