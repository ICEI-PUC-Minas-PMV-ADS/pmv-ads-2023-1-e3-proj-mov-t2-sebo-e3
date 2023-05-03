import React from 'react';
import { View, TouchableOpacity, Text, StyleSheet, TouchableOpacityProps } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';


const ButtonIcon: React.FC <ButtonIconProps> = (props) => {
  const handlePress = () => {
    console.log('Button Pressed');
  };

  return (
    <TouchableOpacity style={styles.button} onPress={handlePress} {...props}>
      <Icon name="shopping-cart" size={20} color="#fff" />
      <Text style={styles.text}> {props.title || 'Button'}</Text>
    </TouchableOpacity>
  );
};

interface ButtonIconProps extends TouchableOpacityProps {
    title?: string;
  }

const styles = StyleSheet.create({
  button: {
    backgroundColor: '#005f83',
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    borderRadius: 5,
  },
  text: {
    color: '#fff',
    textAlign: 'center',
    fontWeight: 'bold',
    marginLeft: 10,
  },
});

export default ButtonIcon;
