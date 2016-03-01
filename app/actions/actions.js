import { MOVE_FORWARD, MOVE_BACKWARD } from '../types/types';

export function next() {
  return (dispatch, getState) => {
    const total = getState().slides.size;
    dispatch({
      type: MOVE_FORWARD,
      max: total
    });
  }
}

export function back() {
  return {
    type: MOVE_BACKWARD
  }
}
