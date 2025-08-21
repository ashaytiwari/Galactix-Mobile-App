import { axiosClient } from "@axiosClient/index";

import {
  IDeletePostModel,
  IReactToPostModel,
  IUpdatePostParamsModel
} from "@interfaces/models/posts";
import { handleRESTServerInteractionError } from "@utilities/serviceHandlers";

class PostsServices {

  getCommunityPosts = (page: number, limit: number, communityId: string) => async (dispatch: any) => {
    try {

      let url = `getCommunityPosts?page=${page}&limit=${limit}&communityId=${communityId}`;

      const response = await axiosClient.get(url);
      const responseData = response?.data;

      if (responseData?.statusCode !== 200) {
        throw responseData;
      }

      return response;

    } catch (error) {
      handleRESTServerInteractionError(dispatch, error, true);
    }
  };

  updateCommunityPost = (params: IUpdatePostParamsModel) => async (dispatch: any) => {
    try {
      const response = await axiosClient.post('api/updatePost', params);

      const responseData = response?.data;

      if (responseData?.statusCode !== 200) {
        throw responseData;
      }

      return response;

    } catch (error) {
      handleRESTServerInteractionError(dispatch, error);
    }
  };

  getPostReactions = (postId: string) => async (dispatch: any) => {
    try {

      let url = `api/getPostReactions?postId=${postId}`;

      const response = await axiosClient.get(url);
      const responseData = response?.data;

      if (responseData?.statusCode !== 200) {
        throw responseData;
      }

      return response;

    } catch (error) {
      handleRESTServerInteractionError(dispatch, error, true);
    }
  };

  reactToPost = (params: IReactToPostModel) => async (dispatch: any) => {
    try {
      const response = await axiosClient.post('api/reactToPost', params);

      const responseData = response?.data;

      if (responseData?.statusCode !== 200) {
        throw responseData;
      }

      return response;

    } catch (error) {
      handleRESTServerInteractionError(dispatch, error);
    }
  };

  deletePost = (params: IDeletePostModel) => async (dispatch: any) => {
    try {
      const response = await axiosClient.post('api/deletePost', params);

      const responseData = response?.data;

      if (responseData?.statusCode !== 200) {
        throw responseData;
      }

      return response;

    } catch (error) {
      handleRESTServerInteractionError(dispatch, error);
    }
  };

};

export const postsServices = new PostsServices();