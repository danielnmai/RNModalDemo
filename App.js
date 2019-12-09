/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import styled from 'styled-components';
import RNModal from './RNModal';
import Container from './Container';
import ButtonGroup from './ButtonGroup';
import Hook from './Hook';

const StyledTextInput = styled.TextInput`
  height: 32px;
  width: 144px;
  borderColor: gray;
  fontSize: 16px;
  borderWidth: 1px;
  paddingStart: 8px;
  paddingBottom: 2px;
  paddingTop: 2px;
`;

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showModal: false,
      textValue: '',
    };
  }
  onCloseModal = () => this.setState({showModal: false});

  onOpenModal = () => this.setState({showModal: true});

  render() {
    const {showModal, textValue} = this.state;
    return (
      <View>
        <TouchableOpacity onPress={this.onOpenModal}>
          <Text>Show Modal</Text>
        </TouchableOpacity>

        <Hook />














        {/* Modal code  */}
        <RNModal show={showModal} onClose={this.onCloseModal}>
          <Container>
            <Text>Modal Content</Text>
            <StyledTextInput
            maxLength={5}
            editable
            placeholder="Enter Text Here"
            textAlignVertical="center"
            onChangeText={text => this.setState({ textValue: text })}
            value={textValue}
          />
            <ButtonGroup
            onLeftButtonPress={this.onCloseModal}
            hideLeftButton={false}
            rightButtonText="CLOSE"
            leftButtonDisabled={true}
            onRightButtonPress={this.onCloseModal}
          />
          </Container>
        </RNModal>
      </View>
    );
  }
}

export default App;
