import React, { useContext, useEffect, useState } from "react";
import { AppContext } from "../context/AppContext";
import Product from "../components/ui/Product";
import { useParams } from "react-router-dom";
import axios from "axios";

const ProductPage = () => {
  const { products } = useContext(AppContext);
  const { id } = useParams()
  const [selectedProduct, setSelectedproduct] = useState()

  async function fetchProduct(){
  const { data } = await  axios.get(`https://ecommerce-samurai.up.railway.app/product/${id}`)
  
const productData = data.data
}
  useEffect(() => {

fetchProduct()

  }, [])

  return (
    <main className="product__main">
      <div className="container">
        <div className="row product-page__row">
          <div className="selected-product">
            <div className="selected-product__left">
              <figure className="selected-product__img__wrapper">
                <img
                  src={`https://ecommerce-samurai.up.railway.app/${products[0]?.images[0]}`}
                  alt=""
                  className="selected-product__img"
                />
              </figure>
              <div className="selected-product__img__options">
                {products[0]?.images.map((image, index) => (
                  <img
                    src={`https://ecommerce-samurai.up.railway.app/${image}`}
                    alt=""
                    className="selected-product__img__option"
                    key={index}
                  />
                ))}
              </div>
            </div>
            <div className="selected-product__right">
              <h1 className="selected-product__title">{products[0]?.name}</h1>
              <p className="selected-product__para">
                {products[0]?.description}
              </p>
              <div className="selected-product__quantity">
                <span className="selected-product__quantity__span selected-product__quantity__span-1">
                  Quantity
                </span>
                <div className="selected-product__quantity__wrapper">
                  <button className="selected-product__quantity__btn">-</button>
                  <div className="selected-product__quantity__amount">
                    1
                  </div>
                  <button className="selected-product__quantity__btn">+</button>
                </div>
                <span className="selected-product__quantity__span selected-product__quantity__span-2">
                  ${products[0]?.price}
                </span>
              </div>
              <button className="selected-product__add">
                Add To Cart
              </button>
            </div>
          </div>
          <div className="specifications">
            <div className="spec">
                <h2 className="spec__tile">
                    Weight
                </h2>
                <span className="spec__detail">
                    {products[0]?.weight}
                </span>
            </div>
            <div className="spec">
                <h2 className="spec__tile">
                    Texture
                </h2>
                <span className="spec__detail">
                    {products[0]?.texture}
                </span>
            </div>
            <div className="spec">
                <h2 className="spec__tile">
                    Size
                </h2>
                <span className="spec__detail">
                    {products[0]?.size}
                </span>
            </div>
          </div>
          <div className="recommendations">
            <h2 className="products__title">
                Trending Now
            </h2>
            <div className="products__list">
                { products.slice(0,4).map(product => <Product product={product} key={product.id} />)}
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default ProductPage;
