import { ForumType } from "../types/forum.type";
import axiosClient from "../utils/api/clientAxios";

const API = axiosClient.getUri();

const url = `${API}/forum`; //segun index.ts

export const getAllForums = async () => {
  return await axiosClient.get(url);
};

export const getForumByID = async (id: number) => {
  return await axiosClient.get(`${url}/${id}`);
};

export const createForum = async (forum: Omit<ForumType, "id">) => {
  return await axiosClient.post(url, forum);
};

export const editForum = async (state: Omit<ForumType, "id">, id: number) => {
  return await axiosClient.put(`${url}/${id}`, state);
};

export const getReserveByForum = async (id: number) => {
  return await axiosClient.get(`${url}/client/${id}`);
};

export const getForumByUser = async (id: number) => {
  return await axiosClient.get(`${url}/user/${id}`);
};

export const deleteForum = async (id: number) => {
  return await axiosClient.delete(`${url}/${id}`);
};
