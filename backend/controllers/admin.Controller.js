import Admin from "../models/admin.model.js";
import jwt from "jsonwebtoken";

export const adminLogin = async (req, res) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res.status(400).json({
        message: "Email and password are required"
      });
    }

    const admin = await Admin.findOne({ email });
    if (!admin) {
      return res.status(401).json({
        message: "Invalid credentials"
      });
    }

    const isMatch = await admin.comparePassword(password);
    if (!isMatch) {
      return res.status(401).json({
        message: "Invalid credentials"
      });
    }

    const token = jwt.sign(
      { id: admin._id, role: admin.role },
      process.env.JWT_SECRET,
      { expiresIn: "1d" }
    );

    res.status(200).json({
      message: "Admin login successful",
      token
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const setAdmin = async () => {
  try {
    const existingAdmin = await Admin.findOne({
      email: `${process.env.ADMIN_EMAIL}`
    });

    if (existingAdmin) {
      console.log("Admin already exists");
      return;
    }

    await Admin.create({
      email: `${process.env.ADMIN_EMAIL}`,
      password: `${process.env.ADMIN_PASSWORD}`
    });

    console.log("Admin added successfully");
  } catch (error) {
    console.error("Error creating admin:", error.message);
  }
};

export const adminLogout = async (req, res) => {
  try {
    // For JWT, logout is handled client-side
    return res.status(200).json({
      message: "Admin logged out successfully"
    });
  } catch (error) {
    return res.status(500).json({
      message: "Logout failed"
    });
  }
};

