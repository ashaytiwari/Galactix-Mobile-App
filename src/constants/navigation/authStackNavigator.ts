import screenNames from "@constants/screenNames";
import { IAuthScreenConfig } from "@interfaces/uiInterfaces/navigation";

import ForgotPassword from "@screens/forgotPasswordScreen/ForgotPassword";
import HomeScreen from "@screens/homeScreen/HomeScreen";
import LoginScreen from "@screens/loginScreen/LoginScreen";
import SignupScreen from "@screens/signupScreen/SignupScreen";

const authScreenConfig: Array<IAuthScreenConfig> = [
  {
    screenName: screenNames.HOME,
    component: HomeScreen
  },
  {
    screenName: screenNames.LOGIN,
    component: LoginScreen
  },
  {
    screenName: screenNames.SIGNUP,
    component: SignupScreen
  },
  {
    screenName: screenNames.FORGOT_PASSWORD,
    component: ForgotPassword
  },
];

export default authScreenConfig;