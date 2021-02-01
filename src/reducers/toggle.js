import { REMOVE_TOGGLE, SET_TOGGLE } from '../actions/types';

const initalState = [];

// eslint-disable-next-line import/no-anonymous-default-export
export default function (state = initalState, action) {
  const { type, payload } = action;

  switch (type) {
    case SET_TOGGLE:
      return [
        ...state,
        payload.isActive
          ? (payload.className = 'active')
          : (payload.className = 'toggle')
      ];
    case REMOVE_TOGGLE:
      return state.filter(item => item.className === 'active');
    default:
      return state;
  }
}
