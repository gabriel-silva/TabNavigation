import React, {Component} from "react";
import {Text} from "react-native";
import {Body, Button, Container, Content, Header, Title} from "native-base";

export default class LoginPage extends Component {

    render() {
        return (
            <Container>
                <Content padder>
                    <Button full rounded primary
                            style={{marginTop: 100}}
                            onPress={() => this.props.navigation.navigate("HomePage")}>
                        <Text>HomePage</Text>
                    </Button>
                </Content>
            </Container>
        );
    }
}