function UserCard({ name, age, job, email }) {
  return (
    <div>
      <h3>{name}</h3>
      <p>나이: {age}세</p>
      <p>직업: {job}</p>
      <p>이메일: {email}</p>
    </div>
  );
}

export default UserCard;
