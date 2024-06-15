import { getDataFromToken } from "<@>/helpers/getDataFromToken";
import { NextRequest, NextResponse } from "next/server";
import User from "<@>/models/userModel";
import { connectDB } from "<@>/dbConfig/dbConfig";

connectDB();

export async function GET(request: NextRequest) {
  try {
    console.log("Request received at /api/users/me");
    
    const userId = getDataFromToken(request);
    if (!userId) {
      console.error("Invalid or expired token");
      throw new Error("Invalid or expired token");
    }
    
    const user = await User.findOne({ _id: userId }).select("-password");
    if (!user) {
      console.error("User not found for ID:", userId);
      return NextResponse.json({ error: "User not found" }, { status: 404 });
    }
    
    return NextResponse.json({ user });
  } catch (error: any) {
    console.error("Error in GET /api/users/me:", error.message);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
