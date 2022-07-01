import './App.css';
import Quiz from "./component/Quiz/Quiz";
import {Routes,Route} from "react-router-dom";
function App() {
  return (
    <div className="App">
      <Routes>
      <Route excat path="/" element={<Quiz/>}/>
      </Routes>
    </div>
  );
}
export default App;
