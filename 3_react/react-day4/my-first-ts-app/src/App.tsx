import "./App.css";
import Button from "./components/Button";

function App() {
  return (
    <>
      <Button onClick={() => console.log("Primary")}>Primary</Button>
      <Button onClick={() => console.log("Secondary")}>Secondary</Button>
      <Button onClick={() => console.log("Delete")}>Delete</Button>
      <Button onClick={() => console.log("Disabled")} disabled={true}>
        Disabled
      </Button>
    </>
  );
}

export default App;
