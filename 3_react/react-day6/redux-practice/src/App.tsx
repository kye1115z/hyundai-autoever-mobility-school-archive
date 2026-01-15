import { useState } from "react";
import "./App.css";
import {
  decrement,
  increment,
  incrementByAmount,
  reset,
} from "./store/CounterSlice";
import { useAppDispatch, useAppSelector } from "./store/Hooks";
import { addTodo, deleteTodo, toggleTodo } from "./store/todoSlice";

function App() {
  const count = useAppSelector((state) => state.counter.value);
  const todos = useAppSelector((state) => state.todo.todos);
  const dispatch = useAppDispatch();

  const [input, setInput] = useState("");
  const handleAddTodo = () => {
    if (input.trim()) {
      dispatch(addTodo(input));
      setInput("");
    }
  };
  return (
    <div>
      <h1>카운터: {count}</h1>

      {/* 액션 실행 */}
      <button onClick={() => dispatch(increment())}>+1</button>
      <button onClick={() => dispatch(decrement())}>-1</button>
      <button onClick={() => dispatch(incrementByAmount(5))}>+5</button>
      <button onClick={() => dispatch(reset())}>reset</button>

      <hr />

      <h2>할 일 목록</h2>
      <input
        value={input}
        onChange={(e) => setInput(e.target.value)}
        onKeyDown={(e) => e.key === "Enter" && handleAddTodo()}
      />
      <button onClick={handleAddTodo}>추가</button>

      <ul>
        {todos.map((todo: any) => (
          <li key={todo.id}>
            <input
              type="checkbox"
              checked={todo.comploted}
              onChange={() => dispatch(toggleTodo(todo.id))}
            />
            <span
              style={{
                textDecoration: todo.completed ? "line-through" : "none",
              }}
            >
              {todo.text}
            </span>
            <button onClick={() => dispatch(deleteTodo(todo.id))}>삭제</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
