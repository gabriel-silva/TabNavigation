import {createStackNavigator} from "react-navigation";

import HomePage from "./HomePage";
import ProductDetailPage from "../ProductDetailPage";

export default createStackNavigator(
    {
        HomePage: {screen: HomePage},
        ProductDetailPage: {
            screen: ProductDetailPage,
            navigationOptions: {
                header: null
            }
        },
        initialRouteName: "HomePage",
    },
    {
        defaultNavigationOptions: {
            gesturesEnabled: false
        }
    }
);