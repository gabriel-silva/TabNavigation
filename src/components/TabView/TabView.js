import React, {Component} from "react";
import Styles from "./Styles";
import {Text} from "react-native";
import {Button, Footer, FooterTab, Icon} from "native-base";
import {Navigation} from "../../helpers";

export default class TabView extends Component {

    render() {

        const {state} = this.props.navigation;

        return (
            <Footer>

                <FooterTab style={Styles.footerTab}>

                    <Button
                        transparent
                        onPress={() => Navigation.navigate("HomePage", {})}>
                        <Icon style={[Styles.icon, {color: state.index === 0 ? "blue" : "gray"}]} name="home"/>
                        <Text style={[Styles.text, {color: state.index === 0 ? "blue" : "gray"}]}>Início</Text>
                    </Button>

                    <Button
                        transparent
                        onPress={() => Navigation.navigate("RegisterVerifyCpfCnpj", {})}>
                        <Icon style={[Styles.icon, {color: state.index === 1 ? "blue" : "gray"}]} name="person-add"/>
                        <Text style={[Styles.text, {color: state.index === 1 ? "blue" : "gray"}]}>Cadastrar Cliente</Text>
                    </Button>

                </FooterTab>

            </Footer>
        );
    }
}