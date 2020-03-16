import React from 'react';
import {View} from 'react-native';
import {connect} from 'react-redux';

import {Tile} from './Tile';

import {updatePanel} from '../../../redux/actions';

const styles = {
  wrapper: {
    flexDirection: 'column',
    width: 300,
    height: 300,
    margin: 16,
    borderWidth: 0.3,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
};

const TicRow = ({tics, row, handlePress, started}) => {
  return (
    <View style={styles.row}>
      <Tile
        status={tics[row * 3 + 0]}
        started={started}
        onPress={() => handlePress(row * 3 + 0)}
      />
      <Tile
        status={tics[row * 3 + 1]}
        started={started}
        onPress={() => handlePress(row * 3 + 1)}
      />
      <Tile
        status={tics[row * 3 + 2]}
        started={started}
        onPress={() => handlePress(row * 3 + 2)}
      />
    </View>
  );
};

const GameBoard = ({started, tics, updatePanel}) => {
  const handlePress = pos => {
    updatePanel(pos);
  };
  return (
    <View style={styles.wrapper}>
      <TicRow tics={tics} row={0} started={started} handlePress={handlePress} />
      <TicRow tics={tics} row={1} started={started} handlePress={handlePress} />
      <TicRow tics={tics} row={2} started={started} handlePress={handlePress} />
    </View>
  );
};

const mapStateToProps = state => ({...state.tic});
const mapDispatchToProps = {updatePanel};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(GameBoard);
