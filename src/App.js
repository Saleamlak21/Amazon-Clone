// import Header from "./component/Header";
import HomePage from "./component/Page/Homepage/HomePage";
import CheckOut from "./component/Page/CheckOut/CheckOut";
import { Route, Routes } from "react-router-dom";
import Shared from "./component/Page/Shared/Shared";
import Login from "./component/Page/LogIn/Login";
import { useStateValue } from "./component/context/StateProvider";
import { useEffect } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "./firebase";

function App() {
const [{},dispatch] = useStateValue()

useEffect(() => {
    auth.onAuthStateChanged((authUser) => {
     if (authUser) {
        dispatch({
            type: "SET-USER",
            user:authUser,
        })
     } else {
        dispatch({
            type: "SET-USER",
            user:null,
        })
     }
    })
},[])

  return (
    <div>
      <Routes>
        <Route path="/" element={<Shared />}>
          <Route path="/" element={<HomePage />} />
          <Route path="checkout" element={<CheckOut />} />
        </Route>
        <Route path="login" element={<Login />} />
      </Routes>
    </div>
  );
}

export default App;
