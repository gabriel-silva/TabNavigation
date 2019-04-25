import {createStackNavigator} from "react-navigation";

import ProductDetailPage from "./ProductDetailPage";

export default createStackNavigator(
    {
        ProductDetailPage: {screen: ProductDetailPage},
        initialRouteName: "ProductDetailPage",
    },
    {
        defaultNavigationOptions: {
            gesturesEnabled: false
        }
    }
);