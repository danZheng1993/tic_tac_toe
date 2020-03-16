import React from 'react';
import {View, Text} from 'react-native';
import {connect} from 'react-redux';
import moment from 'moment';

import {Button} from '../../component/button';
import {GameBoard} from './component';

import {startGame, endGame} from '../../redux/actions';

const MainScreen = ({
  startGame,
  endGame,
  started,
  winner,
  finished,
  inputType,
}) => {
  const handleButtonPress = () => {
    if (started) {
      endGame();
    } else {
      startGame();
    }
  };
  const renderWinner = () => {
    if (finished) {
      if (winner) {
        const text = winner === inputType ? 'You won!' : 'You lost!';
        return <Text>{text}</Text>;
      } else {
        return <Text>Draw!</Text>;
      }
    }
    if (started) {
      return <Text>Game has started</Text>;
    }
    return <Text>Press button to start!</Text>;
  };
  return (
    <View style={styles.wrapper}>
      {renderWinner()}
      <GameBoard />
      <Button
        title={started ? 'End Game' : 'Start Game'}
        onPress={handleButtonPress}
      />
    </View>
  );
};

const styles = {
  wrapper: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 32,
    paddingHorizontal: 16,
  },
};

const mapStateToProps = ({tic}) => ({...tic});

export default connect(
  mapStateToProps,
  {startGame, endGame},
)(MainScreen);
