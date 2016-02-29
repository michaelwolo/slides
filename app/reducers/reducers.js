import { List, Map } from 'immutable';
import { MOVE_FORWARD, MOVE_BACKWARD } from '../types/types';

export function slides(state = List([]), action) {
  switch (action.type) {
    default:
      return state;
  }
}

export function indexes(state = Map({ current: 0, previous: null }), action) {
  const current = state.get('current');
  switch (action.type) {
    case MOVE_BACKWARD:
      return Map({
        current: current > 0 ? current - 1 : 0,
        previous: current
      });
    case MOVE_FORWARD:
      console.log(action);
      return Map({
        current: current + (current < action.max - 1 ? 1 : 0),
        previous: current
      });
    default:
      return state;
  }
}
