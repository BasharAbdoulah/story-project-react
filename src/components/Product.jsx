import React from 'react'
import {useNavigate} from "react-router-dom" 

function Product({id, img, title, price}) {
  
  const route = useNavigate();
  const showFun = () => {
    route("/products")
    window.scrollTo({
      top: 0,
    })
  }
  
  return (

    <div className='product' id={ id } onClick={showFun}>
        <img src={ img } alt="item" />
        <div className="caption">
            <p> { title } </p>
            <p> { price } </p>
        </div>
    </div>
  )

}

export default Product
