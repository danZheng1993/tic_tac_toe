import uuid from 'react-native-uuid';

import {
  UPDATE_PANEL,
  UPDATE_USER_INPUT,
  RESET_BOARD,
  START_GAME,
  END_GAME,
  CHANGE_AI_TYPE,
} from '../actions';

import {isFinished, getWinner} from '../../utils';
import {minimax} from '../../ai';

const initialState = {
  started: false,
  inputType: 'X',
  tics: [0, 1, 2, 3, 4, 5, 6, 7, 8],
  finished: false,
  winner: null,
  scores: [],
  aiType: 'random',
};

export default (state = initialState, action) => {
  switch (action.type) {
    case START_GAME:
      return {
        ...state,
        started: true,
        finished: false,
        tics: [0, 1, 2, 3, 4, 5, 6, 7, 8],
        winner: null,
      };
    case CHANGE_AI_TYPE:
      return {
        ...state,
        aiType: action.payload,
      };
    case END_GAME:
      return {
        ...state,
        finished: true,
        started: false,
        winner: null,
      };
    case UPDATE_USER_INPUT:
      return {
        ...state,
        inputType: action.payload,
      };
    case UPDATE_PANEL:
      const newTics = [...state.tics];
      newTics[action.payload] = state.inputType;
      if (state.aiType === 'random') {
        const remainingTics = [];
        for (let i = 0; i < newTics.length; i += 1) {
          if (newTics[i] !== 'X' && newTics[i] !== 'O') {
            remainingTics.push(i);
          }
        }
        const pos = Math.floor(Math.random() * remainingTics.length);
        newTics[remainingTics[pos]] = state.inputType === 'X' ? 'O' : 'X';
      } else {
        const result = minimax(newTics, state.inputType === 'X' ? 'O' : 'X');
        newTics[result.index] = state.inputType === 'X' ? 'O' : 'X';
      }
      const winner = getWinner(newTics);
      const finished = winner ? true : isFinished(newTics);
      const score = {
        id: uuid.v4(),
        status: winner ? (winner === state.inputType ? 'won' : 'lost') : 'draw',
        cpu: state.aiType,
        time: new Date(),
      };
      return {
        ...state,
        tics: newTics,
        winner,
        finished,
        started: finished ? false : true,
        scores: finished ? [...state.scores, score] : state.scores,
      };
    case RESET_BOARD:
      return initialState;
    default:
      return state;
  }
};
