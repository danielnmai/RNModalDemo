import styled from 'styled-components';
import {TouchableOpacity} from 'react-native';
import React from 'react';

const Container = styled.View`
  flex-direction: row;
  alignItems: center;
  justifyContent: space-between;
  marginTop: 50px;
`;

const LeftButton = styled.Text`
  color: #fb6264;
`;
const RightButtonText = styled.Text`
  color: blue;
`;

const ButtonGroup = ({
  onLeftButtonPress,
  hideLeftButton,
  leftButtonText,
  rightButtonText,
  rightButtonDisabled,
  onRightButtonPress,
}) => (
  <Container>
    <TouchableOpacity
      onPress={onLeftButtonPress}
      disabled={hideLeftButton}
      hitSlop={{
        top: 20,
        left: 20,
        bottom: 20,
        right: 20,
      }}>
      {!hideLeftButton && <LeftButton>{leftButtonText}</LeftButton>}
    </TouchableOpacity>
    <TouchableOpacity
      disabled={rightButtonDisabled}
      onPress={onRightButtonPress}
      hitSlop={{
        top: 20,
        left: 20,
        bottom: 20,
        right: 20,
      }}>
      <RightButtonText disabled={rightButtonDisabled}>
        {rightButtonText}
      </RightButtonText>
    </TouchableOpacity>
  </Container>
);

export default ButtonGroup;
