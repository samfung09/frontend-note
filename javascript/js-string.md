==**JavaScript中所有用单引号、双引号、反引号包起来的都是字符串**==
## toString() 转换成字符串
>**toString()**
+ 基本数据类型 toString() 注意语法。得到的字符串样子基本一样
+ **注意**: ==null== 和 ==undefined== 不能直接调用 toString()。可用 + 运算符转成字符串
+ ==Arrar对象==、==RegExp对象==、==Date对象== toString() 得到对应的字符串信息
+ 其他引用数据类型 toString() 得到的是数据类型字符串，如 `'[object Object]'`
```javascript
// Number 转 String
12.toString(); // SyntaxError 语法错误
(12).toString(); // '12'
NaN.toString(); // 'NaN'
// Boolean 转 String
true.toString(); // 'true'
false.toString(); // 'false'
// Symbol 转 String
Symbol().toString(); // 'Symbol()'
// Arrar 转 String
[].toString(); // ''
[123, ].toString(); // '123'
[123, null].toString(); // '123,'
[123, undefined].toString(); // '123,'
// Object对象 转 String
{}.toString(); // SyntaxError 语法错误
({}).toString(); // '[object Object]'
// RegExp正则对象 转 String
/^$/.toString(); // '/^$/'
new RegExp().toString(); // '/(?:)/'
// Math对象 转 String
Math.toString(); // '[object Object]'
// null 转 String
null.toString(); // TyprError
(null).toString(); // TyprError
// undefined 转 String
undefined.toString(); // TyprError
(undefined).toString(); // TyprError
```
---

## + 运算符字符串拼接
+ 四则运算法则中，除了加法外，其他都是数学计算，只有 ==<font color=red>+</font> 可能存在字符串拼接==
+ ==Number + 引用类型==时，==表面是数学计算==，但引用数据类型转数字过程中会先 toString() ，此时就==变成了 Number + String== ，即为字符串拼接
```javascript
'10' + 10; // '1010'
'10' - 10; // 0
'10px' + 10; // '10px10'
'10px' - 10; // NaN
'' + null; // 'null'
'' + undefined; // 'undefined'
// Number + Object
10 + []; // '10'
10 + {}; // '10[object Object]'
```
---

## 字符串的一些属性
```javascript
let str = 'hello world';
str.length // 11 字符串长度
str[0] // 'h' 字符串第一个字符，索引为0
str[str.length - 1] // 'd' 字符串最后一个字符，索引为 length-1
str[100] // undefined
```
---

## charAt() / charCodeAt()
>**charAt(index) 方法从一个字符串中返回指定的字符**

[MDN链接](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/String/charAt?qs=charAt)
| 参数 | 描述 |
| ---- | ---- |
|index|可选。一个介于 0 和字符串长度减 1 之间的整数。(0~length-1) ==如果没有提供索引，charAt() 将使用 0==|
|<font color=red>返回值</font>| String 。 返回在指定位置的字符。|
```javascript
//charAt() 和字符串直接索引的一点区别
let str = 'hello world';
str[100]; // undefined
str.charAt(100); // ''
```
>**charCodeAt(index) 方法返回 0 到 65535 之间的整数，表示给定索引处的 UTF-16 代码单元（Unicode 编码）**

[MDN链接](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/String/charCodeAt?qs=charcodeat)
| 参数 | 描述 |
| ---- | ---- |
|index|可选。一个大于等于 0，小于字符串长度的整数。如果不是一个数值，则默认为 0。|
|<font color=red>返回值</font>| Number 。指定 index 处字符的 UTF-16 代码单元值的一个数字；如果 index 超出范围，charCodeAt() 返回 NaN|
```javascript
let str = 'a0A';
str.charCodeAt(0); // 97
str.charCodeAt(1); // 48
str.charCodeAt(2); // 65
```
---

## String.fromCharCode(num1, num2, ...numN)
+ 静态 String.fromCharCode() 方法返回由指定的 UTF-16 代码单元序列创建的字符串。==与 charCodeAt() 反效果==

