import Apple from './component1.js'
console.log('Apple', Apple);

import {Banana as BAN, Orange} from './component2.js';
console.log('Banana as BAN', BAN);
console.log('Orange', Orange);

import * as fruits from './component3.js';
console.log('import * as fruits', fruits.Banana);
console.log('import * as fruits', fruits.Orange);
