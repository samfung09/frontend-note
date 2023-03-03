## Array 数组是特殊的对象
+ 我们从中括号里写入的是其属性值，它的属性名是默认生成的数字，从零开始递增，这个数字代表每一项的位置，我们称其为“索引”，==索引从零开始，连续递增，代表每一项的位置及属性名==。
+ 天生默认一个 ==length== 属性，存储该数组长度
```javascript
let ary = ['hello world', , 123, null, {name: 'Sam'}];

typeof ary // 'object'
ary.length // 5 数组长度
ary[0]  // 'hello world' 数组中第一项
ary[1]  // undefined 数组中未定义项
ary[ary.length - 1] // {...} 数组中最后一项
```
---

## push() 数组末尾添加
>**push(item1, item2, ..., itemX) 方法将一个或多个元素添加到数组的末尾，并返回该数组的新长度。**
+ 新元素将添加在数组的==末尾==。
+ 此方法==改变数组的长度==。

[MDN链接](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/push)
| 参数 | 描述 |
| --- | --- |
|item1, item2, ..., itemX|必需。要添加到数组的元素。|
|<font color=red>返回值</font>|Number。数组新长度|
```javascript
let sports = ["soccer", "baseball"];
let total = sports.push("football", "swimming");

console.log(sports); // ["soccer", "baseball", "football", "swimming"]
console.log(total); // 4
```
---

## unshift() 数组开头添加
>**unshift(item1, item2, ..., itemX) 方法将一个或多个元素添加到数组的开头，并返回该数组的新长度。**
+ 新元素将添加在数组的==开头==。
+ 此方法==改变数组的长度==。

[MDN链接](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/unshift)
| 参数 | 描述 |
| --- | --- |
|item1, item2, ..., itemX|可选。要添加到数组的元素。|
|<font color=red>返回值</font>|Number。数组新长度|
```javascript
let sports = ["soccer", "baseball"];
let total = sports.unshift("football", "swimming");

console.log(sports); // ["football", "swimming", "soccer", "baseball"]
console.log(total); // 4
```
---

## pop() 删除数组的最后一个元素
>**pop() 方法用于删除数组的==最后一个==元素并==返回删除的元素==。**
+ 此方法==改变数组的长度==。

[MDN链接](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/pop)
| 参数 | 描述 |
| --- | --- |
|<font color=red>返回值</font>|任何类型。删除的元素|
```javascript
let sports = ["soccer", "baseball", "football", "swimming"];
let item = sports.pop("football", "swimming");

console.log(sports); // ["soccer", "baseball", "football"]
console.log(item); // "swimming"
console.log(sports.length); // 3

// 数组 length-1 默认删除数组最后一项， pop()效果类似
ary.length--;
```
---

## shift() 删除数组的第一个元素
>**shift() 方法用于删除数组的==第一个==元素并==返回删除的元素==。**
+ 此方法==改变数组的长度==。

[MDN链接](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/shift)
| 参数 | 描述 |
| --- | --- |
|<font color=red>返回值</font>|任何类型。删除的元素|
```javascript
let sports = ["soccer", "baseball", "football", "swimming"];
let item = sports.shift("football", "swimming");

console.log(sports); // ["baseball", "football", "swimming"]
console.log(item); // "soccer"
console.log(sports.length); // 3
```
---

## splice() 添加或删除数组中的元素
>**splice(startIndex, deleteCount, item1, ..., itemX) 方法用于添加或删除数组中的元素。**
+ 此方法==会改变原始数组==。

