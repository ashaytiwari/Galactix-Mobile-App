import { useQuery } from "@tanstack/react-query";

import { useAppDispatch } from "@hooks/redux";

import queryKeys from "@constants/queryKeys";

import { usersServices } from "@services/users";

export function useGetUserProfile(userId: string) {

  const dispatch = useAppDispatch();

  return useQuery({
    queryKey: [queryKeys.userProfile, userId],
    queryFn: () => dispatch(usersServices.getUserProfile())
  });

}