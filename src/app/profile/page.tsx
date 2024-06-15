"use client";
import React from "react";
import { useRouter } from "next/navigation";
import axios from "axios";
import toast from "react-hot-toast";
import { log } from "console";
import Link from "next/link";

const ProfilePage = () => {
  const router = useRouter();
  const [data, setData] = React.useState("nothing");

  const getUserDetails = async () => {
    const res = await axios.get("/api/users/me");
    console.log(res.data);
    setData(res.data);
  };

  const logout = async () => {
    try {
      // Perform logout logic
      await axios.get("/api/users/logout");
      toast.success("Logout successful");
      router.push("/login");
    } catch (error: any) {
      console.log(error);
      toast.error(error.response.data.message);
    }
  };
  return (
    <div className="grid place-items-center h-screen">
      <p>ProfilePage</p>
      <h2 className="bg-green-500 p-3 rounded-md text-white">{data === "Nothing" ? "Nothing" : <Link href={`/profile/${data}`}>{data}</Link>}</h2>
      <button
        onClick={getUserDetails}
        className="bg-blue-500 rounded-md p-2 text-white shadow-sm"
      >
        Get User Details
      </button>
      <button
        onClick={logout}
        className="bg-red-500 rounded-md p-2 text-white shadow-sm"
      >
        Logout
      </button>
    </div>
  );
};

export default ProfilePage;
