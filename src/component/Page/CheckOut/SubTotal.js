import React from "react";
import CurrencyFormat from "react-currency-format";
import { useStateValue } from "../../context/StateProvider";

function SubTotal() {
  const [{ basket }] = useStateValue();
  //    console.log(basket)

  const totalPrice = (basket) =>
    basket?.reduce((amount, item) => item.price + amount, 0);

  return (
    <div className="w-full lg:w-7/12 bg-gray-300 h-48  mb-9 mr-3 rounded-sm">
      <CurrencyFormat
        renderText={(value) => (
          <div className="text-black p-4">
            <p className="mx-2 font-medium md:text-base">
              Subtotal ({basket.length} items):<strong>{value}</strong>
            </p>
            <span className=" sm:text-xs md:text-sm mx-3">
              <input type="checkbox" /> This order contains a gift.
            </span>
          </div>
        )}
        decimalScale={2}
        value={totalPrice(basket)}
        displayType="text"
        thousandSeparator={true}
        prefix="$"
      />
      <div className="flex items-center justify-cente">
        <button className="mx-auto button p-12 md:px-24 py-2 my-3">
          Proceed to Checkout
        </button>
      </div>
    </div>
  );
}

export default SubTotal;
