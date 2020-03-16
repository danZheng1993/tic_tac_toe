import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';

export const Button = ({title, onPress}) => (
  <TouchableOpacity onPress={onPress}>
    <View style={styles.wrapper}>
      <Text style={styles.title}>{title}</Text>
    </View>
  </TouchableOpacity>
);

const styles = {
  wrapper: {
    paddingHorizontal: 16,
    paddingVertical: 8,
    backgroundColor: 'rgb(132, 193, 226)',
    minWidth: 200,
    height: 64,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 16,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    color: 'white',
  },
};
