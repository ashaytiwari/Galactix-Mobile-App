import { useAppDispatch } from "@hooks/redux";
import { ISigninModel } from "@interfaces/models/authentication";
import { authenticationServices } from "@services/authentication";
import { useMutation } from "@tanstack/react-query";

export function useSigninUser() {

  const dispatch = useAppDispatch();
  // const navigate = useNavigate();

  return useMutation({
    mutationFn: (params: ISigninModel) => dispatch(authenticationServices.loginUser(params)),
    onSuccess: (response: any) => {

      const responseData = response?.data;

      if (responseData?.statusCode === 200) {

        const data = responseData?.data;
        console.log(data, 'login details');

        // dispatch(userAuthActions.updateData(data));
        // dispatch(commonUIActions.updateDisplayGalactixCoinsInstructions(true));

        // showCustomToast('Notification', 'Galactic Tip!  Discover the power of Galactix Coins and make the most of your interstellar journey!', true);

        // setApplicationStorage(data);

        // navigate('/dashboard');

      }

    }
  });
}