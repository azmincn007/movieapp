import './landing.css'
import React, { useContext, useState } from 'react'
// import H from '../Images/H/—Pngtree—film logo design template vector_4978599.png'
import { FaPlayCircle } from "react-icons/fa";
import { FaFire } from "react-icons/fa6";





import { datacontext, moviecontext } from '../App'
import { Link } from 'react-router-dom'
import Header from './Header';

function Landing() {


    const [poster]=useContext(moviecontext)


    const [selected,setselected]=useContext(datacontext)
  return (
    <div className="main">
        
        <Header/>
        <section className='section1'>

            <div className="sec-L">
                <div className="contents1">
                    <div className='txt1'>Find movies</div>
                    <div className='txt2' >TV SHOWS AND MORE</div>
                    <div>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat rem nam quis dolores laudantium cupiditate sunt? Ex repudiandae labore voluptatibus.</div>
                    <div className='but'><button className='butt'>  <FaPlayCircle className='play-button'/> Watch tutorial</button></div>
                        
                        
                    
                  
                </div>
            </div>
            <div className="sec-R">
               <div className='b1'></div>
               <div className='b2'></div>
            </div>
        </section>

<div className="section2-main">
    <div className="trending-bar">
        <div className='t'><FaFire  className='fire'/></div>
        <div className='t'>trending</div>
        <div className='h-line'></div>
        <div className='see-more'>see more</div>
    </div>
<section className='section2'>
                {poster.map((obj,index)=><>
                <Link  className='mylink' to={`/${index + 1}`}>
                <div className="card">
                    <img src={obj.url} alt="" />
                    <div className='title'>
                    <h3 className='hi'>{obj.title}</h3>
                    <p>{obj.duration}</p>
                    </div>
                   
                </div>
                </Link>
            
                </>)}
        </section>
</div>     
    </div>
  )
}

export default Landing
