import "./App.css";
import DarkMode from "./Components/Darkmode/Darkmode";
import Home from "./Components/Home/Home";

function App() {
  return (
    <div>
      <div className="darkmode-container">
        <DarkMode /> {/* teste */}
      </div>
      <Home />
    </div>
  );
}

export default App;
