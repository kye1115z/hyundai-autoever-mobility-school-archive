import { useEffect, useState } from "react";
import ProblemForm from "./components/ProblemForm/ProblemForm";
import type { Problem } from "./types";
import Header from "./components/Header/Header";

function App() {
  // Stat
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

  // Header Stat 계산
  const stats = {
    total: problems.length,
    easy: problems.filter((p) => p.difficulty === "easy").length,
    medium: problems.filter((p) => p.difficulty === "medium").length,
    hard: problems.filter((p) => p.difficulty === "hard").length,
  };

  return (
    <>
      <div className="App">
        <Header
          total={stats.total}
          easy={stats.easy}
          medium={stats.medium}
          hard={stats.hard}
        />
        <ProblemForm onAdd={handleAdd} />
      </div>
    </>
  );
}

export default App;
