import React, { useContext, useRef, useState } from "react";
import "./invoice.css";
import { Table } from "flowbite-react";
import { RiMovie2Fill } from "react-icons/ri";

import { jsPDF } from 'jspdf';
import html2canvas from 'html2canvas';
import { moviedatacontext, selectseatcontext } from "../App";
function Invoice() {
  
  const invoiceNumber = Math.floor(Math.random() * 900) + 100;
  const [activeSeat, setActiveSeat,activeSeats,setActiveSeats] = useContext(selectseatcontext);
  const goldticket=160
const today = new Date();
const formattedToday = today.toISOString().slice(0, 10);
const [moviedatas,setmoviedatas]=useContext(moviedatacontext)

const selectedSeatsString = activeSeats.join(', ');




const dueDate = formattedToday;

 const pdfRef=useRef()
 const handleDownloadPDF = () => {
  const input = pdfRef.current;
  html2canvas(input).then((canvas) => {
    const imgData = canvas.toDataURL('image/png');
    const pdf = new jsPDF('p', 'mm', 'a4', true);
    const pdfWidth = pdf.internal.pageSize.getWidth();
    const pdfHeight = pdf.internal.pageSize.getHeight();
    const imgWidth = canvas.width;
    const imgHeight = canvas.height;
    const ratio = Math.min(pdfWidth / imgWidth, pdfHeight / imgHeight);
    const imgX = (pdfWidth - imgWidth * ratio) / 2;
    const imgY = 30;
    pdf.addImage(
      imgData,
      'PNG',
      imgX,
      imgY,
      imgWidth * ratio,
      imgHeight * ratio,
    );
    pdf.save('invoice.pdf');
  });
};
  
  return (
  
    
    <div>
        
      <div className="fullpage"ref={pdfRef} >
        <div className="invoice" >
          <div className="div1">
            <h2>Invoice[Wonderland]</h2>
          </div>
          <div className="div2">
            <div className="div2contents">
              <h5>booked tickets</h5>
              <div>
            {selectedSeatsString}
              </div>
            </div>
            <div className="div2contents">
              <h5>Billed to</h5>
              <div>
                <p>your name:</p>
                <p>your address:</p>
              </div>
            </div>
            <div className="div2contents">
              <h5>Invoice details</h5>
              <div>
                <p>Invoice number:{invoiceNumber}</p>
                <p>ISsue date:{dueDate}</p>
                <p> due date:{dueDate}</p>
              </div>
            </div>
          </div>
          <div class="div3">
            <div class="div3contents">
              <h4>Booking Details</h4>
            </div>
            <div class="div3contents">
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa
                corporis ullam sed tempora iusto minima, quis sunt, natus
                dolorem fuga voluptatum quibusdam maxime. Minima debitis
                blanditiis autem ullam possimus explicabo!
              </p>
            </div>

            <div class="div3-table">
              <div className="head">
                <div className="left">Booking </div>
                <div className="price">Price </div>
              </div>

              <div className="body" id="mapmovie">
                <div className="left">{moviedatas.title} X ({activeSeat})</div>
                <div className="price">{activeSeat*goldticket} rs </div>
              </div>

              <div className="body">
                <div className="left" id="discount">
                  Discount{" "}
                </div>
                <div className="price" id="discount">
                  INR 0.0000rs{" "}
                </div>
              </div>
              <div className="body">
                <div className="left" id="total">
                  Total{" "}
                </div>
                <div className="price" id="total">
                  INR 0.0000rs{" "}
                </div>
              </div>
            </div>
          </div>

          <div className="div4">
            <div className="logo">
              <RiMovie2Fill className="movielogo" />
            </div>
            <div className="address1">
              <h6>Contact details:</h6>
              <p>Richard Hendricks</p>
              <p>richard@piedpiper.com</p>
              <p>+1 8366 385 9239</p>
            </div>
            
          </div>
        </div>
      </div >
      <div>
        
      </div>

      <div className="generatepdf"> <button  className='gen' onClick={handleDownloadPDF}>Generate PDF</button></div>
     
    </div>
  );
}

export default Invoice;
