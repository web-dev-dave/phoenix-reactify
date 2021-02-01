import { REMOVE_TOGGLE, SET_TOGGLE } from './types';

export const setToggle = (isActive, className) => dispatch => {
  dispatch({
    type: SET_TOGGLE,
    payload: { isActive, className }
  });
};

export const removeToggle = (isActive, className) => dispatch => {
  dispatch({
    type: REMOVE_TOGGLE,
    payload: { isActive, className }
  });
};
