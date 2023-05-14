import { getPolicies } from "../services/policyService.js";

export const findPolicyByAttribute = async (attributeName, attributeValue) => {
  try {
    const policies = await getPolicies();
    return policies.find((policy) => policy[attributeName] === attributeValue);
  } catch (error) {
    console.log(
      "🚀 ~ file: clientRepository.js:12 ~ findUserByAttribute ~ error:",
      error
    );
    return;
  }
};
