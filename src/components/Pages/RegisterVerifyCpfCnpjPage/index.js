import {createStackNavigator} from "react-navigation";

import RegisterPage from "../RegisterPage";
import RegisterVerifyCpfCnpjPage from "./RegisterVerifyCpfCnpjPage";

export default createStackNavigator(
    {
        RegisterVerifyCpfCnpjPage: {screen: RegisterVerifyCpfCnpjPage},
        RegisterPage: {
            screen: RegisterPage,
            navigationOptions: {
                header: null
            }
        },
        initialRouteName: "RegisterVerifyCpfCnpjPage"
    },
    {
        defaultNavigationOptions: {
            gesturesEnabled: false
        }
    }
);