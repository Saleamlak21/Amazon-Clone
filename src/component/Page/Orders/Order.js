import React from "react";
import moment from "moment";
import CurrencyFormat from "react-currency-format";

function Order({ order }) {
  {
    console.log(order.data.basket.length);
  }
  let product = order.data.basket;
  console.log(product);
  return (
    <div>
      <div className=" my-5 shadow-xl bg-gray-200">
        <div className=" relative flex flex-grow w-full">
          <div className="px-4 py-2">
            <h3 className=" text-sm font-medium">ORDER PLACED</h3>
            <p className="text-xs ">
              {moment.unix(order.data.created).format("MMMM Do YYYY, h:ma")}
            </p>
          </div>
          <div className="px-4 py-3 mx-4 ">
            <p className="text-sm font-medium">TOTAL</p>
            <CurrencyFormat
              renderText={(value) => (
                <p className="text-xs">{value} - Next day delivery $5.99</p>
              )}
              decimalScale={2}
              value={order.data.amount}
              displayType="text"
              thousandSeparator={true}
              prefix="$"
            />
          </div>
          <div className=" absolute px-4 py-2 right-0 ml-5 top-0">
            <p className="text-xs">-{order.id}</p>
            <p className="text-fuchsia-400 ">
              {order.data.basket.length} Items{" "}
            </p>
          </div>
        </div>
        <div className="p-3 md:flex bg-white ">
          {product?.map((item) => {
            return (
              <div className="flex items-center flex-col ">
                <img className=" m-auto h-48 w-48 " src={item.image} />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Order;
