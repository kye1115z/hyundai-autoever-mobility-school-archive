function Fruits() {
  const fruits = [
    { id: 1, name: "🍎 사과", color: "red" },
    { id: 2, name: "🍌 바나나", color: "yellow" },
    { id: 3, name: "🍊 오렌지", color: "orange" },
    { id: 4, name: "🍇 포도", color: "purple" },
    { id: 5, name: "🍓 딸기", color: "red" },
  ];
  return (
    <>
      {fruits.map((fruit) => (
        <li
          key={fruit.id}
          style={{
            padding: "15px",
            margin: "10px 0",
            backgroundColor: "O#f8f9fa",
            borderRadius: "5px 5px",
            borderLeft: `5px solid ${fruit.color}`,
          }}
        >
          {fruit.name}
        </li>
      ))}
    </>
  );
}

export default Fruits;
