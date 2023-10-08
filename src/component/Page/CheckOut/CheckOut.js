import React from "react";
import SubTotal from "./SubTotal";
import ProductCheckOut from "./ProductCheckOut";
import { useStateValue } from "../../context/StateProvider";

function CheckOut() {
  const [{ basket }] = useStateValue();

  return (
    <div className=" bg-gray-300 h-screen">
      <div className=" relative flex flex-grow flex-row mt-4  bg-white">
        <div className="w-fit flex-col ml-5 mr-3  mb-3  ">
          <img
            className=""
            src="https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668_.jpg"
            alt=""
          />
          <p className=" sm:text-2xl md:text-3xl lg:text-4xl m-5 font-bold">
            Hello,
          </p>
          <p className="  pb-1 sm:text-sm-xl md:text-2xl font-medium border-b-2 border-black-400">
            Your Shopping Basket
          </p>
          <div>
            {basket.map(
              ({ id, title, price, description, category, image }) => (
                <ProductCheckOut
                  id={id}
                  image={image}
                  title={title}
                  price={price}
                  description={description}
                  catagory={category}
                />
              )
            )}
          </div>
        </div>
        <SubTotal />
      </div>
    </div>
  );
}

export default CheckOut;
