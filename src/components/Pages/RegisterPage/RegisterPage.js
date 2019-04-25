import React, {Component} from "react";
import {View, Text} from "react-native";
import {Header, Title, Body, Left, Right, Icon, Button} from "native-base";

export default class RegisterPage extends Component {

    static navigationOptions = ({navigation}) => {
        console.log("navigation: ", navigation);
        return {
            header: (
                <Header>
                    <Left>
                        <Button
                            transparent
                            onPress={() => navigation.pop()}>
                            <Icon name="arrow-round-back"/>
                        </Button>
                    </Left>
                    <Body>
                        <Title>Cadastrar Cliente</Title>
                    </Body>
                    <Right/>
                </Header>
            )
        }
    };

    render() {
        return (
            <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
                <Text>Cadastrar Cliente</Text>
            </View>
        );
    }
}