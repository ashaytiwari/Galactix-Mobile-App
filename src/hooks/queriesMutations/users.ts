import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";

import { useAppDispatch } from "@hooks/redux";

import queryKeys from "@constants/queryKeys";

import { usersServices } from "@services/users";

import { appPopupAction } from "@store/slices/ui/appPopup";

export function useGetUserProfile(userId: string) {

  const dispatch = useAppDispatch();

  return useQuery({
    queryKey: [queryKeys.userProfile, userId],
    queryFn: () => dispatch(usersServices.getUserProfile())
  });

}

export function useClaimDailyReward() {

  const dispatch = useAppDispatch();
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: () => dispatch(usersServices.claimDailyReward()),
    onSuccess: (response: any) => {

      const responseData = response?.data;

      if (responseData?.statusCode === 200) {
        queryClient.invalidateQueries({ queryKey: [queryKeys.userProfile] });
      }

    }
  });
}