[MDN链接](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/splice)
| 参数 | 描述 |
| --- | --- |
|startIndex|`必需`。规定从何处添加/删除元素。该参数是开始插入和（或）删除的数组元素的下标，必须是数字。==如果是负值，则表示从数组末位开始的第几位==（从 -1 计数，这意味着 -n 是倒数第 n 个元素并且等价于 array.length-n）；==如果负数的绝对值大于数组的长度，则表示开始位置为第 0 位==。|
|deleteCount|`可选`。规定应该删除多少元素。必须是数字，但可以是 "0"。==如果未规定此参数，则删除从 index 开始到原数组结尾的所有元素==。|
|item1, ..., itemX|`可选`。要添加到数组的新元素|
|<font color=red>返回值</font>|`Array`。由被删除的元素组成的一个数组。如果只删除了一个元素，则返回只包含一个元素的数组。如果没有删除元素，则返回空数组。|
```javascript
// 从索引 2 的位置开始删除 0 个元素，插入“drum”
let myFish = ["angel", "clown", "mandarin", "sturgeon"];
let removed = myFish.splice(2, 0, "drum");

console.log(myFish) // ["angel", "clown", "drum", "mandarin", "sturgeon"]
console.log(removed) // [] 没有元素被删除

// 从索引 3 的位置开始删除 1 个元素
let myFish = ['angel', 'clown', 'drum', 'mandarin', 'sturgeon'];
let removed = myFish.splice(3, 1);

console.log(myFish) // ["angel", "clown", "drum", "sturgeon"]
console.log(removed) // ['mandarin'] 被删除元素数组

// 从索引 -2 的位置开始删除 1 个元素，插入"parrot"、"anemone"和"blue"
let myFish = ['angel', 'clown', 'mandarin', 'sturgeon'];
let removed = myFish.splice(-2, 1, "parrot", "anemone", "blue");

console.log(myFish); // ["angel", "clown", "parrot", "anemone", "blue", "sturgeon"]
console.log(removed); // ["mandarin"] 被删除元素数组

// 从索引 2 的位置开始删除所有元素
let myFish = ['angel', 'clown', 'mandarin', 'sturgeon'];
let removed = myFish.splice(2);

console.log(myFish); // ["angel", "clown"]
console.log(removed); // ['mandarin', 'sturgeon'] 被删除元素数组

// 用splice()实现push()效果
ary.splice(ary.length, 0, 'xxx');

// 用splice()实现unshift()效果
ary.splice(0, 0, 'xxx');

// 用splice()实现pop()效果
ary.splice(ary.length-1);

// 用splice()实现shift()效果
ary.splice(0, 1);
```
---

## slice() 从数组中返回选定的元素
>**slice(startIndex, endIndex) 方法可从已有的数组中返回选定的元素**
+ ==返回一个新的数组对象==，这一对象是一个由 startIndex 和 endIndex 决定的原数组的==浅拷贝==（包括 startIndex，不包括 endIndex）
+ ==如果 startIndex 和 endIndex 索引顺序不对，则返回空数组==
+ 方法==不会改变原始数组==

[MDN链接](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/slice)
| 参数 | 描述 |
| --- | --- |
|startIndex|`可选`。规定从何处开始选取。如果该参数为负数，则表示从原数组中的倒数第几个元素开始提取，slice(-2) 表示提取原数组中的倒数第二个元素到最后一个元素（包含最后一个元素）。==如果省略== startIndex，则 slice 从索引 0 开始。如果 startIndex 超出原数组的索引范围，则会返回空数组。|
|endIndex|`可选`。规定从何处结束选取。该参数是数组片断结束处的数组下标。如果没有指定该参数，那么切分的数组包含从 start 到数组结束的所有元素。如果该参数为负数， 则它表示在原数组中的倒数第几个元素结束抽取。 slice(-2,-1) 表示抽取了原数组中的倒数第二个元素到最后一个元素（不包含最后一个元素，也就是只有倒数第二个元素）。|
|<font color=red>返回值</font>|`Array`。==返回一个新的数组==，包含从 start（包括该元素） 到 end （不包括该元素）的 arrayObject 中的元素。|
```javascript
const animals = ['ant', 'bison', 'camel', 'duck', 'elephant'];

console.log(animals.slice(2));
// ["camel", "duck", "elephant"]
console.log(animals.slice(2, 4));
// ["camel", "duck"]
console.log(animals.slice(1, 5));
// ["bison", "camel", "duck", "elephant"]
console.log(animals.slice(-2));
// ["duck", "elephant"]
console.log(animals.slice(2, -1));
// ["camel", "duck"]
console.log(animals.slice());
// ["ant", "bison", "camel", "duck", "elephant"]
```
---

## concat() 合并两个或多个数组
>**concat(array/value, ...) 方法用于合并两个或多个数组**
+ 此方法==不会更改原数组==。
+ ==不传参即浅拷贝当前数组成一个新数组返回==

