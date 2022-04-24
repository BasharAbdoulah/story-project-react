import React from 'react'
import { NavLink } from 'react-router-dom'
import {useNavigate} from "react-router-dom"


function Header({ forCheck }) {

  const route = useNavigate()
  const showCart = () => {
    route("/cart")
  }

  return (
    <div className='header'>
      <div className="logo-nav">
        <div className="logo"><svg width="34" height="15" viewBox="0 0 34 15" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M0.404 1.256H3.212V11.408H8.414V14H0.404V1.256ZM19.378 10.994L22.222 14H18.748L17.686 12.794C17.158 13.334 16.588 13.724 15.976 13.964C15.376 14.204 14.698 14.324 13.942 14.324C13.366 14.324 12.808 14.246 12.268 14.09C11.728 13.934 11.242 13.7 10.81 13.388C10.39 13.064 10.054 12.662 9.80197 12.182C9.54997 11.702 9.42397 11.144 9.42397 10.508C9.42397 10.1 9.48997 9.716 9.62197 9.356C9.76597 8.984 9.95797 8.648 10.198 8.348C10.45 8.048 10.738 7.79 11.062 7.574C11.386 7.346 11.74 7.166 12.124 7.034C11.92 6.806 11.728 6.59 11.548 6.386C11.38 6.182 11.23 5.966 11.098 5.738C10.978 5.51 10.882 5.27 10.81 5.018C10.75 4.766 10.72 4.484 10.72 4.172C10.72 3.596 10.828 3.104 11.044 2.696C11.272 2.288 11.572 1.952 11.944 1.688C12.316 1.424 12.742 1.232 13.222 1.112C13.702 0.992 14.194 0.932 14.698 0.932C15.19 0.932 15.658 0.998 16.102 1.13C16.546 1.25 16.936 1.442 17.272 1.706C17.62 1.958 17.896 2.282 18.1 2.678C18.304 3.062 18.406 3.524 18.406 4.064C18.406 4.448 18.34 4.802 18.208 5.126C18.088 5.45 17.92 5.756 17.704 6.044C17.488 6.32 17.236 6.572 16.948 6.8C16.672 7.016 16.372 7.208 16.048 7.376L17.686 9.122L18.928 7.43H22.06L19.378 10.994ZM14.662 3.092C14.314 3.092 14.02 3.2 13.78 3.416C13.54 3.632 13.42 3.92 13.42 4.28C13.42 4.436 13.456 4.592 13.528 4.748C13.6 4.892 13.684 5.036 13.78 5.18C13.888 5.312 14.002 5.438 14.122 5.558C14.254 5.678 14.374 5.786 14.482 5.882C14.626 5.798 14.782 5.702 14.95 5.594C15.118 5.474 15.274 5.348 15.418 5.216C15.562 5.072 15.682 4.922 15.778 4.766C15.874 4.598 15.922 4.424 15.922 4.244C15.922 3.872 15.796 3.59 15.544 3.398C15.304 3.194 15.01 3.092 14.662 3.092ZM13.798 8.564C13.618 8.672 13.438 8.786 13.258 8.906C13.09 9.014 12.934 9.14 12.79 9.284C12.658 9.416 12.55 9.572 12.466 9.752C12.382 9.932 12.34 10.142 12.34 10.382C12.34 10.622 12.388 10.838 12.484 11.03C12.58 11.222 12.706 11.384 12.862 11.516C13.018 11.648 13.198 11.756 13.402 11.84C13.618 11.912 13.834 11.948 14.05 11.948C14.47 11.948 14.83 11.858 15.13 11.678C15.442 11.498 15.748 11.276 16.048 11.012L13.798 8.564ZM23.6222 1.256H28.3742C28.9262 1.256 29.4782 1.298 30.0302 1.382C30.5942 1.454 31.0982 1.61 31.5422 1.85C31.9862 2.078 32.3462 2.402 32.6222 2.822C32.8982 3.242 33.0362 3.8 33.0362 4.496C33.0362 5.216 32.8322 5.816 32.4242 6.296C32.0282 6.764 31.5002 7.1 30.8402 7.304V7.34C31.2602 7.4 31.6382 7.52 31.9742 7.7C32.3222 7.868 32.6162 8.09 32.8562 8.366C33.1082 8.63 33.3002 8.942 33.4322 9.302C33.5642 9.662 33.6302 10.046 33.6302 10.454C33.6302 11.126 33.4862 11.69 33.1982 12.146C32.9102 12.59 32.5382 12.95 32.0822 13.226C31.6262 13.502 31.1102 13.7 30.5342 13.82C29.9702 13.94 29.4062 14 28.8422 14H23.6222V1.256ZM26.4302 6.35H28.4642C28.6802 6.35 28.8902 6.326 29.0942 6.278C29.3102 6.23 29.5022 6.152 29.6702 6.044C29.8382 5.936 29.9702 5.792 30.0662 5.612C30.1742 5.432 30.2282 5.216 30.2282 4.964C30.2282 4.7 30.1682 4.484 30.0482 4.316C29.9402 4.136 29.7962 3.998 29.6162 3.902C29.4362 3.806 29.2322 3.74 29.0042 3.704C28.7762 3.656 28.5542 3.632 28.3382 3.632H26.4302V6.35ZM26.4302 11.624H28.9502C29.1662 11.624 29.3822 11.6 29.5982 11.552C29.8262 11.504 30.0302 11.42 30.2102 11.3C30.3902 11.18 30.5342 11.024 30.6422 10.832C30.7622 10.64 30.8222 10.406 30.8222 10.13C30.8222 9.83 30.7442 9.59 30.5882 9.41C30.4442 9.218 30.2582 9.074 30.0302 8.978C29.8022 8.882 29.5562 8.816 29.2922 8.78C29.0282 8.744 28.7822 8.726 28.5542 8.726H26.4302V11.624Z" fill="black"/>
</svg></div>
        <ul className='nav-links'>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/products">Collection</NavLink>
        <NavLink to="/">Contact</NavLink>
      </ul>
      </div>
      <div className="cart-logo" onClick={showCart}>
        { forCheck !== 0 ? <span className='items-num'> {forCheck} </span> : false}
        <span><svg width="19" height="19" viewBox="0 0 19 19" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M3.33336 4.34501L0.630859 1.64334L1.81003 0.464172L4.51169 3.16667H17.2134C17.3433 3.16666 17.4713 3.19702 17.5874 3.25531C17.7035 3.31361 17.8043 3.39823 17.8819 3.50242C17.9594 3.60661 18.0116 3.72749 18.0341 3.85541C18.0566 3.98333 18.049 4.11475 18.0117 4.23917L16.0117 10.9058C15.9602 11.0776 15.8548 11.2281 15.711 11.3352C15.5671 11.4422 15.3926 11.5 15.2134 11.5H5.00003V13.1667H14.1667V14.8333H4.16669C3.94568 14.8333 3.73372 14.7455 3.57744 14.5893C3.42116 14.433 3.33336 14.221 3.33336 14V4.34501ZM5.00003 4.83334V9.83334H14.5934L16.0934 4.83334H5.00003ZM4.58336 18.1667C4.25184 18.1667 3.9339 18.035 3.69948 17.8006C3.46506 17.5661 3.33336 17.2482 3.33336 16.9167C3.33336 16.5852 3.46506 16.2672 3.69948 16.0328C3.9339 15.7984 4.25184 15.6667 4.58336 15.6667C4.91488 15.6667 5.23282 15.7984 5.46724 16.0328C5.70166 16.2672 5.83336 16.5852 5.83336 16.9167C5.83336 17.2482 5.70166 17.5661 5.46724 17.8006C5.23282 18.035 4.91488 18.1667 4.58336 18.1667ZM14.5834 18.1667C14.2518 18.1667 13.9339 18.035 13.6995 17.8006C13.4651 17.5661 13.3334 17.2482 13.3334 16.9167C13.3334 16.5852 13.4651 16.2672 13.6995 16.0328C13.9339 15.7984 14.2518 15.6667 14.5834 15.6667C14.9149 15.6667 15.2328 15.7984 15.4672 16.0328C15.7017 16.2672 15.8334 16.5852 15.8334 16.9167C15.8334 17.2482 15.7017 17.5661 15.4672 17.8006C15.2328 18.035 14.9149 18.1667 14.5834 18.1667Z" fill="black"/>
</svg>
        </span>
        <p>Cart</p>
      </div>
    </div>
  )
}

export default Header