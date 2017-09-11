import { ADD, DEL } from '../constants/counter';

export function add() {
  return { type: ADD };
}

export function del() {
  return { type: DEL };
}
