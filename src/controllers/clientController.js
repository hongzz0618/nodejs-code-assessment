import { getClients } from "../services/clientService.js";
import { strToNormalize } from "../helpers/utils.js";

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

export const getClientByUsername = async (req, res) => {
  try {
    const { username } = req.params;
    const clients = await getClients();
    const currClient = clients.find(
      (client) => strToNormalize(client.name) === strToNormalize(username)
    );

    if (!currClient) return res.status(404).json({ message: "Not found" });

    res.json(currClient);
  } catch (error) {
    return res.status(500).json({ message: "Something goes wrong" });
  }
};
