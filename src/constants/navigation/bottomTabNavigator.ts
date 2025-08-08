import screenNames from "@constants/screenNames";
import { IBottomTabScreenConfig } from "@interfaces/uiInterfaces/navigation";

import Communities from "@screens/communities/Communities";
import DashboardHome from "@screens/dashboardHome/DashboardHome";
import Notifications from "@screens/notifications/Notifications";
import ProfileScreen from "@screens/profileScreen/ProfileScreen";
import Wallet from "@screens/wallet/Wallet";

const bottomTabNavigatorConfig: Array<IBottomTabScreenConfig> = [
  {
    tabName: screenNames.DASHBOARD_HOME,
    component: DashboardHome,
    label: 'Home',
    outlineIconName: 'home-outline',
    solidIconName: 'home'
  },
  {
    tabName: screenNames.COMMUNITIES,
    component: Communities,
    label: 'Communities',
    outlineIconName: 'people-outline',
    solidIconName: 'people-sharp'
  },
  {
    tabName: screenNames.WALLET,
    component: Wallet,
    label: 'Wallet',
    outlineIconName: 'wallet-outline',
    solidIconName: 'wallet'
  },
  {
    tabName: screenNames.NOTIFICATIONS,
    component: Notifications,
    label: 'Notification',
    outlineIconName: 'notifications-outline',
    solidIconName: 'notifications'
  },
  {
    tabName: screenNames.PROFILE,
    component: ProfileScreen,
    label: 'Profile',
    outlineIconName: 'person-outline',
    solidIconName: 'person'
  }
];

export default bottomTabNavigatorConfig;