[MDN链接](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/String/fromCharCode)
| 参数 | 描述 |
| ---- | ---- |
|num1, num2, ...numN|一系列 UTF-16 代码单元的数字。范围介于 0 到 65535（0xFFFF）之间。大于 0xFFFF 的数字将被截断。不进行有效性检查。|
|<font color=red>返回值</font>| String 。一个长度为 N 的字符串，由 N 个指定的 UTF-16 代码单元组成。|
```javascript
String.fromCharCode(65); // 'A'
String.fromCharCode(65, 66, 67, 68); // 'ABCD'
```
---

## substr() 字符串截取（不推荐）
>**substr(startIndex, length)**
+ substr() 方法可在字符串中抽取从开始索引（startIndex）开始的指定数目（length）的字符。
+ ECMAscript 没有对该方法进行标准化，因此不推荐使用它。
+ ==任一参数 isNaN() 为 true，则被当作0==
+ **注意**：==substr() 方法不会改变原字符串==

| 参数 | 描述 |
| ---- | ---- |
|startIndex|必需。要抽取的子串的起始下标。必须是数值。如果是负数，那么该参数声明从字符串的尾部开始算起的位置。也就是说，-1 指字符串中最后一个字符，-2 指倒数第二个字符，以此类推。|
|length|可选。子串中的字符数。必须是数值。如果省略了该参数，那么返回从 stringObject 的开始位置到结尾的字串。==lenth 为负数，返回空字符==|
|<font color=red>返回值</font>| String 。提取部分的新字符串|
```javascript
let str = 'hello world';
str.substr(2); // 'llo world'
str.substr(2, 100); // 'llo world'
str.substr(-2); // 'ld'
str.substr(-6, 3); // ' wo'
//lenth 为负数，返回空字符
str.substr(1, -3); // ''
```
---

## substring() 字符串截取
>**substring(startIndex, endIndex)**
+ substring() 方法可在字符串中抽取从开始索引（startIndex）开始的到结束索引（endIndex）的字符。
+ 如果 startIndex 等于 endIndex，substring 返回一个空字符串。
+ ==如果任一参数小于 0 或为 NaN，则被当作 0==
+ 如果任一参数大于 stringName.length，则被当作 stringName.length。
+ 如果 startIndex 大于 endIndex，则 substring 的执行效果就像两个参数调换了一样。
+ ==任一参数 isNaN() 为 true，则被当作0==
+ **注意**：==substring() 方法不会改变原字符串==

[MDN链接](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/String/substring)
| 参数 | 描述 |
| ---- | ---- |
|startIndex|可选，不填为 0。一个非负的整数，需要截取的第一个字符的索引，该索引位置的字符作为返回的字符串的首字母。|
|endIndex|可选。一个 0 到字符串长度之间的整数，以该数字为索引的字符不包含在截取的字符串内。|
|<font color=red>返回值</font>| String 。提取部分的新字符串|
```javascript
let str = 'hello world';
// 输出 "hel"
str.substring(0, 3);
str.substring(3, 0);
str.substring(3, -3);
str.substring(3, NaN);
str.substring(-2, 3);
str.substring(NaN, 3);
// 输出 ""
str.substring(3, 3)
// 输出 "hello world"
str.substring(0, str.length);
str.substring(NaN, 100);
```
---

## slice() 字符串截取
>**slice(startIndex, endIndex)**
+ slice() 方法提取某个字符串的一部分，并返回一个新的字符串，且不会改动原字符串。
+ 如果 indexStart 等于 indexEnd，substring 返回一个空字符串（==与substring不同==）。
+ 如果 indexStart 大于 indexEnd，则返回空字符串 '' （==与substring不同==）。
+ 两个参数均可为负数，即从字符串尾部开始算。
+ 如果任一参数大于 stringName.length，则被当作 stringName.length。
+ ==任一参数 isNaN() 为 true，则被当作0==
+ **注意**：==slice() 方法不会改变原字符串==

