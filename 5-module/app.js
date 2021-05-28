// 자바스크립트 import export
import { increase, getCount} from './counter.js';

increase();
console.log(getCount());

import * as counter from './counter.js';

counter.increase();
console.log(counter.getCount());


