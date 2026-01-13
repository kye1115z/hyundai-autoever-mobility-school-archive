import { useEffect, useReducer, useRef, useState } from "react";
import type { Problem, Difficulty, Platform } from "../../types";
import styles from "./ProblemForm.module.css";

interface ProblemFormProps {
  onAdd: (problem: Omit<Problem, "id">) => void;
  editingProblem: Problem | null;
  onUpdate: (problem: Problem) => void;
  onCancelEdit: () => void;
}

function ProblemForm({
  onAdd,
  editingProblem,
  onUpdate,
  onCancelEdit,
}: ProblemFormProps) {
  const [form, setForm] = useState({
    title: "",
    platform: "백준" as Platform,
    difficulty: "easy" as Difficulty,
    solvedAt: new Date().toISOString().split("T")[0],
    timeSpent: "",
    tags: "",
    memo: "",
    url: "",
  });

  const titleInputRef = useRef<HTMLInputElement>(null);

  // 수정 모드일 때 폼 채우기
  useEffect(() => {
    if (editingProblem) {
      setForm({
        title: editingProblem.title,
        difficulty: editingProblem.difficulty,
        platform: editingProblem.platform,
        solvedAt: editingProblem.solvedAt,
        timeSpent: editingProblem.timeSpent?.toString() || "",
        tags: editingProblem.tags.join(", "),
        memo: editingProblem.memo,
        url: editingProblem.url || "",
      });
      titleInputRef.current?.focus();
    }
  }, [editingProblem]);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!form.title) {
      alert("문제 제목을 입력해 주세요!");
      return;
    }

    const problemData = {
      title: form.title,
      platform: form.platform,
      difficulty: form.difficulty,
      solvedAt: form.solvedAt,
      timeSpent: form.timeSpent ? parseInt(form.timeSpent) : undefined,
      tags: form.tags
        .split(",")
        .map((tag) => tag.trim())
        .filter(Boolean),
      memo: form.memo,
      url: form.url,
    };

    if (editingProblem) {
      onUpdate({
        ...problemData,
        id: editingProblem.id,
      });
    } else {
      onAdd(problemData);
    }

    setForm({
      title: "",
      platform: "백준",
      difficulty: "easy",
      solvedAt: new Date().toISOString().split("T")[0],
      timeSpent: "",
      tags: "",
      memo: "",
      url: "",
    });

    titleInputRef.current?.focus();
  };

  const handleCancel = () => {
    setForm({
      title: "",
      difficulty: "medium",
      platform: "백준",
      solvedAt: new Date().toISOString().split("T")[0],
      timeSpent: "",
      tags: "",
      memo: "",
      url: "",
    });
    onCancelEdit();
    titleInputRef.current?.focus();
  };

  return (
    <form onSubmit={handleSubmit} className={styles.form}>
      <h2>새 문제 추가</h2>
      <div className={styles.filedBox}>
        <div className={styles.filed}>
          <p>문제 제목 *</p>
          <input
            ref={titleInputRef}
            type="text"
            value={form.title}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              setForm({ ...form, title: e.target.value })
            }
            placeholder="예) 피보나치 수"
          />
        </div>
        <div className={styles.filed}>
          <p>플랫폼 *</p>
          <select
            name=""
            value={form.platform}
            onChange={(e: React.ChangeEvent<HTMLSelectElement>) =>
              setForm({ ...form, platform: e.target.value as Platform })
            }
          >
            <option value={"백준"}>백준</option>
            <option value={"프로그래머스"}>프로그래머스</option>
            <option value={"Leetcode"}>LeetCode</option>
          </select>
        </div>
      </div>
      <div className={styles.filedBox}>
        <div className={styles.filed}>
          <p>난이도 *</p>
          <select
            name=""
            value={form.difficulty}
            onChange={(e: React.ChangeEvent<HTMLSelectElement>) =>
              setForm({ ...form, difficulty: e.target.value as Difficulty })
            }
          >
            <option value={"easy"}>쉬움</option>
            <option value={"medium"}>보통</option>
            <option value={"hard"}>어려움</option>
          </select>
        </div>
        <div className={styles.filed}>
          <p>풀이 날짜 *</p>
          <input
            type="date"
            value={form.solvedAt}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              setForm({ ...form, solvedAt: e.target.value })
            }
          />
        </div>
        <div className={styles.filed}>
          <p>소요 시간(분)</p>
          <input
            type="number"
            value={form.timeSpent}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              setForm({ ...form, timeSpent: e.target.value })
            }
            placeholder="30"
          />
        </div>
      </div>
      <div className={`${styles.filed} ${styles.single}`}>
        <p>태그 (쉼표로 구분) *</p>
        <input
          type="text"
          value={form.tags}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setForm({ ...form, tags: e.target.value })
          }
          placeholder="DP, 그리디, 구현"
        />
      </div>
      <div className={`${styles.filed} ${styles.single}`}>
        <p>메모 *</p>
        <textarea
          value={form.memo}
          onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) =>
            setForm({ ...form, memo: e.target.value })
          }
          placeholder="풀이 방법, 느낀 점 등"
        ></textarea>
      </div>
      <div className={`${styles.filed} ${styles.single}`}>
        <p>문제 링크</p>
        <input
          type="text"
          value={form.url}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setForm({ ...form, url: e.target.value })
          }
          placeholder="https://..."
        />
      </div>

      <div className={styles.btnBox}>
        <button type="submit" className={styles.formBtn}>
          {editingProblem ? "수정하기" : "추가하기"}
        </button>
        {editingProblem && (
          <button
            type="button"
            onClick={handleCancel}
            className={styles.cancelBtn}
          >
            취소
          </button>
        )}
      </div>
    </form>
  );
}

export default ProblemForm;
