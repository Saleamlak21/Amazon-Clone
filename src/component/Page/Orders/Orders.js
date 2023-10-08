import React, { useEffect, useState } from "react";
import { db } from "../../firebase";
import { useStateValue } from "../../context/StateProvider";
import Order from "./Order";

function Orders() {
  const [{ basket, user }] = useStateValue();
  const [orders, setOrders] = useState([]);

  //-------------------------------------------------------
  useEffect(() => {
    if (user) {
      db.collection("users")
        .doc(user?.uid)
        .collection("orders")
        .orderBy("created", "desc")
        .onSnapshot((snapshot) =>
          setOrders(
            snapshot.docs?.map((doc) => ({
              id: doc.id,
              data: doc.data(),
            }))
          )
        );
    } else {
      setOrders([]);
    }
  }, [user]);
  ////------------------------------------------------

  console.log(orders);
  return (
    <div className=" xl:px-44 lg:px-32 md:px-2 py-5">
      <div>
        <h2 className="px-2 text-3xl font-medium border-b-2 border-b-yellow-300 py-3">
          Your Orders
        </h2>
        <h3 className="px-2 my-2 text-xl text-fuchsia-400 font-medium ">
          {orders.length} Orders
        </h3>
      </div>
      <div className="">
        {orders?.map((order) => {
          return (
            <div key={order.id}>
              <Order order={order} />
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Orders;
