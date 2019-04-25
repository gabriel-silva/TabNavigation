import React, {Component} from "react";
import {Text} from "react-native";
import {Body, Container, Button, Content, Header, Title, Left, Icon, Right} from "native-base";

export default class RegisterAddressPage extends Component {

    static navigationOptions = ({navigation}) => ({
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
                    <Title>Cadastro de Endereços</Title>
                </Body>
                <Right />
            </Header>
        )
    });

    render() {
        return (
            <Container>
                <Content padder>
                    <Text>Adicionar Endereço</Text>
                </Content>
            </Container>
        );
    }
}