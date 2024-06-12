import bcryptjs from "bcryptjs";
import { NextRequest, NextResponse } from "next/server";
import { connectDB } from "../../../../dbConfig/dbConfig";
import User from "../../../../models/userModel";
import jwt from "jsonwebtoken";

connectDB();

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { email, password } = body;
    const user = await User.findOne({ email });
    if (!user) {
      return NextResponse.json(
        { error: "User does not exist" },
        { status: 400 }
      );
    }
    const isMatch = await bcryptjs.compare(password, user.password);
    if (!isMatch) {
      return NextResponse.json({ error: "Invalid Password" }, { status: 400 });
    }
    // Create token data
    const tokenData = {
      _id: user._id,
      username: user.username,
      email: user.email,
    };
    // create token

    const token = await jwt.sign(tokenData, process.env.JWT_SECRET!, {
      expiresIn: "1d",
    });

    const response = NextResponse.json({
      message: "Login successful",
      success: true,
    });

    response.cookies.set("token", token, {
      httpOnly: true,
    });
    return response;
  } catch (err: any) {
    return NextResponse.json({ error: err.message }, { status: 500 });
  }
}
