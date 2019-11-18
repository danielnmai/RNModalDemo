import React from 'react';
import {View} from 'react-native';
import Modal from 'react-native-modal';

const RNModal = ({show, children, onClose}) => (
  <View style={{flex: 1}}>
    <Modal
      style={{
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 45,
      }}
      isVisible={show}
      avoidKeyboard
      useNativeDriver
      hideModalContentWhileAnimating
      animationIn="fadeIn"
      animationOut="fadeOut"
      backdropOpacity={0.5}
      onBackdropPress={onClose}
      >
      {children}
    </Modal>
  </View>
);

export default RNModal;
