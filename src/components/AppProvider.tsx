import { NavigationContainer } from "@react-navigation/native";

import { IChildrenProps } from "@interfaces/uiInterfaces/generic";

import ReactQueryClientProvider from "./ReactQueryClientProvider";
import AppStatusBar from "./AppStatusBar";

const AppProvider: React.FC<IChildrenProps> = (props) => {

  return (
    <ReactQueryClientProvider>
      <AppStatusBar>
        <NavigationContainer>
          {props.children}
        </NavigationContainer>
      </AppStatusBar>
    </ReactQueryClientProvider>
  );
};

export default AppProvider;