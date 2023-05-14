import { getClients } from "../services/clientService.js";
import { strToNormalize } from "../helpers/utils.js";

export const findUserByAttribute = async (attributeName, attributeValue) => {
  try {
    const clients = await getClients();
    return clients.find(
      (client) =>
        strToNormalize(client[attributeName]) === strToNormalize(attributeValue)
    );
  } catch (error) {
    console.log(
      "🚀 ~ file: clientRepository.js:12 ~ findUserByAttribute ~ error:",
      error
    );
    return;
  }
};
