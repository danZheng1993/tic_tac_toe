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
    <Text style={styles.against}>
      {detail.cpu === 'smart' ? 'Smart Mode' : 'Random Mode'}
    </Text>
    <Text style={styles.time}>
      {moment(detail.time).format('MMM Do YYYY, h:mm:ss a')}
    </Text>
  </View>
);

const styles = {
  wrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    borderBottomWidth: 0.3,
    borderStyle: 'solid',
    borderColor: '#c3c3c3',
    paddingVertical: 8,
  },
  status: {
    fontSize: 16,
    width: 80,
  },
  against: {
    fontSize: 12,
    width: 100,
  },
  time: {
    flex: 1,
    fontSize: 12,
    textAlign: 'right',
  },
};
