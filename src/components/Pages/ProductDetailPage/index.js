import {createStackNavigator} from "react-navigation";

import ProductDetailPage from "./ProductDetailPage";
import RegisterVerifyCpfCnpjPage from "../RegisterVerifyCpfCnpjPage";

export default createStackNavigator(
    {
        ProductDetailPage: {screen: ProductDetailPage},
        RegisterVerifyCpfCnpjPage: {
            screen: RegisterVerifyCpfCnpjPage,
            navigationOptions: {
                header: null
            }
        },
        initialRouteName: "ProductDetailPage",
    },
    {
        defaultNavigationOptions: {
            gesturesEnabled: false
        }
    }
);