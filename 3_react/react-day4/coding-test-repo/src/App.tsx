import { useEffect, useState } from "react";
import ProblemForm from "./components/ProblemForm/ProblemForm";
import { Difficulty, Platform, type Problem } from "./types";
import Header from "./components/Header/Header";
import ProblemList from "./components/ProblemList/ProblemList";
import FilterBar from "./components/FilterBar/FilterBar";

function App() {
  // Stat
  const [problems, setProblems] = useState<Problem[]>(() => {
    const saved = localStorage.getItem("problems");
    if (saved) {
      return JSON.parse(saved);
    }
    return [];
  });

  // 수정
  const [editingProblem, setEditingProblem] = useState<Problem | null>(null);

  // 필터링
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [selectedDifficulty, setSelectedDifficulty] = useState<
    Difficulty | "all"
  >("all");
  const [selectedPlatform, setSelectedPlatform] = useState<Platform | "all">(
    "all"
  );

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

  const handleDelete = (id: number) => {
    setProblems(problems.filter((p) => p.id !== id));
  };

  const handleEdit = (problem: Problem) => {
    setEditingProblem(problem);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleUpdate = (updatedProblem: Problem) => {
    setProblems(
      problems.map((p) => (p.id === updatedProblem.id ? updatedProblem : p))
    );
    setEditingProblem(null);
  };

  const handleCancelEdit = () => {
    setEditingProblem(null);
  };

  // Header Stat 계산
  const stats = {
    total: problems.length,
    easy: problems.filter((p) => p.difficulty === "easy").length,
    medium: problems.filter((p) => p.difficulty === "medium").length,
    hard: problems.filter((p) => p.difficulty === "hard").length,
  };

  // Filtering 기능

  return (
    <>
      <div className="App">
        <Header
          total={stats.total}
          easy={stats.easy}
          medium={stats.medium}
          hard={stats.hard}
        />
        <ProblemForm
          onAdd={handleAdd}
          editingProblem={editingProblem}
          onUpdate={handleUpdate}
          onCancelEdit={handleCancelEdit}
        />
        <FilterBar
          searchQuery={searchQuery}
          onSearchChange={setSearchQuery}
          selectedDifficulty={selectedDifficulty}
          onDifficultyChange={setSelectedDifficulty}
          selectedPlatform={selectedPlatform}
          onPlatformChange={setSelectedPlatform}
        />
        <ProblemList
          problems={problems}
          onEdit={handleEdit}
          onDelete={handleDelete}
        />
      </div>
    </>
  );
}

export default App;
