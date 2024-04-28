import "./App.css";

const skills = [
  {
    skill: "HTML+CSS",
    level: "advanced",
    color: "#2662EA",
  },
  {
    skill: "JavaScript",
    level: "advanced",
    color: "#EFD81D",
  },
  {
    skill: "Web Design",
    level: "advanced",
    color: "#C3DCAF",
  },
  {
    skill: "Git and GitHub",
    level: "intermediate",
    color: "#E84F33",
  },
  {
    skill: "React",
    level: "advanced",
    color: "#60DAFB",
  },
  {
    skill: "Svelte",
    level: "beginner",
    color: "#FF3B00",
  },
];

function App() {
  return (
    <div className="container">
      <Avatar />
      <Data />
      <SkillList />
    </div>
  );
}

function Avatar() {
  return <img src="avatar.jpg" alt="Vinay Avatar" />;
}

function Data() {
  return (
    <div className="data">
      <h1 style={{ letterSpacing: "3px" }}>Vinay Shid</h1>
      <p style={{ letterSpacing: "1.5px" }}>
        Front-End web developer and student at Brainworks. When not coding or
        studying, I like to play video games, to cook (and eat), or to just
        enjoy sunset at the beach.
      </p>
    </div>
  );
}

function SkillList() {
  return (
    <div>
      {skills.map((skill) => (
        <Skills
          skill={skill.skill}
          color={skill.color}
          level={skill.level}
          key="Vinay"
        />
      ))}
    </div>
  );
}
function Skills({ skill, color, level }) {
  let text;
  switch (level) {
    case "intermediate":
      text = "👍";
      break;
    case "advanced":
      text = "💪";
      break;
    case "beginner":
      text = "👶";
      break;

    default:
      break;
  }
  return (
    <div className="skills" style={{ backgroundColor: color }}>
      {skill + text}
    </div>
  );
}

export default App;
