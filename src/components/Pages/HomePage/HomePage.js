import React, {Component} from "react";
import {Text, Alert} from "react-native";
import {Body, Button, Container, Content, Header, Icon, Left, Title, Right} from "native-base";

export default class HomePage extends Component {

    static navigationOptions = ({navigation}) => ({
        header: (
            <Header>
                <Left>
                    <Button
                        transparent
                        onPress={() => navigation.state.params.logoff()}>
                        <Icon name="exit"/>
                    </Button>
                </Left>
                <Body>
                    <Title>Início</Title>
                </Body>
                <Right/>
            </Header>
        )
    });

    logoff = () => {
        Alert.alert(
            "Atenção",
            "Deseja realmente sair?",
            [
                {text: "Sim", onPress: () => this.props.navigation.pop()},
                {text: 'Não', onPress: () => console.log('OK Pressed')},
            ],
            {cancelable: false},
        );
    };

    componentDidMount() {
        this.props.navigation.setParams({
            logoff: this.logoff
        });
    }

    render() {
        return (
            <Container>
                <Content padder>
                    <Button full rounded primary
                            style={{marginTop: 10}}
                            onPress={() => this.props.navigation.navigate("ProductDetailPage")}>
                        <Text>Produto</Text>
                    </Button>
                </Content>
            </Container>
        );
    }
}