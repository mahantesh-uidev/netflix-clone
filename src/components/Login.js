import React, { useRef, useState } from "react";
import Header from "./Header";
import { checkValidData } from "../utils/validate";

const Login = () => {
    const [isSignInForm, setIsSignInForm] = useState(false);
    const [errorMessage, setErrorMessage] = useState(null);
    const name = useRef(null);
    const email = useRef(null);
    const password = useRef(null);
    const toggleSignUpForm =() => {
        setIsSignInForm(!isSignInForm);
    }
    const handleButtonClick = () => {
        // validate the form data
        const message = checkValidData(name.current.value, email.current.value, password.current.value);
        setErrorMessage(message);

        // Sign In/Sign Up

    }
  return (
    <div>
      <Header />
      <div className="absolute">
        <img
          src="https://assets.nflxext.com/ffe/siteui/vlv3/2e07bc25-8b8f-4531-8e1f-7e5e33938793/e4b3c14a-684b-4fc4-b14f-2b486a4e9f4e/IN-en-20240219-popsignuptwoweeks-perspective_alpha_website_small.jpg"
          alt="logo"
        />
      </div>
      <form onSubmit={(e) => e.preventDefault()} className="absolute bg-black rounded-lg p-12 w-3/12 my-36 mx-auto right-0 left-0 text-white bg-opacity-80">
        <h1 className="font-bold py-4 text-3xl">{isSignInForm ? "Sign In" : "Sign Up"}</h1>
        {!isSignInForm && <input
          type="text"
          ref={name}
          placeholder="Full Name"
          className="p-2 my-2 w-full bg-gray-700"
        />}
        <input
          type="text"
          ref={email}
          placeholder="Email Address"
          className="p-2 my-2 w-full bg-gray-700"
        />
        <input
          type="password"
          ref={password}
          placeholder="Password"
          className="p-2 my-2 w-full bg-gray-700"
        />
        <p className="text-red-500 font-bold py-2">{errorMessage}</p>
        <button className="p-2 my-6 bg-red-700 rounded-lg w-full" onClick={handleButtonClick}>
        {isSignInForm ? "Sign In" : "Sign Up"}
        </button>
        <p className="cursor-pointer" onClick={toggleSignUpForm}>
        {isSignInForm ? "New to Netflix? Sign up now." : "Already registered? Sign In now."}
        </p>
      </form>
    </div>
  );
};

export default Login;
