import React, {Component} from "react";
import {Text} from "react-native";
import {Body, Container, Button, Content, Header, Title, Left, Icon, Right} from "native-base";

export default class ProductDetailPage extends Component {

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
                    <Title>Produto</Title>
                </Body>
                <Right />
            </Header>
        )
    });

    render() {
        return (
            <Container>
                <Content padder>
                    <Button full rounded primary
                            style={{ marginTop: 10 }}
                            onPress={() => this.props.navigation.navigate("RegisterVerifyCpfCnpjPage")}>
                        <Text>Cadastrar Usuário</Text>
                    </Button>
                </Content>
            </Container>
        );
    }
}