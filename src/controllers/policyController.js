import { findUserByAttribute } from "../repository/clientRepository.js";
import { getPolicies } from "../services/policyService.js";

export const getPoliciesByUsername = async (req, res) => {
  try {
    const { username } = req.params;
    const currClient = await findUserByAttribute("name", username);

    if (!currClient) return res.status(404).json({ message: "Not found" });

    const policies = await getPolicies();
    const currPoliciesByUsername = policies.filter(
      (policy) => policy.clientId === currClient.id
    );
    res.json(currPoliciesByUsername);
  } catch (error) {
    return res.status(500).json({ message: "Something goes wrong" });
  }
};
