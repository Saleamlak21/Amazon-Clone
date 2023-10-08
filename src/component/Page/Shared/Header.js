import React from "react";
import { Link } from "react-router-dom";
import SearchIcon from "@mui/icons-material/Search";
import ShoppingBasketIcon from "@mui/icons-material/ShoppingBasket";
import MenuIcon from "@mui/icons-material/Menu";
import logo from "../../../asset/pngimg.com - amazon_PNG11 (2).png";
import { useStateValue } from "../../context/StateProvider";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../../firebase";

function Header() {
  const [{ basket, user }] = useStateValue();

  const handleAuthentication = () => {
    if (user) {
      auth.signOut();
    }
  };

  return (
    <header>
      {/* top header */}
      <div className=" flex items-center bg-amazon_blue p-1 flex-grow py-2">
        <Link to={"/"}>
          <div className="mt-2 pt-1 mx-2 flex items-center flex-grow sm:flex-grow-0 ">
            <img
              width={150}
              height={40}
              objectFit="contain"
              src={logo}
              alt="amzon logo"
              className=" cursor-pointer "
            />
          </div>
        </Link>

        <div className=" hidden sm:flex items-center m-2 h-10 bg-yellow-400  flex-grow hover:bg-yellow-500 rounded-md cursor-pointer">
          <input
            className="flex flex-grow p-2 h-full w-6 rounded-l-md focus:outline-none"
            type="text"
          />
          <SearchIcon className="h-12 m-3" />
        </div>
        <div className="text-white flex  sm:text-xs md:text-sm items-center space-x-6 mx-6 whitespace-nowrap">
          <Link to={!user && "/login"}>
            <div
              onClick={handleAuthentication}
              className="text-white cursor-pointer "
            >
              <p>Hello,{!user ? "Guest" : user.email}</p>
              <p className="  font-medium text-sm">
                {!user ? "Sign In" : "Sign Out"}
              </p>
            </div>
          </Link>
          <Link to={"/orders"}>
            <div className=" cursor-pointer">
              <p>Returns</p>
              <p className=" font-medium text-sm">& Orders</p>
            </div>
          </Link>
          <Link to={"checkout"}>
            <div className="flex cursor-pointer">
              <ShoppingBasketIcon className="h-10 w-10 mt-3" />
              <div className="">
                <p className=" text-sm  ">{basket?.length}</p>
                <p className=" hidden sm:flex">Basket</p>
              </div>
            </div>
          </Link>
        </div>
      </div>
      {/* bottom */}
      <div className=" flex bg-amazon_blue-light text-white text-sm space-x-3 p-2">
        <p className="cursor-pointer">
          <MenuIcon className=" items-center h-6 mr-1" />
          All
        </p>
        <p>Prime Vedio</p>
        <p>Amazon Business</p>
        <p>Today's Deals</p>
        <p className="cursor-pointer  hidden lg:flex">Electronics</p>
        <p className="cursor-pointer  hidden lg:flex">Food & Grocery</p>
        <p className="cursor-pointer  hidden lg:flex">Prime</p>
        <p className="cursor-pointer  hidden lg:flex">Buy Again</p>
        <p className="cursor-pointer  hidden lg:flex">Shopper Toolkit</p>
        <p className="cursor-pointer  hidden lg:flex">Health & Personal Care</p>
      </div>
      <div></div>
    </header>
  );
}

export default Header;
