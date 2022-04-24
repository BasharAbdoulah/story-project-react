import React from "react";

import Product from "../components/Product";
import heroImg from "../img/hero.png";
class Home extends React.Component {
  render() {
    return (
      <>
        <section className="main-section">
          <div className="photo-side">
            <img alt="Hero img" src={heroImg} />
          </div>

          <div className="p-side">
            <h1>Lorem Ipsum is simply dummy </h1>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever
            </p>
            <span>OUR PRODUCTS</span>
          </div>
        </section>

        <section className="products-section">
          {this.props.products.map((product, index) => {
            return (
              <Product
                title={product.name}
                price={product.price}
                img={this.props.imgs[index]}
                key={index}
              />
            );
          })}

          <span className="more-btn">MORE PRODUCTS</span>
        </section>
      </>
    );
  }
}

export default Home;
