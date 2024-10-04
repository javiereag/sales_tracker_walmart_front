import { SendRequestGet } from "./Instances/Instances";

export const dataToAnalytics = async (initialDate, finalDate) => {
  try {
    const { data, status } = await SendRequestGet(
      "transaction/dataToAnalytics",
      {
        initialDate,
        finalDate,
      }
    );

    return data;
  } catch (error) {
    console.error(error);
    return null;
  }
};
