import {createStackNavigator} from "react-navigation";

import RegisterPage from "../RegisterPage/RegisterPage";
import RegisterVerifyCpfCnpj from "./RegisterVerifyCpfCnpj";

export default createStackNavigator(
    {
        RegisterVerifyCpfCnpj: {screen: RegisterVerifyCpfCnpj},
        RegisterPage: {screen: RegisterPage},
        initialRouteName: "RegisterVerifyCpfCnpj",
    },
    {
        defaultNavigationOptions: {
            gesturesEnabled: false,
        }
    }
);