"use client";
import React from "react";
import { useRouter } from "next/navigation";
import axios from "axios";
import toast from "react-hot-toast";

const ProfilePage = () => {
  const router = useRouter();

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
