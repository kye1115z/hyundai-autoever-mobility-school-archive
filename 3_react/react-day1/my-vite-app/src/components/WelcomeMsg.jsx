function WelcomeMsg() {
  const userName = "김예은";
  const today = "2026년 1월 8일";
  return (
    <>
      <div>
        <h2>
          환영합니다, {userName}님! 오늘은 {today}입니다!
        </h2>
      </div>
    </>
  );
}

export default WelcomeMsg;
