import { axiosClient } from "@axiosClient/index";

import { ICommunityEditorDataModel, IHandleCommunityJoiningRequestParamsModel } from "@interfaces/models/communities";

import { handleRESTServerInteractionError } from "@utilities/serviceHandlers";

// import {
//   ICommunityEditorDataModel,
//   IHandleCommunityJoiningRequestParamsModel,
//   IJoinCommunityParamsModel
// } from "@interfaces/models/communities";

class CommunitiesServices {

  getCommunities = (requestType: string, page: number, limit: number, userId?: string, textSearch?: string) => async (dispatch: any) => {
    try {

      let url = `getCommunities?requestType=${requestType}&page=${page}&limit=${limit}`;

      if (userId) {
        url += `&userId=${userId}`;
      }

      if (textSearch) {
        url += `&textSearch=${textSearch}`;
      }

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

  getCommunitiesChatList = (page: number, limit: number, userId: string, textSearch?: string) => async (dispatch: any) => {
    try {

      let url = `getCommunitiesChatList?page=${page}&limit=${limit}&userId=${userId}`;

      if (textSearch) {
        url += `&textSearch=${textSearch}`;
      }

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

  // joinCommunity = (params: IJoinCommunityParamsModel) => async (dispatch: any) => {
  //   try {
  //     const response = await axiosClient.post('api/joinCommunity', params);

  //     const responseData = response?.data;

  //     if (responseData?.statusCode !== 200) {
  //       throw responseData;
  //     }

  //     return response;

  //   } catch (error) {
  //     handleRESTServerInteractionError(dispatch, error);
  //   }
  // }

  updateCommunityDetails = (params: ICommunityEditorDataModel) => async (dispatch: any) => {
    try {
      const response = await axiosClient.post('updateCommunity', params);

      const responseData = response?.data;

      if (responseData?.statusCode !== 200) {
        throw responseData;
      }

      return response;

    } catch (error) {
      handleRESTServerInteractionError(dispatch, error);
    }
  }

  getCommunityMembers = (communityId: string) => async (dispatch: any) => {
    try {

      const response = await axiosClient.get(`getCommunityMembers?communityId=${communityId}`);
      const responseData = response?.data;

      if (responseData?.statusCode !== 200) {
        throw responseData;
      }

      return response;

    } catch (error) {
      handleRESTServerInteractionError(dispatch, error, true);
    }
  };

  getCommunityJoiningRequests = (communityId: string) => async (dispatch: any) => {
    try {

      const response = await axiosClient.get(`getCommunityJoiningRequests?communityId=${communityId}`);
      const responseData = response?.data;

      if (responseData?.statusCode !== 200) {
        throw responseData;
      }

      return response;

    } catch (error) {
      handleRESTServerInteractionError(dispatch, error, true);
    }
  };

  handleCommunityJoiningRequests = (params: IHandleCommunityJoiningRequestParamsModel) => async (dispatch: any) => {
    try {
      const response = await axiosClient.post('handleCommunityJoinRequest', params);

      const responseData = response?.data;

      if (responseData?.statusCode !== 200) {
        throw responseData;
      }

      return response;

    } catch (error) {
      handleRESTServerInteractionError(dispatch, error);
    }
  }

}

export const communityServices = new CommunitiesServices();