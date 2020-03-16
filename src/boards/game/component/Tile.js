import React from 'react';
import {View, Text, TouchableHighlight} from 'react-native';

const styles = {
  wrapper: {
    width: 100,
    height: 100,
    borderStyle: 'solid',
    borderColor: '#323232',
    borderWidth: 0.3,
    alignItems: 'center',
    justifyContent: 'center',
  },
  tileStatus: {
    fontSize: 32,
  },
};

export const Tile = ({started, status, onPress}) => {
  return (
    <TouchableHighlight
      disabled={!started || (status === 'X' || status === 'O')}
      onPress={onPress}>
      <View style={styles.wrapper}>
        <Text style={styles.tileStatus}>{status || ''}</Text>
      </View>
    </TouchableHighlight>
  );
};
