import { useState } from "react";
import "./TodoApp.css";

function TodoApp() {
  // 1. To do 목록
  const [todos, setTodos] = useState([]); // 객체 배열로 관리

  // 2. 인풋: 입력값
  const [input, setInput] = useState("");

  // 3. 필터
  const [filter, setFilter] = useState("all");

  const addTodo = () => {
    // 빈 입력 방지
    if (input.trim() === "") {
      // trim 앞뒤 공백 날려줌.
      alert("할 일을 입력하세요!");
      return;
    }

    // 새 todo 객체 생성
    const newTodo = {
      id: Date.now(),
      text: input,
      completed: false,
    };

    setTodos([...todos, newTodo]);
    setInput("");
  };

  function handleKeyDown(e) {
    if (e.key === "Enter") {
      addTodo();
    }
  }

  function deleteTodo(id) {
    setTodos(todos.filter((todo) => todo.id !== id));
  }

  function toggleTodo(id) {
    setTodos(
      todos.map(
        (todo) =>
          todo.id === id
            ? {
                ...todo,
                completed: !todo.completed, // 해당 todo만 변경
              }
            : todo // 나머지는 그대로
      )
    );
  }

  const filteredTodos = todos.filter((todo) => {
    if (filter === "all") return true;
    if (filter === "completed") return todo.completed;
    if (filter === "active") return !todo.completed;
  });

  return (
    <div className="todo-container">
      <h1>To do List</h1>

      <div className="filter-section">
        <button
          onClick={() => setFilter("all")}
          style={{
            backgroundColor: filter === "all" ? "#007bff" : "#f8f9fa",
            color: filter === "all" ? "white" : "#333",
          }}
        >
          전체
        </button>
        <button
          onClick={() => setFilter("completed")}
          style={{
            backgroundColor: filter === "completed" ? "#007bff" : "#f8f9fa",
            color: filter === "completed" ? "white" : "#333",
          }}
        >
          완료
        </button>
        <button
          onClick={() => setFilter("active")}
          style={{
            backgroundColor: filter === "active" ? "#007bff" : "#f8f9fa",
            color: filter === "active" ? "white" : "#333",
          }}
        >
          미완료
        </button>
      </div>

      <div className="input-section">
        <input
          type="text"
          value={input}
          onChange={(e) => {
            setInput(e.target.value);
          }}
          onKeyDown={handleKeyDown}
          placeholder="할 일을 입력하세요."
        />
        <button onClick={() => addTodo()}>추가</button>
      </div>

      <ul className="todo-list">
        {filteredTodos.map((todo) => (
          <li key={todo.id} className="todo-item">
            <input
              type="checkbox"
              checked={todo.completed}
              onChange={() => toggleTodo(todo.id)}
            />
            <span
              style={{
                textDecoration: todo.completed ? "line-through" : "none",
                color: todo.completed ? "#999" : "#333",
              }}
            >
              {todo.text}
            </span>
            <button onClick={() => deleteTodo(todo.id)}>삭제</button>
          </li>
        ))}
      </ul>
      {todos.length === 0 && <p>할 일이 없습니다. 추가해 보세요.</p>}

      <div className="stats">
        <p>
          전체: {todos.length}개 | 완료:{" "}
          {todos.filter((t) => t.completed).length}개 | 미완료:{" "}
          {todos.filter((t) => !t.completed).length}개
        </p>
      </div>
    </div>
  );
}

export default TodoApp;
