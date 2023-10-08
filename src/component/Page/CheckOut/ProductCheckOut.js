import React, { useState } from "react";
import StarIcon from "@mui/icons-material/Star";
import { useStateValue } from "../../context/StateProvider";

function ProductCheckOut({ id, title, price, description, category, image }) {
  const [{ basket }, dispatch] = useStateValue();

  const max = 5;
  const min = 1;
  const [rating] = useState(Math.floor(Math.random() * (max - min) + min));

  const removeFromBasket = () => {
    dispatch({
      type: "Remove_From_Array",
      id: id,
    });
  };

  return (
    <div key={id} className="flex flex-grow  m-4 shadow-lg px-9 py-3">
      <div className=" w-2/5 py-4 items-center justify-center ">
        <img className="h-52  w-52" src={image} />
      </div>
      <div className="  w-2/4  items-center justify-center">
        <p className=" font-normal">{title}</p>
        <strong>${price}</strong>
        <div className="h-5 my-1 text-yellow-500">
          {Array(rating)
            .fill()
            .map((_, i) => (
              <StarIcon className="h-5" />
            ))}
        </div>
        <button onClick={removeFromBasket} className=" my-4 py-1  px-3 button">
          Remove from Basket
        </button>
      </div>
    </div>
  );
}

export default ProductCheckOut;
