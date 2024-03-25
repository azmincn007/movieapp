// Booktickets.jsx
import React, { useContext, useState } from "react";
import MV2 from "../Images/MV-M/Untitled design.png";
import "./bookticket.css";
import { FaWindowClose } from "react-icons/fa";
import { modalcontext, moviedatacontext, selectseatcontext } from "../App";
import { Link, useParams } from "react-router-dom";


function Booktickets({movie}) {
  const { index } = useParams();
  const [activeSeat, setActiveSeat] = useContext(selectseatcontext);
  const [isModalOpen, setIsModalOpen] =useContext(modalcontext)
  const [moviedatas,setmoviedatas]=useContext(moviedatacontext)
  // console.log(moviedatas.title);

  const handleSeatClick = (activeSeat) => {
    setActiveSeat(activeSeat);
  };

  const [mov, setmov] = useState([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
  const closeModal = () => {
    console.log('closeee');
    setIsModalOpen(false);
  };

  return (
    <section className="main-book">
      <div className="ticket-det">
        <div className="seats-caption">How many seats?</div>
        <FaWindowClose onClick={closeModal} className="fawindow"/>
        <div className="bike-anim">
          <img src={MV2} alt="" />
        </div>
        <div className="count-flex">
          {mov.map((obj) => (
            <div
              key={obj}
              className={`count ${activeSeat === obj ? 'active' : ''}`}
              onClick={() => handleSeatClick(obj)}
            >
              {obj}
            </div>
          ))}
        </div>

        <div className="category">
          <div className="contents-cat">
            <div className="cat-type">Normal</div>
            <div className="cat-rate">Rs .270.00</div>
            <div className="cat-status">available</div>
          </div>
          <div className="contents-cat">
            <div className="cat-type">Normal</div>
            <div className="cat-rate">Rs .270.00</div>
            <div className="cat-status">available</div>
          </div>
          <div className="contents-cat">
            <div className="cat-type">Normal</div>
            <div className="cat-rate">Rs .270.00</div>
            <div className="cat-status">available</div>
          </div>
          <div className="contents-cat">
            <div className="cat-type">Normal</div>
            <div className="cat-rate">Rs .270.00</div>
            <div className="cat-status">available</div>
          </div>
          

          {/* Add more category content as needed */}
        </div>

        <div className="button-seats">
          <Link to={`/${index}/seat`}> <button>Select seats</button>
          </Link>
         
        </div>
      </div>
    </section>
   
  );
}

export default Booktickets;