[MDN链接](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/concat)
| 参数 | 描述 |
| --- | --- |
|array/value, ...|`可选`。数组和/或值，将被合并到一个新的数组中。如果省略了所有 valueN 参数，则 concat 会返回调用此方法的现存数组的一个浅拷贝。|
|<font color=red>返回值</font>|`Array`。==返回一个新的数组==。该数组是通过把所有 arrayX 参数添加到 arrayObject 中生成的。如果要进行 concat() 操作的参数是数组，那么添加的是数组中的元素，而不是数组。|
```javascript
// 连接两个数组
const letters = ['a', 'b', 'c'];
const numbers = [1, 2, 3];

const alphaNumeric = letters.concat(numbers);
console.log(alphaNumeric); // ['a', 'b', 'c', 1, 2, 3]

// 连接三个数组
const num1 = [1, 2, 3];
const num2 = [4, 5, 6];
const num3 = [7, 8, 9];

const numbers = num1.concat(num2, num3);
console.log(numbers); // [1, 2, 3, 4, 5, 6, 7, 8, 9]

// 将值连接到数组
const letters = ['a', 'b', 'c'];
const alphaNumeric = letters.concat(1, [2, 3]);
console.log(alphaNumeric); // ['a', 'b', 'c', 1, 2, 3]

// 合并嵌套数组
const num1 = [[1]];
const num2 = [2, [3]];

const numbers = num1.concat(num2);
console.log(numbers); // [[1], 2, [3]]

// 修改 num1 的第一个元素
num1[0].push(4);
console.log(numbers); // [[1, 4], 2, [3]]
```
---

## join() 数组转字符串
>**join(separator) 将一个数组（或一个类数组对象）的所有元素连接成一个字符串并返回这个字符串，==用逗号或指定的分隔符字符串分隔。==**
+ 如果数组只有一个元素，那么将返回该元素而不使用分隔符。
+ 该方法==不影响原数组==

[MDN链接](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/join)
| 参数 | 描述 |
| --- | --- |
|separator|`可选`。指定一个字符串来分隔数组的每个元素。如果需要，将分隔符转换为字符串。==如果省略==，数组元素用逗号（,）分隔。==如果 separator 是空字符串==（""），则所有元素之间都没有任何字符。|
|<font color=red>返回值</font>|`String`。一个所有数组元素连接的字符串。如果 arr.length 为 0，则返回空字符串。|
```javascript
// 使用用四种不同的方式连接数组
const a = ['Wind', 'Water', 'Fire'];
a.join();      // 'Wind,Water,Fire'
a.join(', ');  // 'Wind, Water, Fire'
a.join(' + '); // 'Wind + Water + Fire'
a.join('');    // 'WindWaterFire'

// 在稀疏数组上使用 join()
console.log([1, , 3].join()); // '1,,3'
console.log([1, undefined, 3].join()); // '1,,3' 

// 在非数组对象上调用 join()
const arrayLike = {
  length: 3,
  0: 2,
  1: 3,
  2: 4,
};
console.log(Array.prototype.join.call(arrayLike));
// 2,3,4
console.log(Array.prototype.join.call(arrayLike, "."));
// 2.3.4
```
---

## indexOf() 找元素第一个索引
>**indexOf(item, startIndex) 方法返回在数组中可以找到给定元素的第一个索引，==如果不存在，则返回 -1==**

[MDN链接](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/indexOf)
| 参数 | 描述 |
| --- | --- |
|item|`可选`。要查找的元素。不传参则返回 -1|
|startIndex|`可选`。开始查找的位置，其==默认值为 0==。如果该==索引值大于或等于数组长度==，意味着不会在数组里查找，==返回 -1==。如果参数中提供的索引值是==一个负值==，则将其作为数组末尾的一个抵消，即 -1 表示从最后一个元素开始查找，-2 表示从倒数第二个元素开始查找，以此类推。注意：如果参数中提供的索引值是一个负值，并不改变其查找顺序，==查找顺序仍然是从前向后查询数组==。如果抵消后的索引值仍小于 0，则整个数组都将会被查询。|
|<font color=red>返回值</font>|`Number`。首个被找到的元素在数组中的索引位置; 若没有找到则返回 -1。|
```javascript
// 找出指定元素出现的所有位置
const indices = [];
const array = ['a', 'b', 'a', 'c', 'a', 'd'];
const element = 'a';
let idx = array.indexOf(element);
while (idx !== -1) {
  indices.push(idx);
  idx = array.indexOf(element, idx + 1);
}
console.log(indices); // [0, 2, 4]
```
---

