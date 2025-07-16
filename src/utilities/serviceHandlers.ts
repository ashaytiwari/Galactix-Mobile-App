export function handleRESTServerInteractionError(dispatch: any, error: any, ineradicableToast?: boolean) {

  console.log(error, 'error');

  // // validation error
  // if (error.statusCode === 422) {

  //   const firstErrorMessage = error.data[0];
  //   showCustomToast(toastTitles.ERROR, `${firstErrorMessage?.path}-${firstErrorMessage?.msg}`);

  // } else if (error.statusCode === 401) {
  //   return null;
  // } else if (error.statusCode === 500) {
  //   dispatch(commonUIActions.updateDisplayServerErrorScreen(true));
  // } else {

  //   const _ineradicableToast = ineradicableToast === true ? true : false;
  //   showCustomToast(toastTitles.ERROR, error.message, _ineradicableToast);

  // }

}