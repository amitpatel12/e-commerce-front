import React, { useContext } from "react";
import { ProductContext } from "../contexts/ProductContext";
import Product from '../components/Product'
import Hero from '../components/Hero'

const Home = () => {
  // get products from product context
  const { products } = useContext(ProductContext);


  

  return (
    <div>
      <Hero />
      <section className="py-20">
        <div className="container mx-auto">
          <h1 className="text-3xl font-semibold mb-10 text-center">Explore Our Products</h1>
          <div className="flex flex-col">
            <div>
              <p className="text-2xl my-3 uppercase">men's clothing</p>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 lg:mx-8 gap-[30px] max-w-sm mx-auto md:max-w-none md:mx-0">
            {products.map((product) => {
              if(product.category == "men's clothing")
              return (
                <>
                <Product product={product} key={product.id}/>
                </>
              );
            })}
          </div>
            </div>


            <div>
            <p className="text-2xl my-10 uppercase">Women's clothing</p>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 lg:mx-8 gap-[30px] max-w-sm mx-auto md:max-w-none md:mx-0">
            {products.map((product) => {
              if(product.category == "women's clothing")
              return (
                <>
                <Product product={product} key={product.id}/>
                </>
              );
            })}
          </div>
            </div>



            <div>
            <p className="text-2xl my-10 uppercase">Jewelery</p>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 lg:mx-8 gap-[30px] max-w-sm mx-auto md:max-w-none md:mx-0">
            {products.map((product) => {
              if(product.category == "jewelery")
              return (
                <>
                <Product product={product} key={product.id}/>
                </>
              );
            })}
          </div>
            </div>


            <div>
            <p className="text-2xl my-10 uppercase">Electronics</p>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 lg:mx-8 gap-[30px] max-w-sm mx-auto md:max-w-none md:mx-0">
            {products.map((product) => {
              if(product.category == "electronics")
              return (
                <>
                <Product product={product} key={product.id}/>
                </>
              );
            })}
          </div>
            </div>


           

          </div>
         
        </div>
      </section>
    </div>
  );
};

export default Home;
