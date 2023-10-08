import React, { useState } from "react";
import logo from "../../../asset/amazon-logo-vector-png-amazon-logo-vector-512.png";
import { Link, useNavigate } from "react-router-dom";
import {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
} from "firebase/auth";
import { auth } from "../../firebase";

function Login() {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const navigate = useNavigate();

  const signIn = (e) => {
    e.preventDefault();
    signInWithEmailAndPassword(auth, email, password)
      .then((userCridential) => {
        if (userCridential) {
          navigate("/");
        }
      })
      .catch((err) => alert(err.message));
  };
  const creatAccount = (e) => {
    e.preventDefault();
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCridential) => {
        if (userCridential) {
          navigate("/");
        }
      })
      .catch((err) => alert(err.message));
  };

  return (
    <div className=" items-center justify-center mx-auto mb-14">
      <div className="m-auto items-center w-96 mb-24 ">
        <Link to={"/"}>
          <img
            className="mx-auto -my-8"
            width={150}
            objectFit="contain"
            src={logo}
          />
        </Link>
        <div className="shadow-lg p-6 border-t rounded-md">
          <p className=" text-2xl mb-3 font-medium">Sign-in</p>
          <form>
            <label className=" text-sm font-medium">E-mail</label>
            <br />
            <input
              onChange={(e) => setEmail(e.target.value)}
              className=" border h-9 w-full focus:shadow-green-100 focus:shadow-sm focus:bg-blue-100 focus:outline-none mb-3"
              type="text"
            />
            <br />
            <label className=" text-sm font-medium">Password</label>
            <br />
            <input
              onChange={(e) => setPassword(e.target.value)}
              className=" border h-9 w-full focus:shadow-green-100 focus:shadow-sm focus:outline-none focus:bg-blue-100 mb-3"
              type="password"
            />
            <br />
            <button
              onClick={signIn}
              type="submit"
              className="button w-full py-2 my-4 font-normal "
            >
              Sign in
            </button>
            <br />
          </form>
          <span className=" text-sm">
            By continuing, you agree to Amazon's{" "}
            <Link className=" text-blue-600 hover:underline ">
              {" "}
              Conditions of Use
            </Link>{" "}
            and{" "}
            <Link className=" text-blue-600 hover:underline ">
              Privacy Notice
            </Link>
          </span>
        </div>
        <div className="flex items-center py-6 font-light ">
          <div className="flex-grow h-px w-0.5 bg-black"></div>
          <span className="flex-shrink  text-black px-1 text-xs">
            New to Amazon?
          </span>
          <div className="flex-grow w-0.5  h-px bg-black"></div>
        </div>
        <button
          onClick={creatAccount}
          className="border py-1 rounded-md shadow-md  w-full hover:bg-gray-100 focus:bg-white active:border-black"
        >
          Create your Amazon Account
        </button>
      </div>
    </div>
  );
}

export default Login;
