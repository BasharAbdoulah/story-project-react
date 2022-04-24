import React from 'react'
import signImg from "../img/mailing-list-img.png"

function SignUp() {
  return (
    <div className='sign-up'>
      
        <div className="photo"><img src={signImg} alt="img" /></div>

        <div className="sign-caption">
          <p>Sign up for our newsletter and get <br /> 10% off your next order.</p>
          <input type="text" />
        </div>
    </div>
  )
}

export default SignUp