import { ADD, DEL, ADD2 } from '../constants/counter';

export function add() {
  return { type: ADD };
}

export function del() {
  return { type: DEL };
}

export function add2() {
  return { type: ADD2 };
}
