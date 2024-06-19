import React from 'react';
import {StyleSheet, TextInput} from 'react-native';
const CustomInputField = props => {
  return (
    <TextInput
      ref={props.inputRef}
      style={[styles.inputField, props.inputFieldStyle]}
      placeholder={props.placeholderText}
      keyboardType={props.keyboardType}
      onChangeText={props.onChangeText}
      onSubmitEditing={props.onSubmitEditing}
      returnKeyType={props.returnKeyType}
      value={props.value}
      readOnly={props.readOnly ? props.readOnly : false}
      multiline={props.multiline ? props.multiline : false}
    />
  );
};

const styles = StyleSheet.create({
  inputField: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 8,
    marginBottom: 8,
    width: '100%',
  },
});

export default CustomInputField;
