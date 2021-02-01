import SET_TOGGLE from './types';

export const setToggle = (isActive, className) => dispatch => {
  dispatch({
    type: SET_TOGGLE,
    payload: { isActive, className }
  });
};
