import { SET_TOGGLE } from '../actions/types';

const initalState = [];

// eslint-disable-next-line import/no-anonymous-default-export
export default function (state = initalState, action) {
  const { type, payload } = action;

  switch (type) {
    case SET_TOGGLE:
      return [...state, payload];
    default:
      return state;
  }
}
