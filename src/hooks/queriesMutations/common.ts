import { useMutation } from "@tanstack/react-query";

import { useAppDispatch } from "@hooks/redux";

import { appPopupAction } from "@store/slices/ui/appPopup";

import { commonServices } from "@services/ common";

export function useFileUpload() {

  const dispatch = useAppDispatch();

  return useMutation({
    mutationFn: (params: any) => dispatch(commonServices.fileUpload(params.uri, params.fileName, params.fileType)),
    onSuccess: (response: any) => {

      const responseData = response?.data;

      if (responseData?.statusCode !== 200) {
        dispatch(appPopupAction.updateAppPopupState({
          title: 'Success',
          message: responseData.message,
          open: true
        }));
      }

    }
  });

}