import "./App.css";
import HomeStatic from "./components/HomeStatic";
import NavigationBar from "./components/NavigationBar";

function App() {
  return (
    <div className="App">
      <NavigationBar />
      <div className="home-static">
        <HomeStatic />
      </div>
    </div>
  );
}

export default App;
