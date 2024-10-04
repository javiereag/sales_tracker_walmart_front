import axios from "axios";
import { token } from "../../helper/getTokens/getTokens";
const baseURL = process.env.URL;

export const InstanceAxios = () => {
  const headers = {
    "Content-Type": "application/json",
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS",
    "Access-Control-Allow-Headers":
      "Origin, X-Requested-With, Content-Type, Accept, Authorization",
    token,
  };
  return axios.create({
    baseURL,
    headers: { ...headers },
  });
};

export const SendRequestGet = async (url, params) => {
  try {
    const response = await InstanceAxios().get(url, { params });
    return { data: response?.data, status: 200 };
  } catch ({ response }) {
    if (response?.data === "Unauthorized" || response?.status === 401) {
      localStorage.clear();
      window.location.href = "/";
    }
    return { data: response?.data?.detail, status: response?.status };
  }
};

export const SendRequest = async (method, url, data, params) => {
  try {
    const response = await InstanceAxios()[method](url, data, { params });
    return { data: response.data, status: response.status };
  } catch ({ response }) {
    if (response?.data === "Unauthorized" || response?.status === 401) {
      localStorage.clear();
      window.location.href = "/";
    }
    return { data: response?.data?.detail, status: response?.status };
  }
};
