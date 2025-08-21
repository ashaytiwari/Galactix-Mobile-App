import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";

import { useAppDispatch } from "@hooks/redux";

import queryKeys from "@constants/queryKeys";

import { IDeletePostModel, IReactToPostModel, IUpdatePostParamsModel } from "@interfaces/models/posts";

import { postsServices } from "@services/posts";

export function useGetCommunityPosts() {

  const dispatch = useAppDispatch();
  const queryClient = useQueryClient();

  async function fetchCommunityPosts(page: number, limit: number, communityId: string) {

    const data = await queryClient.fetchQuery({
      queryKey: [queryKeys.communityPosts, page, limit, communityId],
      staleTime: 0, // always call the api on execution
      queryFn: () => dispatch(postsServices.getCommunityPosts(page, limit, communityId))
    });

    return data;
  }

  return fetchCommunityPosts;

}

export function useUpdateCommunityPosts() {

  const dispatch = useAppDispatch();
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (params: IUpdatePostParamsModel) => dispatch(postsServices.updateCommunityPost(params)),
    onSuccess: (response: any) => {
      queryClient.invalidateQueries({ queryKey: [queryKeys.communityPosts] });
    }
  });

}

export function useGetPostReactions(postId: string) {

  const dispatch = useAppDispatch();

  return useQuery({
    queryKey: [queryKeys.postReactions, postId],
    queryFn: () => dispatch(postsServices.getPostReactions(postId)),
    enabled: postId ? true : false
  });

}

export function useReactToPost() {

  const dispatch = useAppDispatch();
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (params: IReactToPostModel) => dispatch(postsServices.reactToPost(params)),
    onSuccess: (response: any) => {
      queryClient.invalidateQueries({ queryKey: [queryKeys.communityPosts] });
    }
  });

}

export function useDeletePost() {

  const dispatch = useAppDispatch();
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (params: IDeletePostModel) => dispatch(postsServices.deletePost(params)),
    onSuccess: (response: any) => {
      queryClient.invalidateQueries({ queryKey: [queryKeys.communityPosts] });
    }
  });

}