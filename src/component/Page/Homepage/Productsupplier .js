import React, { useEffect, useState } from "react";
import Item from "./Product";

export default function ProductSupplier() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products").then((res) =>
      res.json().then((data) => {
        setProducts(data);
      })
    );
  }, []);

  return (
    <div className="grid grid-flow-row-dense md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-4 items-stretch md:-mt-52 z-20 mx-auto">
      {products
        .slice(0, 4)
        .map(({ id, title, price, description, category, image, rating }) => (
          <div className="my-5" key={id}>
            <Item
              id={id}
              title={title}
              price={price}
              description={description}
              catagory={category}
              image={image}
              rating={rating}
            />
          </div>
        ))}
      <div className=" md:col-span-2 lg:col-span-4 xl:col-span-4">
        {products
          .slice(13, 14)
          .map(({ id, title, price, description, category, image, rating }) => (
            <div className="my-5  " key={id}>
              <Item
                width={"md:w-96"}
                id={id}
                title={title}
                price={price}
                description={description}
                catagory={category}
                image={image}
                rating={rating}
              />
            </div>
          ))}
      </div>

      {products
        .slice(4, 12)
        .map(({ id, title, price, description, category, image, rating }) => (
          <div className="my-5" key={id}>
            <Item
              id={id}
              title={title}
              price={price}
              description={description}
              catagory={category}
              image={image}
              rating={rating}
            />
          </div>
        ))}
      <div className=" hidden md:flex relative md:col-span-full px-12 mt-7 mx-5">
        <img
          className=" "
          src="https://m.media-amazon.com/images/S/al-na-9d5791cf-3faf/03b16505-74c0-4de1-bb64-5dd46c7a92c3.jpg"
          alt=""
        />
      </div>

      {products
        .slice(14, 18)
        .map(({ id, title, price, description, category, image, rating }) => (
          <div className="my-5" key={id}>
            <Item
              id={id}
              title={title}
              price={price}
              description={description}
              catagory={category}
              image={image}
              rating={rating}
            />
          </div>
        ))}
    </div>
  );
}
