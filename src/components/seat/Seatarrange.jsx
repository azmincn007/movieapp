import React, { useContext, useEffect, useState } from 'react';
import './seatarrange.css';
import { moviedatacontext, selectseatcontext } from '../../App';
import { MdArrowBackIos } from "react-icons/md";
import { RiH1 } from 'react-icons/ri';
import { Link, useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';

function Seatarrange() {
  const { index } = useParams();
  const [activeSeat, setActiveSeat,activeSeats,setActiveSeats] = useContext(selectseatcontext);
  const columnHeaders = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I']; // Define column headers
  const emptySeats = [5, 6, 19, 20]; // Define empty seats for all columns except the first one
  const hiEmptySeatsH = [1, 2, 3, 4, 5, 6, 19, 20];
  
  const [moviedatas,setmoviedatas]=useContext(moviedatacontext)
  const [activeTime, setActiveTime] = useState(11);
  const [seatsData, setSeatsData] = useState([]);
  const navigate=useNavigate()
  console.log(activeSeats);
  console.log(seatsData);


  

  const goldticket=160



  useEffect(() => {
    fetchSeatsData(); // Fetch seats data when component mounts
  }, []);

  const fetchSeatsData = async () => {
    try {
      const response = await axios.get(`http://localhost:4000/${index}/getbookedseats`); // Make a GET request to fetch seats data
      setSeatsData(response.data); // Update seats data in state
    } catch (error) {
      console.error('Error fetching seats data:', error);
    }
  };
  const handleTimeClick = (time) => {
    setActiveTime(time);
  };
  const hasActiveSeat = activeSeats.length > 0; 
  const handleClick = (seatPosition) => {
    setActiveSeats(prevActiveSeats => {
      if (prevActiveSeats.includes(seatPosition)) {
        // Deselect the seat if it's already selected
        return prevActiveSeats.filter(seat => seat !== seatPosition);
      } else if (prevActiveSeats.length < activeSeat) {
        // Select the seat if it's not already selected and less than 3 seats are selected
        return [...prevActiveSeats, seatPosition];
      } else {
        // If 3 seats are already selected, toggle the active state of the clicked seat
        return prevActiveSeats.slice(1).concat(seatPosition);
      }
    });
  };
  
 const handlePayment = async () => {
  try {
    // Adjust seat numbers to match zero-based index
    const adjustedSeatNumbers = activeSeats.map(seatNumber => seatNumber - 1);

    // Make a POST request to your backend API endpoint to store the activeSeats data
    const response = await axios.post(`http://localhost:4000/${index}/seatbook`, { seatNumbers: adjustedSeatNumbers });
    console.log(response.data.message); // Log success message
    // You can handle success scenario here (e.g., redirect to invoice page)
  } catch (error) {
    console.error('Error storing seats:', error.response.data.message); // Log error message
    // You can handle error scenario here (e.g., show error message to user)
  }
};

  

  const renderSeatRows = () => {
    const rows = [];
  
    for (let i = 0; i < 9; i++) {
      let seatNumberCounter = 1;
      rows.push(
        <tr key={i}>
          <td><div className="column-seat">{columnHeaders[i]}</div></td>
          <td>
            <div className="row1">
              {[...Array(25).keys()].map(seatNumber => {
                const seatPosition = seatNumber + 1;
                let isEmpty = false;
  
                if (i === 0 || !emptySeats.includes(seatPosition)) {
                  if ((i === 7 && hiEmptySeatsH.includes(seatPosition)) || (i === 8 && hiEmptySeatsH.includes(seatPosition))) {
                    isEmpty = true;
                  }
  
                  const isBooked = seatsData.includes(i * 25 + seatNumber + 1); // Check if the seat is booked
  
                  return (
                    <div
                      key={seatPosition}
                      className={`seat1 ${isEmpty ? 'empty-seat' : ''} ${activeSeats.includes(i * 25 + seatNumber) ? 'active-seat' : ''} ${isBooked ? 'booked-seat' : ''}`}
                      onClick={() => handleClick(i * 25 + seatNumber)}
                    >
                      {isEmpty ? '' : seatNumberCounter++}
                    </div>
                  );
                } else {
                  return (
                    <div key={seatPosition} className="seat1 empty-seat"></div>
                  );
                }
              })}
            </div>
          </td>
        </tr>
      );
    }
    return rows;
  };
  
  return (

    <div className="seatcontainer">
      <div className="seatheadfix">
        <div className="seatbookdata">
         <div className="leftseatbookdata">
         <div className="leftseatbookdata1"> <MdArrowBackIos className='backarrow' onClick={()=>navigate(-1)} /></div>
         <div className="leftseatbookdata2"><div className="moviename">{moviedatas.title} </div>
          <div className="movietime-data">INOX: Nakshatra Mall, Dadar (W) | Today, 25 Feb, 10:30 PM</div></div>
         </div>
         <div className="rightseatbookdata">
          {activeSeat} Tickets
         </div>
        </div>

        <div className="seattiming">
        <div className="timings">
          <button
            className={activeTime === 11 ? 'active' : ''}
            onClick={() => handleTimeClick(11)}
          >
            9:30 AM
          </button>
          <button
            className={activeTime === 12 ? 'active' : ''}
            onClick={() => handleTimeClick(12)}
          >
            11:30 AM
          </button>
          <button
            className={activeTime === 13 ? 'active' : ''}
            onClick={() => handleTimeClick(13)}
          >
            2:30 PM
          </button>
          <button
            className={activeTime === 14 ? 'active' : ''}
            onClick={() => handleTimeClick(14)}
          >
            6:00 PM
          </button>
        </div>
      </div>
      </div>
 <div className='main-seat'>
      <div className="seatarrange">
        <div className='seat-title'>Gold RS:160</div>
        <div className="hzline"></div>
        <table>
          <tbody>{renderSeatRows()}</tbody>
        </table>
      </div>
    </div>


    {hasActiveSeat && (
        <div className="newdiv">
          <Link to={'/invoice'}>      <button onClick={handlePayment} className='hee'>Pay Rs:{goldticket*activeSeats.length} </button>
          </Link>
    
        </div>
      )} 
 
    </div>
   
  );
}

export default Seatarrange;
