import subtract from 'lodash/subtract';
import { log } from './foo';

function sum(a: number, b: number) {
  return a + b;
}

function sub(x: number, y: number) {
  return subtract(x, y);
}

function multi(x: number, y: number) {
  log(String(x));
  return x * y;
}

function math1() {
  console.log('math1');
}
export { sum, sub, multi, math1 };
