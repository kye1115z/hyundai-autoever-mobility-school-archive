import { useState } from "react";

function Login() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [errors, setErrors] = useState({});
  const [isLogin, setIsLogin] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });

    if (errors[name]) {
      setErrors({
        ...errors,
        [name]: "",
      });
    }
  };

  function validateForm() {
    const newErrors = {};

    if (!formData.email) {
      newErrors.email = "이메일을 입력해주세요.";
    } else if (!formData.email.includes("@")) {
      newErrors.email = "올바른 이메일 형식이 아닙니다.";
    }

    if (!formData.password) {
      newErrors.password = "이메일을 입력해주세요.";
    } else if (formData.password.length < 6) {
      newErrors.password = "비밀번호는 6자 이상 입력해주세요.";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  }

  const handleSubmit = (e) => {
    e.preventDefault();

    if (validateForm()) {
      console.log("로그인 성공!", formData);
      alert(`${formData.email}님 환영합니다!`);
    }
  };

  return (
    <div
      style={{
        maxWidth: "400px",
        margin: "50px auto",
        padding: "30px",
        border: "1px solid #ddd",
        borderRadius: "10px",
        boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
      }}
    >
      <h2 style={{ textAlign: "center", marginBottom: "30px" }}>로그인</h2>

      <form noValidate onSubmit={handleSubmit}>
        {/* 이메일 */}
        <div style={{ marginBottom: "20px" }}>
          <label
            style={{
              display: "block",
              marginBottom: "8px",
              fontWeight: "bold",
              color: "#333",
            }}
          >
            이메일
          </label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="example@email.com"
            style={{
              width: "100%",
              padding: "12px",
              fontSize: "1rem",
              border: errors.email ? "2px solid red" : "1px solid #ddd",
              borderRadius: "5px",
              boxSizing: "border-box",
            }}
          />
          {errors.email && (
            <p
              style={{
                color: "red",
                fontSize: "0.9rem",
                marginTop: "5px",
                marginBottom: 0,
              }}
            >
              ⚠️ {errors.email}
            </p>
          )}
        </div>

        {/* 비밀번호 */}
        <div style={{ marginBottom: "20px" }}>
          <label
            style={{
              display: "block",
              marginBottom: "8px",
              fontWeight: "bold",
              color: "#333",
            }}
          >
            비밀번호
          </label>
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            placeholder="6자 이상 입력"
            style={{
              width: "100%",
              padding: "12px",
              fontSize: "1rem",
              border: errors.password ? "2px solid red" : "1px solid #ddd",
              borderRadius: "5px",
              boxSizing: "border-box",
            }}
          />
          {errors.password && (
            <p
              style={{
                color: "red",
                fontSize: "0.9rem",
                marginTop: "5px",
                marginBottom: 0,
              }}
            >
              ⚠️ {errors.password}
            </p>
          )}
        </div>

        {/* 제출 버튼 */}
        <button
          type="submit"
          style={{
            width: "100%",
            padding: "12px",
            fontSize: "1rem",
            backgroundColor: "#007bff",
            color: "white",
            border: "none",
            borderRadius: "5px",
            cursor: "pointer",
            fontWeight: "bold",
          }}
        >
          로그인
        </button>
      </form>
    </div>
  );
}

export default Login;
