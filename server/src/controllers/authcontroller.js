import userSchema from "../db/userSchema.js";
import { hashPassword, comparePassword } from "../utils/auth.util.js";
import JWT from "jsonwebtoken";

export const signup = async (req, res) => {
  try {
    const { firstName, lastName, email, password } = req.body;
    const existingUser = await userSchema.findOne({ email });
    if (existingUser) {
      res.status(400).json({
        message: "User Already exists",
        succces: false,
      });
    }
    const hashedpassword = await hashPassword(password);
    const user = await userSchema.create({
      firstName,
      lastName,
      email,
      password: hashedpassword,
    });
    res.status(201).json({
      message: "User created Successfully ",
      succces: true,
      user,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      message: " Server Error",
      succces: false,
      error,
    });
  }
};

export const login = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await userSchema.findOne({ email });
    if (!user) {
      res.status(400).json({
        message: "User Doesn't exists",
        succces: false,
      });
    }
    const isMatch = comparePassword(password, user.password);
    if (!isMatch) {
      res.status(400).json({
        message: "Wrong Password",
        succces: false,
      });
    }
    const token = await JWT.sign(
      { _id: user._id },
      process.env.AUTH_SECRET_KEY,
      { expiresIn: "7d" }
    );
    res.status(201).json({
      message: "Logged in Successfully ",
      succces: true,
      user: {
        firstName: user.firstName,
        lastName: user.lastName,
        email: user.email,
      },
      token,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      message: " Server Error",
      succces: false,
      error,
    });
  }
};

export const testController = async (req, res) => {
  res.send("protected routes");
};
