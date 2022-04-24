import React from "react";
import leftImg from "../img/item-4.png";

class Details extends React.Component {
  render() {
    const { increasePro, discreasePro, productsNumber, addFun, images } =
      this.props;
    const { description, name, price } = this.props.products[1];
    return (
      <>
        <section className="product-info">
          <div className="left-photos">
            <img alt="img" src={leftImg} />
            <div className="img-container left">
              <img alt="img" src={leftImg} />
            </div>
            <div className="img-container right">
              <img alt="img" src={leftImg} />
            </div>
          </div>

          <div className="main-photo">
            <img alt="img" src={leftImg} />
          </div>

          <div className="product-details">
            <h1>{price}</h1>
            <h2>{name}</h2>
            <p>{description}</p>
            <div className="color-box">
              <p>
                <strong>Color:</strong> Pink
              </p>
              <span className="color"></span>
              <span className="color"></span>
              <span className="color"></span>
            </div>

            <div className="add-box">
              <div className="number-box">
                <span className="discrease" onClick={discreasePro}>
                  -
                </span>
                <span className="count"> {productsNumber} </span>
                <span className="increase" onClick={increasePro}>
                  +
                </span>
              </div>
              <span className="add-btn" onClick={addFun}>
                ADD TO CART
              </span>
            </div>
          </div>
        </section>

        <h1 className="title">Might also like</h1>

        <section className="suggested-products">
          <div className="product-item">
            <img alt="img" src={images[0]} />
            <div className="i-caption">
              <p>Speradsheets shirt</p>
              <p>$25</p>
            </div>
          </div>

          <div className="product-item">
            <img alt="img" src={images[1]} />
            <div className="i-caption">
              <p>Speradsheets shirt</p>
              <p>$25</p>
            </div>
          </div>

          <div className="product-item">
            <img alt="img" src={images[2]} />
            <div className="i-caption">
              <p>Speradsheets shirt</p>
              <p>$25</p>
            </div>
          </div>
        </section>
        <span className="more-btn">MORE PRODUCTS</span>
      </>
    );
  }
}

export default Details;