## lastIndexOf() 找元素最后一个索引
>**lastIndexOf(item, startIndex) 方法返回在数组中可以找到给定元素的==最后一个==索引，==如果不存在，则返回 -1==**
+ 从数组的==后面向前查找==

[MDN链接](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/lastIndexOf)
| 参数 | 描述 |
| --- | --- |
|item|`可选`。要查找的元素。不传参则返回 -1|
|startIndex|`可选`。开始查找的位置，其==默认值为 length-1==。从此位置开始逆向查找。默认为数组的长度减 1(arr.length - 1)，即整个数组都被查找。如果该值大于或等于数组的长度，则整个数组会被查找。如果为负值，将其视为从数组末尾向前的偏移。即使该值为负，数组==仍然会被从后向前查找==。如果该值为负时，其绝对值大于数组长度，则方法返回 -1，即数组不会被查找。|
|<font color=red>返回值</font>|`Number`。数组中该元素最后一次出现的索引，如未找到返回 -1。|
```javascript
// 找出指定元素出现的所有位置
var indices = [];
var array = ['a', 'b', 'a', 'c', 'a', 'd'];
var element = 'a';
var idx = array.lastIndexOf(element);

while (idx != -1) {
  indices.push(idx);
  idx = (idx > 0 ? array.lastIndexOf(element, idx - 1) : -1);
}

console.log(indices); // [4, 2, 0];
// 注意，我们要单独处理idx==0时的情况，因为如果是第一个元素，忽略了fromIndex参数则第一个元素总会被查找。这不同于indexOf方法
```
---

## reverse() 颠倒数组中元素的顺序
>**reverse() 方法将数组中元素的位置颠倒，并返回该数组。**
+ reverse() 方法将数组中元素的==位置颠倒，并返回该数组==。数组的第一个元素会变成最后一个，数组的最后一个元素变成第一个。
+ 该方法==会改变原数组==。

[MDN链接](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/reverse)
| 参数 | 描述 |
| --- | --- |
|<font color=red>返回值</font>|`Array`。颠倒顺序后的数组（颠倒后原数组的引用）|
```javascript
// 颠倒数组中的元素
// reverse() 的调用返回了一个颠倒后的数组 a的引用。
const a = [1, 2, 3];
console.log(a); // [1, 2, 3]
a.reverse();
console.log(a); // [3, 2, 1]

// 颠倒类数组中的元素
// reverse() 的调用返回一个颠倒后的类数组对象 a的引用。
const a = {0: 1, 1: 2, 2: 3, length: 3};
console.log(a); // {0: 1, 1: 2, 2: 3, length: 3}
Array.prototype.reverse.call(a); //same syntax for using apply()
console.log(a); // {0: 3, 1: 2, 2: 1, length: 3}
```
---

## sort() 数组的元素进行排序。
>**sort() 方法将数组中元素的位置颠倒，并返回该数组。**
+ 排序顺序可以是字母或数字，并按升序或降序。==默认升序==。
+ 如果==没有指明 compareFn== ，那么元素会==按照转换为的字符串的诸个字符的 Unicode 位点进行排序==。例如 "Banana" 会被排列到 "cherry" 之前。当数字按由小到大排序时，9 出现在 80 之前，但==因为（没有指明 compareFn），比较的数字会先被转换为字符串，所以在 Unicode 顺序上 "80" 要比 "9" 要靠前==。
+ 该方法==会改变原数组==。

[MDN链接](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/sort)
| 参数 | 描述 |
| --- | --- |
|compareFn|`可选`。==传则必须是函数==。用来指定按某种顺序进行排列的函数。如果省略，元素按照转换为的字符串的各个字符的 Unicode 位点进行排序。|
|<font color=red>返回值</font>|`Array`。排序后的数组。请注意，数组在原数组上进行排序，并且不进行复制。|
```javascript
let numbers = [12, 15, 9, 28, 10, 22];
numbers.sort();
console.log(numbers); // [10, 12, 15, 22, 28, 9]

let numbers1 = [12, 15, 9, 28, 10, 22];
numbers1.sort(function (a, b) {
  return a - b;
});
console.log(numbers1); // [9, 10, 12, 15, 22, 28]
// 或者
let numbers2 = [12, 15, 9, 28, 10, 22];
numbers2.sort((a, b) => a - b);
console.log(numbers2); // [9, 10, 12, 15, 22, 28]
```
---

