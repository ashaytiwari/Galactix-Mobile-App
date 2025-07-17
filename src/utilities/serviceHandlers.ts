import { appPopupAction } from "@store/slices/ui/appPopup";

export function handleRESTServerInteractionError(dispatch: any, error: any, ineradicableToast?: boolean) {

  console.log(error, 'handleRESTServerInteractionError error');

  let errorMessage = error.message;

  if (error.statusCode === 422) {
    const firstErrorMessageItem = error.data[0];
    errorMessage = `${firstErrorMessageItem?.path}-${firstErrorMessageItem?.msg}`;
  }

  dispatch(appPopupAction.updateAppPopupState({
    title: 'Alert',
    message: errorMessage,
    open: true,
    footerControls: [
      { text: 'Ok', onPress: () => dispatch(appPopupAction.close()) }
    ]
  }));

}