[MDN链接](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/String/slice)
| 参数 | 描述 |
| ---- | ---- |
|startIndex|可选。要抽取的片断的起始下标。如果是负数，则该参数规定的是从字符串的尾部开始算起的位置。也就是说，-1 指字符串的最后一个字符，-2 指倒数第二个字符，以此类推。|
|endIndex|可选。在该索引（以 0 为基数）处结束提取字符串。如果省略该参数，slice() 会一直提取到字符串末尾。如果该参数为负数，则被看作是 strLength + endIndex，这里的 strLength 就是字符串的长度 (例如，如果 endIndex 是 -3，则是，strLength - 3)。|
|<font color=red>返回值</font>| String 。返回一个从原字符串中提取出来的新字符串|
```javascript
let str = 'hello world';
str.slice(0, 3); // 'hel'
str.slice(3, 0); // ''
str.slice(3, -3); // 'lo wo'
str.slice(3, NaN); // ''
str.slice(-2, 3); // ''
str.slice(NaN, 3); // 'hel'
// 输出 ""
str.slice(3, 3)
// 输出 "hello world"
str.slice(0, str.length);
str.slice(NaN, 100);
```
---

## indexOf() 查找字符
>**indexOf(searchValue, startIndex)**
+ indexOf() 方法可返回某个指定的字符串值在字符串中首次出现的位置。
+ 如果没有找到匹配的字符串则返回 -1
+ ==该方法不会改变原字符串==

[MDN链接](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/String/indexOf)
| 参数 | 描述 |
| ---- | ---- |
|searchValue|必需。规定需检索的字符串值。|
|startIndex|可选。整数参数。规定在字符串中开始检索的位置。它的合法取值是 0 到 string Object.length - 1。如省略该参数，则将从字符串的首字符开始检索。|
|<font color=red>返回值</font>|Number。查找指定字符串第一次出现的位置，如果没找到匹配的字符串则返回 -1。|
```javascript
let str = "Hello world, welcome to the universe.";
str.indexOf('world'); // 6
str.indexOf('world', 9); // -1
```
---

## lastIndexOf() 查找字符
>**lastIndexOf(searchValue, startIndex)**
+ lastIndexOf() 方法可返回一个指定的字符串值最后出现的位置
+ 如果没有找到匹配的字符串则返回 -1
+ **注意**：该方法将==从后向前检索字符串==，但返回是从起始位置 (0) 开始计算子字符串最后出现的位置。 看它是否含有字符串。开始检索的位置在字符串的 start 处或字符串的结尾（没有指定 start 时）。
+ ==该方法不会改变原字符串==

[MDN链接](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/String/lastIndexOf)
| 参数 | 描述 |
| ---- | ---- |
|searchValue|必需。规定需检索的字符串值。|
|startIndex|可选。整数参数。规定在字符串中开始检索的位置。它的合法取值是 0 到 string Object.length - 1。如省略该参数，则将从字符串的首字符开始检索。|
|<font color=red>返回值</font>|Number。查找指定字符串第一次出现的位置，如果没找到匹配的字符串则返回 -1。|
```javascript
let str = "i am from runoob，welcome to runoob site.";
str.lastIndexOf('run'); // 28
str.lastIndexOf('run', 9); // -1
str.lastIndexOf('run', 13); // 10
```
---

## includes() 查找字符 (==ES6==)
>**includes(searchValue, startIndex)**
+ includes() 方法用于判断字符串是否包含指定的子字符串。
+ 如果找到匹配的字符串则返回 true，否则返回 false。
+ ==该方法不会改变原字符串==

[MDN链接](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/String/includes)
| 参数 | 描述 |
| ---- | ---- |
|searchValue|必需，要查找的字符串。|
|startIndex|可选，设置从那个位置开始查找，默认为 0。|
|<font color=red>返回值</font>|Boolean。如果找到匹配的字符串返回 true，否则返回 false。|
```javascript
let str = "i am from runoob，welcome to runoob site.";
str.includes('run'); // true
str.includes('arun'); // false
```
---

