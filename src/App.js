import logo from "./logo.svg";
import "./App.css";
import Main from "./components/Main";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { createContext, useState } from "react";
import Moviedata from "./components/Moviedata";
import data from "./components/Data";
import Booktickets from "./components/Booktickets";
import Invoice from "./components/Invoice";
import Signup from "./components/signup/Signup";
import LoginPage from "./components/signup/LoginPage";
import Seatarrange from "./components/seat/Seatarrange";
import Contact from "./nav-components/Contact";
import Lotty from "./lotties/Lotty";

const selectseatcontext=createContext()
const datacontext = createContext();
const moviecontext = createContext();
const modalcontext = createContext();
const moviedatacontext=createContext();  //taking data from moviedata  page to seat arrange page
const tokenCOntext=createContext()

function App() {
 
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selected, setselected] = useState([]);
  const [poster] = useState([data]);
  const [activeSeat, setActiveSeat] = useState(1);
  const [moviedatas,setmoviedatas]=useState([])
  const [activeSeats, setActiveSeats] = useState([]);
  const [isLoggedIn, setIsLoggedIn] = useState(!!localStorage.getItem('token'));
  return (
    <div><tokenCOntext.Provider value={[isLoggedIn,setIsLoggedIn]}>
<moviedatacontext.Provider value={[moviedatas,setmoviedatas]}>
      <selectseatcontext.Provider value={[activeSeat,setActiveSeat,activeSeats,setActiveSeats]}>
      <modalcontext.Provider value={[isModalOpen,setIsModalOpen]}>
       
       <moviecontext.Provider value={poster}>
         <datacontext.Provider value={[selected, setselected]}>
           <BrowserRouter>
             <Routes>
               <Route path="/" element={<Main />}></Route>
               <Route path="/:index" element={<Moviedata />} />
               <Route path="/:index/bookticket" element={<Booktickets />} />
               <Route path="/invoice" element={<Invoice />} />
               <Route path="/:index/seat" element={<Seatarrange />} />
               <Route path="/signup" element={<Signup />} />
               <Route path="/login" element={<LoginPage />} />
               <Route path="/contact" element={<Contact />} />
               <Route path="/contact" element={<Contact />} />
               <Route path="/loty" element={<Lotty />} />

           
               

             </Routes>
           </BrowserRouter>
         </datacontext.Provider>
       </moviecontext.Provider>
     </modalcontext.Provider>
      </selectseatcontext.Provider>
      
      </moviedatacontext.Provider>
    </tokenCOntext.Provider>
      
      
     
    </div>
  );
}

export default App;
export { datacontext,modalcontext,tokenCOntext };
export { moviecontext ,selectseatcontext,moviedatacontext};

