import { SendRequestGet } from "./Instances/Instances";

export const dataToAnalytics = async (initialDate, finalDate, store) => {
  try {
    const { data, status } = await SendRequestGet(
      "transaction/dataToAnalytics",
      {
        initialDate,
        finalDate,
        store,
      }
    );

    return data;
  } catch (error) {
    console.error(error);
    return null;
  }
};

export const getDataToTable = async (dataSend) => {
  try {
    const params = { ...dataSend };
    const { data } = await SendRequestGet("transaction/getDataToTable", params);
    return data;
  } catch (error) {
    return null;
  }
};
