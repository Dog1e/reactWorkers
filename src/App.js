import { useState } from "react";
import Form from "./components/form/form";
import "./styles.css";

export const PROFFESIONS = [
  {
    role: "project manager",
    technology: ["Extreme Programming (XP)", "Scrum", "Kanban"]
  },
  {
    role: "UX/UI designer",
    technology: [
      "Figma",
      "Adobe XD",
      "Sketch",
      "Adobe Photoshop",
      "Adobe Illustrator"
    ]
  },
  { role: "front-end", technology: ["HTML", "CSS", "JS", "SASS"] },
  {
    role: "back-end",
    technology: ["PHP", "SQL", "Python", "Node JS", "React", "Angular"]
  },
  {
    role: "tester",
    technology: [
      "Jira",
      "Azure DevOps Server",
      "Selenium",
      "Cypress",
      "Postman",
      "Jenkins"
    ]
  }
];

const workers = [
  {
    name: "Andrzej",
    surname: "Wiśniewski",
    birthDate: "1993-03-12",
    role: "back-end",
    technology: "SQL"
  }
];

export default function App() {
  return (
    <div className="App">
      <Form />
      <p>w konsoli</p>
    </div>
  );
}
