"use client";
import React from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Axios } from "axios";

const LoginPage = () => {
  const [user, setUser] = React.useState({
    email: "",
    password: "",
  });

  const onLogin = async () => {};

  return (
    <div className="grid place-items-center h-screen">
      <div className="flex border bg-orange-400 text-white  w-1/3 border-black text-center flex-col  rounded-md shadow-md py-3 px-2">
        <h1 className="text-2xl font-bold">Login</h1>
        <hr />
        
        <label className="text-lg" htmlFor="username">
          Email
        </label>
        <input
          className="border border-black rounded-md p-1"
          id="Email"
          type="email"
          value={user.email}
          onChange={(e) => setUser({ ...user, email: e.target.value })}
          placeholder="email"
        />
        <label className="text-lg" htmlFor="username">
          Password
        </label>
        <input
          className="border border-black rounded-md p-1"
          id="password"
          type="password"
          value={user.password}
          onChange={(e) => setUser({ ...user, password: e.target.value })}
          placeholder="password"
        />

        <button
          onClick={onLogin}
          className="border border-black rounded-md p-1 bg-gray-500 my-3"
        >
          Login
        </button>
        <Link className="text-sm underline"  href={"/signup"}>Visit sign up </Link>
      </div>
    </div>
  );
};

export default LoginPage;
