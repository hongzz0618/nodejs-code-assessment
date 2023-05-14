import dotenv from "dotenv";
import jwt from "jsonwebtoken";

import { findUserByAttribute } from "../repository/clientRepository.js";
dotenv.config();

export const getToken = async (req, res) => {
  try {
    const { email } = req.params;
    const currClient = await findUserByAttribute("email", email);

    if (!currClient) return res.json({ ok: false });

    const accessToken = jwt.sign(
      { role: currClient.role },
      process.env.ACCESS_TOKEN_SECRET,
      {
        expiresIn: "30s",
      }
    );
    res.json({ ok: true, accessToken });
  } catch (error) {
    return res.status(500).json({ message: "Something goes wrong" });
  }
};
