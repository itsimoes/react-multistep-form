import "./App.css";
import DarkMode from "./Components/Darkmode/Darkmode";
import Home from "./Components/Home/Home";
import Container from '@mui/material/Container';

function App() {
  return (
    <Container>
      <div className="darkmode-container">
        <DarkMode /> {/* teste */}
      </div>
      <div className="home-container">
        <Home />
      </div>
    </Container>
  );
}

export default App;
