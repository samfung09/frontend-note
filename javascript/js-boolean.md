## 把其他类型值转换为 Boolean 类型
+ 只有 ==0, NaN, '', null , undefined== 五个之转换为false，其余都转换为true。（没有任何特殊情况）

>**转换为布尔值的几种方式**
```javascript
// Boolean()转换
Boolean(0); // false
Boolean(''); // false
Boolean(' '); // true
Boolean(null); // false
Boolean(undefined); // false
Boolean(Symbol()); // true
Boolean([]); // true
Boolean({}); // true
Boolean(Math); // true
Boolean(new Date()); // true

// ! 取反（先转布尔，再取反）
// !! 取反再取反（与Boolean()无异）
!0; // true
!!0; // false
!''; // true
!!''; // false
!' '; // false
!!' '; // true
!null; // true
!!null; // false
!undefined; // true
!!undefined; // false
![]; // false
!![]; // true
!{}; // false
!!{}; // true

// 条件判断
let s = '' ? 'aa' : 'bb';
console.log(s); // 'bb'
if(1){ console.log('hello'); } // 'hello'
if('aa' - 1){ console.log('hello'); } // 没输出
```