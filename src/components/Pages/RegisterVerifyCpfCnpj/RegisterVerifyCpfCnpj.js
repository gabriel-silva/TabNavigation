import React, {Component} from "react";
import {Text} from "react-native";
import {Header, Title, Body, Left, Right, Icon, Button, Container, Content} from "native-base";

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
                        <Title>Verificação de CPF/CNPJ</Title>
                    </Body>
                    <Right/>
                </Header>
            )
        }
    };

    render() {
        return (
            <Container>
                <Content padder>
                    <Button full rounded primary
                            style={{ marginTop: 10 }}
                            onPress={() => this.props.navigation.navigate("RegisterPage")}>
                        <Text>Cadastrar Cliente</Text>
                    </Button>
                </Content>
            </Container>
        );
    }
}