import React from 'react'
import Lottie from 'react-lottie'
import newlotty from './Movielottie.json'

function Lotty() {
    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: newlotty,
        rendererSettings: {
          preserveAspectRatio: "xMidYMid slice"
        }
      };
  return (
    <div>
       <Lottie 
	    options={defaultOptions}
        height={400}
        width={400}
      />
    </div>
  )
}

export default Lotty
