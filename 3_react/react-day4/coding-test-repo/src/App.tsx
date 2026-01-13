import { useEffect, useState } from "react";
import ProblemForm from "./components/ProblemForm/ProblemForm";
import type { Problem } from "./types";

function App() {
  const [problems, setProblems] = useState<Problem[]>(() => {
    const saved = localStorage.getItem("problems");
    if (saved) {
      return JSON.parse(saved);
    }
    return [];
  });

  useEffect(() => {
    localStorage.setItem("problems", JSON.stringify(problems));
  }, [problems]);

  // CRUD 함수
  const handleAdd = (problemData: Omit<Problem, "id">) => {
    const newProblem: Problem = {
      ...problemData,
      id: Date.now(),
    };
    setProblems([newProblem, ...problems]);
  };
  console.log(problems);

  return (
    <>
      <ProblemForm onAdd={handleAdd} />
    </>
  );
}

export default App;
