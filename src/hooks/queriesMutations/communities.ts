import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";

import { useAppDispatch } from "@hooks/redux";

import { appPopupAction } from "@store/slices/ui/appPopup";

import queryKeys from "@constants/queryKeys";
import { ICommunityEditorDataModel, IHandleCommunityJoiningRequestParamsModel, IJoinCommunityParamsModel } from "@interfaces/models/communities";

import { communityServices } from "@services/communities";

export function useGetCommunities() {

  const dispatch = useAppDispatch();
  const queryClient = useQueryClient();

  async function fetchCommunities(requestType: string, page: number, limit: number, userId?: string, textSearch?: string) {

    const data = await queryClient.fetchQuery({
      queryKey: [queryKeys.communities, requestType, page, limit, userId, textSearch],
      staleTime: 0, // always call the api on execution
      queryFn: () => dispatch(communityServices.getCommunities(requestType, page, limit, userId, textSearch))
    });

    return data;
  }

  return fetchCommunities;

}

export function useGetCommunitiesChatList() {

  const dispatch = useAppDispatch();
  const queryClient = useQueryClient();

  async function fetchCommunitiesChatList(page: number, limit: number, userId: string, textSearch?: string) {

    const data = await queryClient.fetchQuery({
      queryKey: [queryKeys.communitiesChatList, page, limit, userId, textSearch],
      staleTime: 0, // always call the api on execution
      queryFn: () => dispatch(communityServices.getCommunitiesChatList(page, limit, userId, textSearch))
    });

    return data;
  }

  return fetchCommunitiesChatList;

}

export function useJoinCommunity() {

  const dispatch = useAppDispatch();
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (params: IJoinCommunityParamsModel) => dispatch(communityServices.joinCommunity(params)),
    onSuccess: (response: any) => {

      queryClient.invalidateQueries({ queryKey: [queryKeys.communities] });
      queryClient.invalidateQueries({ queryKey: [queryKeys.communitiesChatList] });
      queryClient.invalidateQueries({ queryKey: [queryKeys.userProfile] });

    }
  });

}

export function useUpdateCommunityDetails() {

  const dispatch = useAppDispatch();
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (params: ICommunityEditorDataModel) => dispatch(communityServices.updateCommunityDetails(params)),
    onSuccess: (response: any) => {
      queryClient.invalidateQueries({ queryKey: [queryKeys.communities] });
      queryClient.invalidateQueries({ queryKey: [queryKeys.userProfile] });
    }
  });

}

export function useGetCommunityMembers(communityId: string) {

  const dispatch = useAppDispatch();

  return useQuery({
    queryKey: [queryKeys.communityMembers, communityId],
    queryFn: () => dispatch(communityServices.getCommunityMembers(communityId)),
    enabled: communityId ? true : false
  });

}

export function useGetCommunityJoiningRequests(communityId: string) {

  const dispatch = useAppDispatch();

  return useQuery({
    queryKey: [queryKeys.communityJoiningRequests, communityId],
    queryFn: () => dispatch(communityServices.getCommunityJoiningRequests(communityId)),
    enabled: communityId ? true : false
  });

}

export function useHandleCommunityJoiningRequests() {

  const dispatch = useAppDispatch();
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (params: IHandleCommunityJoiningRequestParamsModel) => dispatch(communityServices.handleCommunityJoiningRequests(params)),
    onSuccess: (response: any) => {

      queryClient.invalidateQueries({ queryKey: [queryKeys.communityJoiningRequests] });
      queryClient.invalidateQueries({ queryKey: [queryKeys.communityMembers] });
      queryClient.invalidateQueries({ queryKey: [queryKeys.communities] });

    }
  });

}