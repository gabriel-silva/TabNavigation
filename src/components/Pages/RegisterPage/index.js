import {createStackNavigator} from "react-navigation";

import RegisterPage from "./RegisterPage";
import RegisterAddressPage from "../RegisterAddressPage";

export default createStackNavigator(
    {
        RegisterPage: {screen: RegisterPage},
        RegisterAddressPage: {
            screen: RegisterAddressPage,
            navigationOptions: {
                header: null
            }
        },
        initialRouteName: "RegisterPage",
    },
    {
        defaultNavigationOptions: {
            gesturesEnabled: false
        }
    }
);