// Moviedata.jsx
import React, { useContext, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { modalcontext, moviecontext, moviedatacontext } from "../App";
import { FaStar } from "react-icons/fa";
import "./movie.css";
import Header from "./Header";
import Booktickets from "./Booktickets";
import Seatarrange from "./seat/Seatarrange";

function Moviedata() {
  const { index } = useParams();
  const [poster] = useContext(moviecontext);
  const selectedMovie = poster[index-1];
  const linearGradient = "linear-gradient(90deg, #1A1A1A 24.97%, #1A1A1A 38.3%, rgba(26, 26, 26, 0.0409746) 97.47%, #1A1A1A 100%)";
  const [moviedatas,setmoviedatas]=useContext(moviedatacontext)
  const [isModalOpen, setIsModalOpen] =useContext(modalcontext)
  setmoviedatas(selectedMovie)

  const navigate=useNavigate()
  const openModal = () => {
    const token = localStorage.getItem('token');
    if (token) {
      setIsModalOpen(true);
    } else {
      // Redirect to login page if token doesn't exist
      navigate('/login')
    }
  };



  return (
    <div className="main-movie">
      <Header />
      <section className="banner" style={{ backgroundImage: `${linearGradient}, url(${selectedMovie.bg})` }}>
        <div className="trailer-screen">
          <img src={selectedMovie.url} alt="" />
          <div className="in-cinemas">in cinemas</div>
        </div>

        <div className="contents-movie">
          <div className="rating">
            <div className="name">{selectedMovie.title}</div>
            <div className="rating-c">
              <FaStar className="rating-i" /> 8.7/10
            </div>
          </div>

          <div className="rating-box">
            <div className="rating-content">
              <div className="rc1">Add your rating & review</div>
              <div className="rc2">Your ratings matter</div>
            </div>
            <div className="rating-button">
              <button>Rate Now</button>
            </div>
          </div>

          <div className="theatre-lan">
            <div className="theater">
              <div>
                <Link className="links">2D,</Link>
                <Link className="links">ICE,</Link>
                <Link className="links">IMAX 2D ,</Link>
                <Link className="links">ICE 3D,</Link>
                <Link className="links">4DX,</Link>
                <Link className="links">3D,</Link>
                <Link className="links">3DMAX</Link>
              </div>
            </div>
            <div className="lang-but">
              <button className="heyu">HINDI,ENGLISH</button>
            </div>
          </div>

          <div className="duration">
            <div>2h 19m</div>
            <div>action</div>
            <div>UA</div>
            <div>2 Feb, 2024</div>
          </div>

          <div className="bookticket-button">
            <button onClick={openModal}>Book Tickets</button>
          </div>
        </div>
      </section>

      {isModalOpen && (
        <div className="modal-overlay">
          
            <Booktickets />
           

         
        </div>
      )}
    </div>
  );
}

export default Moviedata;
