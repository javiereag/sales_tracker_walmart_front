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

export const getAllTrack = async (initialDate, finalDate) => {
  try {
    const { data, status } = await SendRequestGet("transaction/getTrack", {
      initialDate,
      finalDate,
    });

    return data;
  } catch (error) {
    return null;
  }
};

export const getDataToTable = async (page, limit, type, value) => {
  try {
    const params = {
      page,
      limit,
      type,
      value,
    };
    const { data } = await SendRequestGet("transaction/getDataToTable", params);
    return data;
  } catch (error) {
    return null;
  }
};
