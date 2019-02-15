import React, { Component } from 'react';
import { Image } from 'react-native';
import { Container, Header, Content, Card, CardItem, Thumbnail, Text, Button, Icon, Left, Body } from 'native-base';
import { material } from 'react-native-typography'
export default class CardShowcaseExample extends Component {

  render() {
    return (
      <Container>
        <Content>
          <Card>
            <CardItem>
              <Left>
                <Body>
                  <Text style={material.title}>Clothes</Text>
                </Body>
              </Left>
            </CardItem>
            <CardItem cardBody>
                <Image source={{uri: 'http://cdn.24.co.za/files/Cms/General/d/7555/f81f37b8f1cf44c49041104ba2ee7e8b.jpg'}} style={{height: 200, width: null,flex:1}}/>
            </CardItem>
          </Card>

          <Card>
            <CardItem>
              <Left>
                <Body>
                  <Text style={material.title}>Electronics</Text>
                </Body>
              </Left>
            </CardItem>
            <CardItem cardBody>
                <Image source={{uri: 'http://maggielectronics.co.uk/wp-content/uploads/2016/04/Repairing.jpg'}} style={{height: 200, width: null,flex:1}}/>
            </CardItem>
          </Card>

          <Card>
            <CardItem>
              <Left>
                <Body>
                  <Text style={material.title}>Groceries</Text>
                </Body>
              </Left>
            </CardItem>
            <CardItem cardBody>
                <Image source={{uri: 'https://previews.123rf.com/images/monticello/monticello1404/monticello140400008/27141804-wicker-basket-with-groceries-isolated-on-white-background.jpg'}} style={{height: 200, width: null,flex:1}}/>
            </CardItem>
          </Card>
        </Content>
      </Container>
    );
  }
}