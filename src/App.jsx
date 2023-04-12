import "./styles/App.css";
import Loader from "./components/Loader/Loader";
import ConnectionForm from "./components/ConnectionForm/ConnectionForm";

function App() {
  return (
    <div className="App">
      <Loader />
      <ConnectionForm />
    </div>
  );
}

export default App;
