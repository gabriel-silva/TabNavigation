import {createStackNavigator} from "react-navigation";

import HomePage from "./HomePage";
import ProductDetail from "../ProductDetail/ProductDetail";

export default createStackNavigator(
    {
        HomePage: {screen: HomePage},
        ProductDetail: {screen: ProductDetail},
        initialRouteName: "HomePage",
    },
    {
        defaultNavigationOptions: {
            gesturesEnabled: false
        }
    }
);