## forEach() 遍历数组 ==ES6==
>**forEach(cb(item, index, ary), thisArg) 方法对数组的每个元素执行一次给定的函数。**
+ forEach() 对于==空数组是不会执行==回调函数的。
+ forEach() 本身是==不支持 continue 与 break== 语句的，使用 return 语句实现 continue 关键字的效果

[MDN链接](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach)
| 参数 | 描述 |
| --- | --- |
|cb(==item==, index, ary)|`必需`。当前元素。|
|cb(item, ==index==, ary)|`可选`。当前元素的索引值。|
|cb(item, index, ==ary==)|`可选`。forEach() 方法正在操作的数组。|
|thisArg |`可选`。传递给函数的值一般用 "this" 值。如果这个参数为空、"undefined" 会传递给 "==this==" 值|
|<font color=red>返回值</font>|`undefined`|
```javascript
// 使用 return 语句实现 continue 关键字的效果
let arr = [1, 2, 3, 4, 5];

arr.forEach(function (item) {
    if (item === 3) {
        return;
    }
    console.log(item);
}); // 1 2 4 5 跳过了3
```
---

## find() 查找元素 ==ES6==
>**find(cb(item, index, ary), thisArg) 方法返回数组中满足提供的测试函数的==第一个元素==的值。否则返回 undefined。**
+ find() 对于==空数组是不会执行==回调函数的。
+ 当数组中的元素在测试条件时返回 true 时, find() 返回符合条件的第一个元素，之后的值不会再调用执行函数。
+ 如果没有符合条件的元素则返回 undefined
+ find() 并==不改变数组的原始值==。

[MDN链接](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/find)
| 参数 | 描述 |
| --- | --- |
|cb(==item==, index, ary)|`必需`。当前元素。|
|cb(item, ==index==, ary)|`可选`。当前元素的索引值。|
|cb(item, index, ==ary==)|`可选`。正在操作的数组。|
|thisArg |`可选`。传递给函数的值一般用 "this" 值。如果这个参数为空、"undefined" 会传递给 "==this==" 值|
|<font color=red>返回值</font>|返回符合测试条件的第一个数组元素值，如果==没有符合条件的则返回 undefined==。|
>**简单代码实现myFind()**
```javascript
// 简单实现
Array.prototype.myFind = function(cb){
  // 空数组不执行
  if(this.length < 1) return undefined;

  for(let i=0; i<this.length; i++){
      if(cb(this[i], i, this)){
        // 符合条件，返回当前元素
          return this[i];
      }
  }
  // 没有符合条件的，则返回undefined
  return undefined;
}
```
---

## findIndex() 查找元素索引 ==ES6==
>**findIndex(cb(item, index, ary), thisArg) 方法返回数组中满足提供的测试函数的==第一个元素的索引==。否则返回 -1**
+ findIndex() 对于==空数组是不会执行==回调函数的。
+ 当数组中的元素在测试条件时返回 true 时, findIndex() 返回符合条件的第一个元素的索引位置，之后的值不会再调用执行函数。
+ 如果没有符合条件的元素则返回 -1
+ findIndex() 并==不改变数组的原始值==。

[MDN链接](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/findIndex)
| 参数 | 描述 |
| --- | --- |
|cb(==item==, index, ary)|`必需`。当前元素。|
|cb(item, ==index==, ary)|`可选`。当前元素的索引值。|
|cb(item, index, ==ary==)|`可选`。正在操作的数组。|
|thisArg |`可选`。传递给函数的值一般用 "this" 值。如果这个参数为空、"undefined" 会传递给 "==this==" 值|
|<font color=red>返回值</font>|`Number`。返回符合测试条件的第一个数组元素的索引位置，如果==没有符合条件的则返回 -1==。|
>**简单代码实现myFindIndex()**
```javascript
// 简单实现
Array.prototype.myFindIndex = function(cb){
  // 空数组不执行
  if(this.length < 1) return -1;

  for(let i=0; i<this.length; i++){
      if(cb(this[i], i, this)){
        // 符合条件，返回当前元素索引
          return i;
      }
  }
  // 没有符合条件的，则返回-1
  return -1;
}
```
---

