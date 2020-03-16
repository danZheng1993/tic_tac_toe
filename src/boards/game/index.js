import React from 'react';
import {View, Text, Alert, Picker} from 'react-native';
import {connect} from 'react-redux';
import RNPickerSelect from 'react-native-picker-select';

import {Button} from '../../component/button';
import {GameBoard} from './component';

import {startGame, updateUserInput, changeAIType} from '../../redux/actions';

const MainScreen = ({
  startGame,
  updateUserInput,
  changeAIType,
  started,
  winner,
  finished,
  inputType,
  aiType,
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
      <View style={styles.header}>
        {renderWinner()}
        <Text style={styles.modeSelect}>Please select CPU mode</Text>
        <View style={styles.pickerWrapper}>
          <RNPickerSelect
            disabled={started}
            value={aiType}
            style={styles.picker}
            onValueChange={value => changeAIType(value)}
            items={[
              {label: 'Random', value: 'random'},
              {label: 'Smart', value: 'smart'},
            ]}
          />
        </View>
      </View>
      <View style={styles.content}>
        <GameBoard />
        {!started && <Button title="Start Game" onPress={handleButtonPress} />}
      </View>
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
  header: {
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'flex-start',
    height: 150,
  },
  content: {
    flex: 1,
    justifyContent: 'space-between',
  },
  title: {
    marginTop: 32,
    fontSize: 32,
    textAlign: 'center',
  },
  modeSelect: {
    fontSize: 16,
    paddingTop: 16,
    paddingBottom: 8,
  },
  picker: {
    fontSize: 16,
    paddingVertical: 12,
    paddingHorizontal: 10,
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 4,
    color: 'black',
    paddingRight: 30,
  },
};

const mapStateToProps = ({tic}) => ({...tic});

export default connect(
  mapStateToProps,
  {startGame, updateUserInput, changeAIType},
)(MainScreen);
