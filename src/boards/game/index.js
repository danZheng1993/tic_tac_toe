import React from 'react';
import {View, Text, Alert} from 'react-native';
import {connect} from 'react-redux';

import {Button} from '../../component/button';
import {GameBoard} from './component';

import {startGame, endGame, updateUserInput} from '../../redux/actions';

const MainScreen = ({
  startGame,
  endGame,
  updateUserInput,
  started,
  winner,
  finished,
  inputType,
}) => {
  const handleButtonPress = () => {
    if (started) {
      endGame();
    } else {
      Alert.alert('Starting the game', 'Please select your marker', [
        {
          text: 'X',
          onPress: () => {
            updateUserInput('X');
            startGame();
          },
        },
        {
          text: 'O',
          onPress: () => {
            updateUserInput('O');
            startGame();
          },
        },
      ]);
    }
  };
  const renderWinner = () => {
    if (finished) {
      if (winner) {
        const text = winner === inputType ? 'You won!' : 'You lost!';
        return <Text style={styles.title}>{text}</Text>;
      } else {
        return <Text style={styles.title}>Draw!</Text>;
      }
    }
    if (started) {
      return <Text style={styles.title}>Game has started</Text>;
    }
    return <Text style={styles.title}>Press button to start!</Text>;
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
  title: {
    marginTop: 32,
    fontSize: 32,
    textAlign: 'center',
  },
};

const mapStateToProps = ({tic}) => ({...tic});

export default connect(
  mapStateToProps,
  {startGame, endGame, updateUserInput},
)(MainScreen);
