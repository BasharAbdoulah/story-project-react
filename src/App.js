import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import Home from "./pages/Home";
import Footer from "./components/Footer";
import Detials from "./pages/Detials";
import Cart from "./pages/Cart";
import React from "react";

// import data
import productInfo from "./data/store-items.json";
// قمنا باستيراد الصور هذة نضراً ان الصور في ملف ال data.json لا تعمل
import img1 from "./img/item-1.png";
import img2 from "./img/item-2.png";
import img3 from "./img/item-3.png";
import img4 from "./img/item-4.png";
import img5 from "./img/item-5.png";
import img6 from "./img/item-6.png";
import img7 from "./img/item-7.png";
import img8 from "./img/item-8.png";
import img9 from "./img/item-9.png";
const imgsArr = [img1, img2, img3, img4, img5, img6, img7, img8, img9];
//

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      productInfo: productInfo,
      imgs: imgsArr,
      products: [],
      productsNumber: 0,
      numberOnCart: 0,
    };
    this.addProducts = this.addProducts.bind(this);
    this.removeProducts = this.removeProducts.bind(this);
    this.increasePro = this.increasePro.bind(this);
    this.discreasePro = this.discreasePro.bind(this);
  }

  // increase products

  increasePro = () => {
    this.setState({ productsNumber: this.state.productsNumber + 1 });
  };
  discreasePro = () => {
    this.setState({ productsNumber: this.state.productsNumber - 1 });
  };

  addProducts() {
    this.setState({
      products: productInfo.slice(0, this.state.productsNumber),
    });
    this.setState({ numberOnCart: this.state.productsNumber });
  }
  removeProducts(e) {
    e.target.parentElement.remove();
    this.setState({ numberOnCart: this.state.numberOnCart - 1 });
  }
  render() {
    return (
      <BrowserRouter>
        <Header forCheck={this.state.numberOnCart} />
        <Routes>
          <Route
            path="/"
            element={
              <Home
                products={this.state.productInfo}
                imgs={this.state.imgs}
                id={this.state.id}
              />
            }
          />

          <Route
            path="/products"
            element={
              <Detials
                products={this.state.productInfo}
                addFun={this.addProducts}
                increasePro={this.increasePro}
                discreasePro={this.discreasePro}
                productsNumber={this.state.productsNumber}
                images={this.state.imgs}
              />
            }
            id={this.state.id}
          />

          <Route
            path="/cart"
            element={
              <Cart
                Products={this.state.products}
                images={this.state.imgs}
                removeProducts={this.removeProducts}
              />
            }
          />
        </Routes>
        <Footer />
      </BrowserRouter>
    );
  }
}

export default App;
