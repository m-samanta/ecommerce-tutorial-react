import React, { useEffect, useState } from "react";
import Product from "./ui/Product";
import axios from "axios";
import ProductSkeleton from "./ui/ProductSkeleton";

const Products = () => {
  const [products, setProducts] = useState([]);
  async function fetchProducts() {
    const { data } = await axios.get(
      "https://ecommerce-samurai.up.railway.app/product"
    );

    const productsData = data.data;

    setProducts(productsData);
  }

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <section id="products">
      <div className="container">
        <div className="row products__row">
          <h2 className="products__title">Products we are proud of</h2>
          <div className="products__list">
            {products.length > 0 ? (
              products
                .slice(0, 8)
                .map((product) => (
                  <Product key={product.id} product={product} />
                ))
            ) : (
              new Array(8).fill(0).map(() => <ProductSkeleton />)
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Products;
