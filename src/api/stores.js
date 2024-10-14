import { SendRequestGet } from "./Instances/Instances";

export const getStoreOptions = async () => {
  try {
    const { data, status } = await SendRequestGet("stores/getStoreOptions");

    return data;
  } catch (error) {
    console.error(error);
    return null;
  }
};
