import axios from "axios";

export const getClients = async () => {
  try {
    const response = await axios.get(
      //default value of the exercise client api
      "http://www.mocky.io/v2/5808862710000087232b75ac"
    );
    return response.data;
  } catch (error) {
    console.error(error);
  }
};
