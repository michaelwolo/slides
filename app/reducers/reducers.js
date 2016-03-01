import { List } from 'immutable';
import { MOVE_FORWARD, MOVE_BACKWARD } from '../types/types';

export function slides(state = List([]), action) {
  switch (action.type) {
    default:
      return state;
  }
}

export function current(state = 0, action) {
  switch (action.type) {
    case MOVE_BACKWARD:
      return state - (state > 0 ? 1 : 0);
    case MOVE_FORWARD:
      return state + (state < action.max - 1 ? 1 : 0)
    default:
      return state;
  }
}
