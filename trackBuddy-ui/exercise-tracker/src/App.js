import logo from './logo.svg';
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css"
import {
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom";
import Exercises from './components/Exercises.component';
import CreateExercises from './components/CreateExercises.comonent';
import Navbar from "./components/NavBar"
import CreateUsers from './components/CreateUsers.components';
function App() {
  return (
    <>
      <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Exercises />} />
        {/* <Route path="/edit/:id" element={<EditExercises />} /> */}
        <Route path="/create" element={<CreateExercises />} />
        <Route path="/user" element={<CreateUsers />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
