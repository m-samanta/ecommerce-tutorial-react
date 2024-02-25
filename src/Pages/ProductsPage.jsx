import React from "react";

const ProductsPage = () => {
  return (
    <section id="all-products">
      <div className="container">
        <div className="row all-products__row">
          <div className="products__header">
            <a href="/" className="products__header__link">
              <span className="products__header__link__text">{"<Home"}</span>
            </a>
            <h1 className="products__header__title">Products</h1>
            <select defaultValue="Default" className="products__header__filter">
              <option
                value="Default"
                disabled
                className="products__header__filter__option"
              >
                Sort
              </option>
              <option
                value="Furniture"
                className="products__header__filter__option"
              >
                Furniture
              </option>
              <option
                value="Electronics"
                className="products__header__filter__option"
              >
                Electronics
              </option>
              <option
                value="Lamps"
                className="products__header__filter__option"
              >
                Lamps
              </option>
              <option
                value="Kitchen"
                className="products__header__filter__option"
              >
                Kitchen
              </option>
              <option
                value="Chairs"
                className="products__header__filter__option"
              >
                Chairs
              </option>
              <option
                value="Skin Care"
                className="products__header__filter__option"
              >
                Skin Care
              </option>
            </select>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductsPage;
