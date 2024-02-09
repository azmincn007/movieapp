import logo from "./logo.svg";
import "./App.css";
import Main from "./components/Main";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { createContext, useState } from "react";
import Moviedata from "./components/Moviedata";
import data from "./components/Data";
import Booktickets from "./components/Booktickets";
const datacontext = createContext();
const moviecontext = createContext();
const modalcontext = createContext();

function App() {
  console.log("movie");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selected, setselected] = useState([]);
  const [poster] = useState([data]);
  return (
    <div>
      <modalcontext.Provider value={[isModalOpen,setIsModalOpen]}>
       
        <moviecontext.Provider value={poster}>
          <datacontext.Provider value={[selected, setselected]}>
            <BrowserRouter>
              <Routes>
                <Route path="/" element={<Main />}></Route>
                <Route path="/:index" element={<Moviedata />} />
                <Route path="/:index/bookticket" element={<Booktickets />} />
              </Routes>
            </BrowserRouter>
          </datacontext.Provider>
        </moviecontext.Provider>
      </modalcontext.Provider>
    </div>
  );
}

export default App;
export { datacontext,modalcontext };
export { moviecontext };

