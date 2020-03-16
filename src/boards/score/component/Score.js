import React from 'react';
import {View, Text} from 'react-native';
import moment from 'moment';

const getStatusText = status => {
  switch (status) {
    case 'won':
      return 'Win';
    case 'lost':
      return 'Lost';
    default:
      return 'Draw';
  }
};

export default ({detail}) => (
  <View style={styles.wrapper}>
    <Text style={styles.status}>{getStatusText(detail.status)}</Text>
    <Text style={styles.time}>
      {moment(detail.time).format('MMM Do YYYY, h:mm:ss a')}
    </Text>
  </View>
);

const styles = {
  wrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderBottomWidth: 0.3,
    borderStyle: 'solid',
    borderColor: '#c3c3c3',
    paddingVertical: 8,
  },
  status: {
    fontSize: 16,
  },
  time: {
    fontSize: 12,
  },
};
