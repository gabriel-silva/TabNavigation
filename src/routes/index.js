import React from "react";
import {createBottomTabNavigator, createAppContainer, createStackNavigator} from "react-navigation";
import {Root} from "native-base";
import {Navigation} from "../helpers";

/* componentes */
import TabView from "../components/TabView/TabView";

/* paginas */
import LoginPage from "../components/Pages/LoginPage/LoginPage";
import HomePage from "../components/Pages/HomePage";
import RegisterVerifyCpfCnpjPage from "../components/Pages/RegisterVerifyCpfCnpjPage";

const TabNavigator = createBottomTabNavigator(
    {
        HomePage: {screen: HomePage}
    },
    {
        initialRouteName: "HomePage",
        tabBarComponent: props => <TabView {...props} />
    }
);

/**
 * desativa tabview para as telas maiores que 0, ou seja, todas as telas após a RegisterPage
 * @param navigation
 * @returns {{tabBarVisible: boolean}}
 */
HomePage.navigationOptions = ({navigation}) => {
    let tabBarVisible = true;
    if (navigation.state.index > 0) {
        tabBarVisible = false;
    }

    return {
        tabBarVisible,
    };
};

const Home = createStackNavigator(
    {
        HomePage: {screen: TabNavigator},
        RegisterVerifyCpfCnpjPage: {screen: RegisterVerifyCpfCnpjPage}
    },
    {
        initialRouteName: "HomePage",
        headerMode: "none",
        defaultNavigationOptions: {
            gesturesEnabled: false
        }
    },
);

const StackNavigator = createStackNavigator(
    {
        LoginPage: {screen: LoginPage},
        HomePage: {screen: Home},
    },
    {
        initialRouteName: "LoginPage",
        headerMode: "none",
        defaultNavigationOptions: {
            gesturesEnabled: false
        }
    },
);

const AppContainer = createAppContainer(StackNavigator);

export default () => {
    return (
        <Root>
            <AppContainer
                ref={navigatorRef => {
                    Navigation.setTopLevelNavigator(navigatorRef);
                }}
            />
        </Root>
    );
}