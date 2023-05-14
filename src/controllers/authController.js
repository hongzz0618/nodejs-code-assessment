import dotenv from "dotenv";
import jwt from "jsonwebtoken";

import { getClients } from "../services/clientService.js";
dotenv.config();

export const getToken = async (req, res) => {
  try {
    const { email } = req.params;
    const clients = await getClients();
    const currClient = clients.find((client) => client.email === email);

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
