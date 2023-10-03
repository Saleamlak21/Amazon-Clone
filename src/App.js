// import Header from "./component/Header";
import HomePage from "./component/Page/Homepage/HomePage";
import CheckOut from "./component/Page/CheckOut/CheckOut";
import { Route, Routes } from "react-router-dom";
import Shared from "./component/Page/Shared/Shared";
import Login from "./component/Page/LogIn/Login";
import { useStateValue } from "./component/context/StateProvider";
import { useEffect } from "react";
// import { onAuthStateChanged } from "firebase/auth";
import { auth } from "./component/firebase";
import Payment from "./component/Page/Payment/PaymentPage";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import Orders from "./component/Page/Orders/Orders";

const promise = loadStripe(
  "pk_test_51NwdTnCJhvhzyW5K78bgYHbRm5jpsUMx1lCWu1eHsYMqNeAJdeWJGQCPAwvbaJYwpYevjcj2K3YiDf5itQk6Aw9w00anuFCMG7"
);

function App() {
  const [{}, dispatch] = useStateValue();

  useEffect(() => {
    auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        dispatch({
          type: "SET-USER",
          user: authUser,
        });
      } else {
        dispatch({
          type: "SET-USER",
          user: null,
        });
      }
    });
  }, []);

  return (
    <div>
      <Routes>
        <Route path="/" element={<Shared />}>
          <Route path="/" element={<HomePage />} />
          <Route path="checkout" element={<CheckOut />} />
          <Route path="orders" element={<Orders />} />
          <Route
            path="payment"
            element={
              <Elements stripe={promise}>
                <Payment />
              </Elements>
            }
          />
        </Route>
        <Route path="login" element={<Login />} />
      </Routes>
    </div>
  );
}

export default App;
