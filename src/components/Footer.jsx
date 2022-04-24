import React from 'react'
import SignUp from './signUp'

function Footer() {
  return (
    <section>
      <SignUp />
    <div className='footer'>
      <ul className='footer-links'>
        <li>About</li>
        <li>Customer Care</li>
        <li>Instagram</li>
      </ul>
      <div className="copy-right">&copy; Pretend Store</div>
    </div>
    </section>
  )
}

export default Footer