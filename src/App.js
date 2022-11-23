import { Route, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import { StateContext } from "./Context/context";
import { db } from "./firebase";
import Home from "./pages/Home/Home";
import Music from "./pages/Music/Music";

function App() {

  return (
    <StateContext.Provider value={{db}}>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/music" element={<Music />} />
        </Routes>
      </div>
    </StateContext.Provider>
  );
}

export default App;
