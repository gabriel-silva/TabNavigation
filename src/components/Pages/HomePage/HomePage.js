import React, {Component} from "react";
import {Text} from "react-native";
import {Body, Button, Container, Content, Header, Title} from "native-base";

export default class HomePage extends Component {

    static navigationOptions = ({navigation}) => ({
        header: (
            <Header>
                <Body>
                    <Title>Início</Title>
                </Body>
            </Header>
        )
    });

    render() {
        return (
            <Container>
                <Content padder>
                    <Button full rounded primary
                            style={{marginTop: 10}}
                            onPress={() => this.props.navigation.navigate("ProductDetail")}>
                        <Text>Produto</Text>
                    </Button>
                </Content>
            </Container>
        );
    }
}