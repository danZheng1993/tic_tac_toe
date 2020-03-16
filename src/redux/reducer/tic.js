import {
  UPDATE_PANEL,
  UPDATE_USER_INPUT,
  RESET_BOARD,
  START_GAME,
  END_GAME,
} from '../actions';

import {isFinished, getWinner} from '../../utils';

const initialState = {
  started: false,
  inputType: 'X',
  tics: new Array(9),
  finished: false,
  winner: null,
  scores: [],
};

export default (state = initialState, action) => {
  switch (action.type) {
    case START_GAME:
      return {
        ...state,
        started: true,
        finished: false,
        tics: new Array(9),
        winner: null,
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
      const remainingTics = [];
      for (let i = 0; i < newTics.length; i += 1) {
        if (!newTics[i]) {
          remainingTics.push(i);
        }
      }
      const pos = Math.floor(Math.random() * remainingTics.length);
      newTics[remainingTics[pos]] = state.inputType === 'X' ? 'O' : 'X';
      const winner = getWinner(newTics);
      const finished = winner ? true : isFinished(newTics);
      const score = winner
        ? winner === state.inputType
          ? {status: 'won', time: new Date()}
          : {status: 'lose', time: new Date()}
        : {status: 'draw', time: new Date()};
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
