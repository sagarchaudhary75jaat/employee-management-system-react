import React, { useState } from "react";

const Login = ({ handleLogin }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const submitHandler = (e) => {
    e.preventDefault();

    handleLogin(email, password);

    setEmail("");
    setPassword("");
  };

  return (
    <div className="flex h-screen w-screen items-center justify-center bg-[#111]">
      <div className="border-2 border-emerald-600 rounded-xl p-20">

        <form
          onSubmit={submitHandler}
          className="flex flex-col items-center justify-center"
        >
          <h1 className="text-4xl font-bold mb-8">
            Login
          </h1>

          <input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="outline-none bg-transparent border-2 border-emerald-600 text-xl py-3 px-5 rounded-full placeholder:text-gray-400 w-80"
            type="email"
            placeholder="Enter your email"
          />

          <input
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="outline-none bg-transparent border-2 border-emerald-600 text-xl py-3 px-5 rounded-full placeholder:text-gray-400 w-80 mt-5"
            type="password"
            placeholder="Enter your password"
          />

          <button
            type="submit"
            className="mt-8 bg-emerald-600 hover:bg-emerald-700 text-white text-xl py-3 px-5 rounded-full w-80 transition-all duration-300"
          >
            Log In
          </button>
        </form>

      </div>
    </div>
  );
};

export default Login;