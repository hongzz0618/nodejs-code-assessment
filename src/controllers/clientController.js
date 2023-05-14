import { findUserByAttribute } from "../repository/clientRepository.js";

export const getClientById = async (req, res) => {
  try {
    const { id } = req.params;
    const currClient = await findUserByAttribute("id", id);

    if (!currClient) return res.status(404).json({ message: "Not found" });

    res.json(currClient);
  } catch (error) {
    return res.status(500).json({ message: "Something goes wrong" });
  }
};

export const getClientByUsername = async (req, res) => {
  try {
    const { username } = req.params;
    const currClient = await findUserByAttribute("name", username);

    if (!currClient) return res.status(404).json({ message: "Not found" });

    res.json(currClient);
  } catch (error) {
    return res.status(500).json({ message: "Something goes wrong" });
  }
};
