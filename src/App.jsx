import "./App.css";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Signup from './pages/Signup';
import Login from './pages/Login';
import Home from './pages/Home';
import UserProjects from "./pages/UserProjects";
import Navbar from "./components/Navbar";
import AddProject from "./pages/Addproject";

function App() {

  return (
    <>
    <BrowserRouter>
     <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/signup' element={<Signup/>} />
        <Route path='/login' element={<Login/>} />
        <Route path='/userprojects' element={<UserProjects/>} />
        <Route path='/addprojects' element={<AddProject/>} />

      </Routes>
      
    </BrowserRouter>
    </>
  )
}

export default App
