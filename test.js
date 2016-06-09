import test from 'ava';
import f from './index.js';

test('f(1)', t => t.deepEqual(f(1), [2, 3, 4]));
test('f(4)', t => t.deepEqual(f(4), [6, 6, 8]));
test('f(43)', t => t.deepEqual(f(43), [44, 45, 44]));
test('f(123)', t => t.deepEqual(f(123), [124, 126, 124]));
test('f(420)', t => t.deepEqual(f(420), [422, 423, 424]));