## toUpperCase() 字符串转换为大写
>**toUpperCase()**
+ toUpperCase() 方法用于把字符串转换为大写。
+ ==该方法不会改变原字符串==

[MDN链接](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/String/toUpperCase)
| 参数 | 描述 |
| ---- | ---- |
|<font color=red>返回值</font>|String。一个新的字符串，表示转换为大写的调用字符串。|
```javascript
let str = 'hello world';
str.toUpperCase(); // 'HELLO WORLD'
```
---

## toUpperCase() 字符串转换为大写
>**toUpperCase()**
+ toUpperCase() 方法用于把字符串转换为大写。
+ ==该方法不会改变原字符串==

[MDN链接](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/String/toUpperCase)
| 参数 | 描述 |
| ---- | ---- |
|<font color=red>返回值</font>|String。一个新的字符串，表示转换为大写的调用字符串。|
```javascript
let str = 'hello world';
str.toUpperCase(); // 'HELLO WORLD'
```
---

## toLowerCase() 字符串转换为小写
>**toLowerCase()**
+ toLowerCase() 方法用于把字符串转换为小写。
+ ==该方法不会改变原字符串==

[MDN链接](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/String/toLowerCase)
| 参数 | 描述 |
| ---- | ---- |
|<font color=red>返回值</font>|String。一个新的字符串，表示转换为小写的调用字符串。|
```javascript
let str = 'Hello World';
str.toUpperCase(); // 'hello world'
```
---

## split() 分割字符串
>**split(separator, limit)**
+ split() 方法使用==指定的分隔符字符串==将一个String对象==分割成子字符串数组==，以一个指定的分割字串来决定每个拆分的位置。
+ ==如果把空字符串 <font color=red>""</font> 用作 separator==，那么 stringObject 中的每个字符之间都会被分割。
+ ==该方法不会改变原字符串==

[MDN链接](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/String/split)
| 参数 | 描述 |
| ---- | ---- |
|separator|可选。==字符串或正则表达式==，从该参数指定的地方分割 string Object。==字符串中没找到separator，则等于没传参==|
|limit|可选。该参数可指定返回的数组的最大长度。如果设置了该参数，返回的子串不会多于这个参数指定的数组。如果没有设置该参数，整个字符串都会被分割，不考虑它的长度。|
|<font color=red>返回值</font>|Array。一个字符串数组。该数组是通过在 separator 指定的边界处将字符串 string Object 分割成子串创建的。返回的数组中的字串不包括 separator 自身。|
```javascript
let str = 'aA bB cC dD';
str.split(); // ['aA bB cC dD']
str.split(''); // ['a', 'A', ' ', 'b', 'B', ' ', 'c', 'C', ' ', 'd', 'D']
str.split(' '); // ['aA', 'bB', 'cC', 'dD']
str.split(' ', 2); // ['aA', 'bB']
```
---

## replace() 字符替换
>**replace(regexp|substr, newSubStr|function)**
+ replace() 方法用于在字符串中用一些字符替换另一些字符，或替换一个与正则表达式匹配的子串。
+ 第一个参数非正则情况下，只替换一次。所以 ==replace() 方法多配合正则使用==。
+ ==该方法不会改变原字符串==

[MDN链接](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/String/replace)
| 参数 | 描述 |
| ---- | ---- |
|regexp / substr|必需。规定子字符串或要替换的模式的 RegExp 对象。请注意，如果该值是一个字符串，则将它作为要检索的直接量文本模式，而不是首先被转换为 RegExp 对象。|
|newSubStr / function|必需。一个字符串值。规定了替换文本或生成替换文本的函数。或者一个函数。|
|<font color=red>返回值</font>|String。一个新的字符串，是用 replacement 替换了 regexp 的第一次匹配或所有匹配之后得到的。|
```javascript
let str = 'aA bB cC dD';
str.replace(' ', '-') // 'aA-bB cC dD'
str.replace(/\s/g, '-') // 'aA-bB-cC-dD'
```
---

**[菜鸟教程String对象](https://www.runoob.com/jsref/jsref-obj-string.html)**