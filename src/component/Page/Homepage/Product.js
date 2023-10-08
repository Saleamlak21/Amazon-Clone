import React, { useState } from "react";
import StarIcon from "@mui/icons-material/Star";
import { useStateValue } from "../../context/StateProvider";

function Product({ id, title, price, description, catagory, image, width }) {
  const [{ basket }, dispatch] = useStateValue();

  const max = 5;
  const min = 1;
  const [rate] = useState(Math.floor(Math.random() * (max - min) + min));

  function addToBasket() {
    dispatch({
      type: "ADD_TO_BASKET",
      item: {
        id: id,
        title: title,
        price: price,
        description: description,
        catagory: catagory,
        image: image,
      },
    });
  }

  return (
    <div
      key={id}
      className=" relative flex flex-col m-5 bg-white h-full z-10 p-10 "
    >
      <p className=" absolute top-2 right-2 text-xs italic text-gray-400">
        {catagory}
      </p>
      <img
        className={` m-auto h-48 w-48 ${width} `}
        objectFit="contain"
        src={image}
      />
      <p className="my-3 font-medium">{title}</p>
      <div className="h-5 text-yellow-500">
        {Array(rate)
          .fill()
          .map((_, i) => (
            <StarIcon className="h-5" />
          ))}
      </div>
      <p className=" text-xs md:text-sm my-2 line-clamp-2">{description}</p>
      <p className=" font-bold pb-5">${price}</p>

      <button onClick={addToBasket} className="mt-auto p-2 button">
        Add to Basket
      </button>
    </div>
  );
}

export default Product;
