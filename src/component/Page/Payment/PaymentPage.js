import React, { useEffect, useState } from "react";
import { useStateValue } from "../../context/StateProvider";
import ProductCheckOut from "../CheckOut/ProductCheckOut";
import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import CurrencyFormat from "react-currency-format";
import axios from "../../axios";
import { Link, useNavigate } from "react-router-dom";
import { db } from "../../firebase";

function Payment() {
  const [{ basket, user }, dispatch] = useStateValue();
  // -----some variables--------//
  const stripe = useStripe();
  const element = useElements();
  const navigate = useNavigate();

  // ------initial states---------//
  const [disabled, setDisabled] = useState(true);
  const [error, setError] = useState(null);
  const [processing, setProcessing] = useState(false);
  const [suceeded, setSuceeded] = useState(false);
  const [clientSecret, setClientSecret] = useState(true);

  // ----axios------- //

  useEffect(() => {
    const getClientSecret = async () => {
      try {
        const response = await axios({
          method: "post",
          url: `/payments/create?total=${totalPrice(basket) * 100}`,
        });
        setClientSecret(response.data.clientSecret);
      } catch (err) {
        console.error("Error fetching client secret:", err);
      }
    };
    getClientSecret();
  }, [basket]);

  // console.log(clientSecret)

  //--------functions---------//
  const totalPrice = (basket) =>
    basket?.reduce((amount, item) => item.price + amount, 0);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setProcessing(!error ? true : false);

    const payLoad = await stripe
      .confirmCardPayment(clientSecret, {
        payment_method: {
          card: element.getElement(CardElement),
        },
      })

      .then(({ paymentIntent }) => {
        // -------database--------//
        db.collection("users")
          .doc(user?.uid)
          .collection("orders")
          .doc(paymentIntent.id)
          .set({
            basket: basket,
            amount: paymentIntent.amount,
            created: paymentIntent.created,
          });

        setSuceeded(true);
        setError(null);
        setProcessing(false);

        dispatch({
          type: "CLEAN_BASKET",
        });

        navigate("/orders");
      });
  };

  const handleChange = (e) => {
    setDisabled(e.empty ? true : false);
    setError(e.error ? e.error.message : "");
  };

  //--------------return--------------//
  return (
    <div className="px-3 ">
      {/* top */}
      <div className=" flex bg-gray-100 -mx-3  border-b items-center justify-center py-5 border-gray-300">
        <p className=" font-normal text-3xl mx-auto items-center m-auto">
          Checkout ({" "}
          <Link to={"/"}>
            <span className=" text-fuchsia-400">{basket.length} items</span>){" "}
          </Link>
        </p>
      </div>
      {/* middle */}
      <div className="flex p-5 border-b border-gray-100">
        <div className="mx-6">
          <p>Delivery</p>
          <p>Address</p>
        </div>
        <div className="mx-9 ">
          <p>test@gmail.com</p>
          <p>123 adresss</p>
          <p> state</p>
        </div>
      </div>
      {/* items */}
      <div className="flex  border-b mb-6 pb-6 z-20">
        <div className="mt-4 mx-12 font-bold sm:text-sm md:text-md lg:text-lg w-36 flex-shrink ">
          <p className=" ">
            Review items <br /> and delivery
          </p>
        </div>
        <div className=" flex-grow">
          {basket.map(({ id, title, price, description, category, image }) => (
            <ProductCheckOut
              id={id}
              image={image}
              title={title}
              price={price}
              description={description}
              catagory={category}
            />
          ))}
        </div>
      </div>

      <div className="flex  border-b mb-6 pb-6 z-20">
        <div className="mt-4 mx-12 font-bold sm:text-sm md:text-md lg:text-lg w-36 flex-shrink ">
          <p>
            Payment <br /> Method
          </p>
        </div>
        <div className=" flex-grow p-3">
          <form onSubmit={handleSubmit}>
            <CardElement onChange={handleChange} className="w-1/2" />
            <CurrencyFormat
              renderText={(value) => (
                <div>
                  <p>Order Total: {value}</p>
                </div>
              )}
              decimalScale={2}
              value={totalPrice(basket)}
              displayType="text"
              thousandSeparator={true}
              prefix="$"
            />
            <button
              disabled={disabled || processing || suceeded || error}
              className={`border ${
                !disabled ? "button" : "bg-gray-200"
              }  w-2/4 py-2 mt-3 font-medium `}
            >
              <span>{processing ? "processing" : "Buy Now"}</span>
            </button>
            <p>{error}</p>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Payment;
