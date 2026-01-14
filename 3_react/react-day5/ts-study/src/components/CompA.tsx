import useLocalStorage from "./useLocalStorage";

function CompA() {
  const [value, setValue] = useLocalStorage("keyA", "");
  return (
    <>
      <p>{value}</p>
      <input
        type="text"
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
    </>
  );
}

export default CompA;
