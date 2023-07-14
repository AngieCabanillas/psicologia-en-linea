import { ForumCommentType } from "../types/forum-comment.type";
import axiosClient from "../utils/api/clientAxios";

const API = axiosClient.getUri();

const url = `${API}/reserve`;

export const getAllForumComment = async () => {
  return await axiosClient.get(url);
};

export const getForumCommentByID = async (id: number) => {
  return await axiosClient.get(`${url}/${id}`);
};

export const createForumComment = async (
  forumComment: Omit<ForumCommentType, "id">
) => {
  return await axiosClient.post(url, forumComment);
};

export const editForumComment = async (
  state: Omit<ForumCommentType, "id">,
  id: number
) => {
  return await axiosClient.put(`${url}/${id}`, state);
};

export const getForumCommentByForum = async (id: number) => {
  return await axiosClient.get(`${url}/forum/${id}`);
};

export const deleteForumComment = async (id: number) => {
  return await axiosClient.delete(`${url}/${id}`);
};
