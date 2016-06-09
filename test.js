import test from 'ava';
import f from './index.js';

test('f(1)', t => t.deepEqual(f(1), [2, 3, 4]));
test('f(12)', t => t.deepEqual(f(12), [14, 15, 16]));
test('f(25)', t => t.deepEqual(f(25), [26, 27, 28]));
test('f(77)', t => t.deepEqual(f(77), [78, 78, 80]));