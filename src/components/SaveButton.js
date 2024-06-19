import React from 'react';
import {Text, StyleSheet, Pressable, ActivityIndicator} from 'react-native';
import ResourceManager from '../ResourceManager';

const SaveButton = props => {
  return (
    <Pressable
      style={[
        styles.button,
        props.style,
        {opacity: props.enable && !props.isLoading ? 1.0 : 0.5},
      ]}
      onPress={props.buttonPressed}>
      {props.isLoading ? (
        <ActivityIndicator
          size="small"
          color={ResourceManager.colors.background}></ActivityIndicator>
      ) : (
        <Text style={[styles.buttonText, props.textStyle]}>{props.text}</Text>
      )}
    </Pressable>
  );
};

const styles = StyleSheet.create({
  button: {
    width: '100%',
    height: 42,
    alignSelf: 'center',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#00324E',
  },

  buttonText: {
    color: 'white',
    fontSize: 14,
    fontWeight: '500',
  },
});

export default SaveButton;
