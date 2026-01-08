function LoginStatus() {
  const isLoggedIn = true;
  return (
    <div>
      <button>{isLoggedIn ? "로그아웃" : "로그인"}</button>
    </div>
  );
}

export default LoginStatus;
