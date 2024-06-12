"use client";
import axios from "axios";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useEffect } from "react";
import toast from "react-hot-toast";

const LoginPage = () => {
  const [user, setUser] = React.useState({
    email: "",
    password: "",
  });
  const [buttonDisabled, setButtonDisabled] = React.useState(false);
  const [loading, setLoading] = React.useState(false);
  const router = useRouter();

  useEffect(() => {
    if (user.email.length > 0 && user.password.length > 0) {
      setButtonDisabled(false);
    } else {
      setButtonDisabled(true);
    }
  }, [user]);

  const onLogin = async () => {
    try {
      setLoading(true);
      const response = await axios.post("/api/users/login", user);
      console.log("login success", response.data);
      toast.success("Login Successful");
      router.push("/profile");
    } catch (error: any) {
      toast.error(error.response.data.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="grid place-items-center h-screen">
      <div className="flex border bg-orange-400 text-white  w-1/3 border-black text-center flex-col  rounded-md shadow-md py-3 px-2">
        <h1 className="text-2xl font-bold">{loading ? "loading..." : "login"}</h1>
        <hr />

        <label className="text-lg" htmlFor="username">
          Email
        </label>
        <input
          className="border border-black rounded-md p-1 text-black"
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
          className="border border-black rounded-md p-1 text-black"
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
          {buttonDisabled ? "cant login" : "login"}
        </button>
        <Link className="text-sm underline" href={"/signup"}>
          Visit sign up{" "}
        </Link>
      </div>
    </div>
  );
};

export default LoginPage;
