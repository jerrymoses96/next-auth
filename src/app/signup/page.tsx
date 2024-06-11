"use client";
import React from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Axios } from "axios";

const SignUp = () => {
  const [user, setUser] = React.useState({
    username: "",
    email: "",
    password: "",
  });

  const onSignup = async () => {};

  return (
    <div className="grid place-items-center h-screen">
      <div className="flex border bg-orange-400 text-white  w-1/3 border-black text-center flex-col  rounded-md shadow-md py-3 px-2">
        <h1 className="text-2xl font-bold">Sign Up</h1>
        <hr />
        <label className="text-lg" htmlFor="username">
          Username
        </label>
        <input
          className="border border-black rounded-md p-1"
          id="username"
          type="text"
          value={user.username}
          onChange={(e) => setUser({ ...user, username: e.target.value })}
          placeholder="username"
        />
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
          onClick={onSignup}
          className="border border-black rounded-md p-1 bg-gray-500 my-3"
        >
          Sign Up
        </button>
        <Link className="text-sm underline"  href={"/login"}>Visit Login page</Link>
      </div>
    </div>
  );
};

export default SignUp;
