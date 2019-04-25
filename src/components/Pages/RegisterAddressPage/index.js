import {createStackNavigator} from "react-navigation";

import RegisterAddressPage from "./RegisterAddressPage";

export default createStackNavigator(
    {
        RegisterAddressPage: {screen: RegisterAddressPage},
        initialRouteName: "RegisterAddressPage",
    },
    {
        defaultNavigationOptions: {
            gesturesEnabled: false
        }
    }
);