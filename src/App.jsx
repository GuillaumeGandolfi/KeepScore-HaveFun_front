import "./styles/App.css";
import Loader from "./components/Loader/Loader";
import Inscription from "./components/InscriptionForm";


function App() {
  return (
    <div className="App">
      <Loader />
      <Inscription/>
    </div>
  );
}

export default App;
