import "./App.css";
import OfficeCard from "./components/OfficeCard";

function App() {
  return (
    <div className="App">
      <OfficeCard name="Office 017" isManager={true} />
    </div>
  );
}

export default App;
