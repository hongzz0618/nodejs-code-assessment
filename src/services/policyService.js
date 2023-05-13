import axios from "axios";

export const getPolicies = async () => {
  try {
    const response = await axios.get(
      //default value of the exercise policy api
      "http://www.mocky.io/v2/580891a4100000e8242b75c5"
    );
    return response.data;
  } catch (error) {
    console.error(error);
  }
};
