export const UPDATE_USER_INPUT = 'UPDATE_USER_INPUT';
export const UPDATE_PANEL = 'UPDATE_PANEL';
export const RESET_BOARD = 'RESET_BOARD';
export const START_GAME = 'START_GAME';
export const END_GAME = 'END_GAME';
export const CHANGE_AI_TYPE = 'CHANGE_AI_TYPE';

export const resetBoard = () => dispatch => dispatch({type: RESET_BOARD});

export const startGame = () => dispatch => dispatch({type: START_GAME});

export const endGame = () => dispatch => dispatch({type: END_GAME});

export const changeAIType = type => dispatch =>
  dispatch({type: CHANGE_AI_TYPE, payload: type});

export const updatePanel = pos => dispatch =>
  dispatch({type: UPDATE_PANEL, payload: pos});

export const updateUserInput = inputType => dispatch =>
  dispatch({type: UPDATE_USER_INPUT, payload: inputType});
