/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component, useState, useRef, useEffect} from 'react';
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

const usePrevious = value => {
  const ref = useRef();
  useEffect(() => {
    ref.current = value;
  })
  return ref.current;
}

export default App = () => {
  const [count, setCount] = useState(0);
  const [modalVisible, setModalVisible] = useState(false);
  const [modalTextValue, setModalTextValue] = useState(null);
  const prevCount = usePrevious(count);

  return (
    <View>
<Text>I am playing with hook. You clicked {count} times. Previous count: {prevCount}</Text>
      <TouchableOpacity onPress={() => setCount(count + 1)}>
        <Text>Click Me</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => setModalVisible(true)}>
        <Text>Show Modal</Text>
      </TouchableOpacity>
      {
        renderModal(modalVisible, setModalVisible, modalTextValue, setModalTextValue)
      }
      <Text>You typed {modalTextValue}</Text>
    </View>
  )
}
const renderModal = (modalVisible, setModalVisible, modalTextValue, setModalTextValue) => (
        <RNModal show={modalVisible} onClose={() => setModalVisible(false)}>
          <Container>
            <Text>Modal Content</Text>
            <StyledTextInput
            // maxLength={5}
            editable
            placeholder="Enter Text Here"
            textAlignVertical="center"
            onChangeText={text => setModalTextValue(text)}
            value={modalTextValue}
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
)
