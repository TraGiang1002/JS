// Arrow function
var triple = x => x * 3;

// chuyển array -> object
function arrToObj(arr) {
    return arr.reduce((a, value) => {
       var Obj = a[value[0]] = value[1]
       return a
    }, {})
}

// toán tử rest trong destructuring
const { 
    a = 'default', 
    b, 
    ...rest 
} = {
    b: 'val1',
    c: 'val2',
    d: 'val3'
};

console.log(a, b, rest);

// toán tử spread
const a1 = [1, 2, 3];
const b1 = [2, 3];
const c1 = [...a1, ...b1];

console.log(c1);

// JS modules
import  {
    typeLog,
    typeWarn,
    typeError
} from './constains.js';
import * as constains from './constains.js';
import logger from './logger.js';
console.log(constains);
logger('Test...', typeWarn);

