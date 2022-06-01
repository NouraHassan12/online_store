import React, { useEffect } from "react";
import "./Products.css";
import { connect } from "react-redux";
import { fetchProducts } from "../../Redux/ProductsList/action";
import { addToCart } from "../../Redux/Cart/cart";

function Products({ fetchProducts, productsData, addToCart }) {
  const Products = [
    {
      id: 1,
      product__title: "Cacti Plant",
      product__price: 19,
      product__img:
        "https://res.cloudinary.com/dhdsghlmj/image/upload/v1654015247/online_store/product1_vqrkaf.png",
    },
    {
      id: 2,
      product__title: "Succulent Plant",
      product__price: 15,
      product__img:
        "https://res.cloudinary.com/dhdsghlmj/image/upload/v1654015318/online_store/product2_ka8jm2.png",
    },
    {
      id: 3,
      product__title: "Aloe Vera ",
      product__price: 17,
      product__img:
        "https://res.cloudinary.com/dhdsghlmj/image/upload/v1654015347/online_store/product3_ueky8y.png",
    },
    {
      id: 4,
      product__title: "Green Plant",
      product__price: 13,
      product__img:
        "https://res.cloudinary.com/dhdsghlmj/image/upload/v1654015405/online_store/product4_vqngwo.png",
    },
    {
      id: 5,
      product__title: "Cacti Plant",
      product__price: 19,
      product__img:
        "https://res.cloudinary.com/dhdsghlmj/image/upload/v1654015436/online_store/product5_ijrcch.png",
    },
    {
      id: 6,
      product__title: "Green Plant",
      product__price: 18,
      product__img:
        "https://res.cloudinary.com/dhdsghlmj/image/upload/v1654015490/online_store/product6_sffhcz.png",
    },
  ];
  useEffect(() => {
    fetchProducts();
  }, []);
  const handleAddToCart = (product) => {
    addToCart(product);
  };
  return (
    <section className="product section container">
      <h2 className="section__title-center">Check out our products</h2>

      <p className="product__description">
        Here are some selected plants from our showroom, all are in excellent
        shape and has a long life span. Buy and enjoy best quality.
      </p>
      <div className="product__container grid">
        {(productsData?.products.lenght > 0
          ? productsData?.products
          : Products
        ).map((product, index) => (
          <article key={index} className="product__card">
            <div className="product__circle"></div>

            <img src={product.product__img} alt="" className="product__img" />

            <h3 className="product__title">{product.product__title}</h3>
            <span className="product__price">${product.product__price}</span>

            <button
              className="button--flex product__button"
              onClick={() => handleAddToCart(product)}
            >
              <i className="ri-shopping-bag-line"></i>
            </button>
          </article>
        ))}
      </div>
    </section>
  );
}

const mapStateToProps = (state) => {
  return {
    productsData: state.products,
  };
};
export default connect(mapStateToProps, {
  fetchProducts,
  addToCart,
})(Products);
