import "./App.css";
import Weather from "./Weather";

function App() {
  return (
    <div className="App">
      <Weather defaultcity="doha" />

      <footer>
        This page was create and run by Ama Akarregi is hots in{" "}
        <a href="https://github.com/akarreg/weather-react">Github</a>and Netflix
      </footer>
    </div>
  );
}

export default App;
