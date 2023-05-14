import { getClients } from "../services/clientService.js";

export const getClientById = async (req, res) => {
  try {
    const { id } = req.params;
    const clients = await getClients();
    const currClient = clients.find((client) => client.id === id);

    if (!currClient) return res.status(404).json({ message: "Not found" });

    res.json(currClient);
  } catch (error) {
    return res.status(500).json({ message: "Something goes wrong" });
  }
};