## map() 映射。按照原数组元素顺序依次处理。 ==ES6==
>**map(cb(item, index, ary), thisArg) 方法==返回一个新数组==，数组中的元素为原始数组元素调用函数处理后的值。**
+ map() 对于==空数组是不会执行==回调函数的。
+ map() 方法按照原始数组元素顺序依次处理元素。
+ map() 并==不改变数组的原始值==。

[MDN链接](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/map)
| 参数 | 描述 |
| --- | --- |
|cb(==item==, index, ary)|`必需`。当前元素。|
|cb(item, ==index==, ary)|`可选`。当前元素的索引值。|
|cb(item, index, ==ary==)|`可选`。正在操作的数组。|
|thisArg |`可选`。传递给函数的值一般用 "this" 值。如果这个参数为空、"undefined" 会传递给 "==this==" 值|
|<font color=red>返回值</font>|`Array`。返回一个新数组，数组中的元素为原始数组元素调用函数处理后的值。|
```javascript
// 求数组中每个元素的平方根
const numbers = [1, 4, 9];
const roots = numbers.map((num) => Math.sqrt(num));
// roots 现在是     [1, 2, 3]
// numbers 依旧是   [1, 4, 9]

// 使用 map 重新格式化数组中的对象
const kvArray = [
  { key: 1, value: 10 },
  { key: 2, value: 20 },
  { key: 3, value: 30 },
];
const reformattedArray = kvArray.map(({ key, value}) => ({ [key]: value }));
// reformattedArray 现在是 [{1: 10}, {2: 20}, {3: 30}],
// kvArray 依然是：
// [{key: 1, value: 10},
//  {key: 2, value: 20},
//  {key: 3, value: 30}]

// 在一个 String 上使用 map 方法获取字符串中每个字符所对应的 ASCII 码组成的数组
const charCodes = Array.prototype.map.call('Hello World', (x) => x.charCodeAt(0));
// charCodes 现在等于 [72, 101, 108, 108, 111, 32, 87, 111, 114, 108, 100]
```
>**简单代码实现myMap()**
```javascript
// 简单实现
Array.prototype.myMap = function(cb){
  // 空数组不执行
  if(this.length < 1) return [];
  let arr = [];
  for(let i=0; i<this.length; i++){
      arr.push(cb(this[i], i, this));
  }
  return arr;
}
```
---

## some() 判断数组中是否含有符合条件的元素。 ==ES6==
>**some(cb(item, index, ary), thisArg) 数组中满足提供的测试函数的==如果有一个元素满足条件，则表达式返回true , 剩余的元素不会再执行检测。如果没有满足条件的元素，则返回false==。**
+ some() 对于==空数组是不会执行==回调函数的。
+ some() 方法按照原始数组元素顺序依次处理元素。
+ some() 并==不改变数组的原始值==。

[MDN链接](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/some)
| 参数 | 描述 |
| --- | --- |
|cb(==item==, index, ary)|`必需`。当前元素。|
|cb(item, ==index==, ary)|`可选`。当前元素的索引值。|
|cb(item, index, ==ary==)|`可选`。正在操作的数组。|
|thisArg |`可选`。传递给函数的值一般用 "this" 值。如果这个参数为空、"undefined" 会传递给 "==this==" 值|
|<font color=red>返回值</font>|`Boolean`。布尔值。如果数组中有元素满足条件返回 true，否则返回 false。|
```javascript
// 求数组中每个元素的平方根
```
>**简单代码实现mySome()**
```javascript
// 简单实现
Array.prototype.mySome = function(cb){
  // 空数组不执行
  if(this.length < 1) return false;

  for(let i=0; i<this.length; i++){
      if(cb(this[i], i, this)){
        // 符合条件，返回true
          return true;
      }
  }
  // 没有符合条件的，则返回false
  return false;
}
```
---


[菜鸟教程Array对象](https://www.runoob.com/jsref/jsref-obj-array.html)