## Number() 将其他数据类型转成数字
>**new Number(value) / Number(value) 创建数字**

| 参数 | 描述 |
| ---- | ---- |
|value|被创建对象的数字值。|
|<font color=red>返回值</font>| new Number() 返回数字对象，Number() 返回数字|
```javascript
var a = new Number('123'); // a === 123 is false
var b = Number('123'); // b === 123 is true
typeof a // 'object'
typeof b // 'number'
a instanceof Number; // is true
b instanceof Number; // is false
```
>**Number(object)**

**注意**：如果参数是 `Date 对象`，Number() 返回从 1970 年 1 月 1 日至今的毫秒数。
**注意**：把引用数据类型转换成数字，会基于 <font color=red>toString()</font> 先转换成字符串，然后在转换成数字。
| 参数 | 描述 |
| ---- | ---- |
|object|可选。一个 JavaScript 对象。如果没有提供参数，则返回0。|
|<font color=red>返回值</font>| 数值。将不同的对象值返回为数字。如果该值无法转换为合法数字，则返回 NaN。如果未提供参数，则返回 0|
```javascript
Number('123')     // 123
Number('12.3')    // 12.3
Number('12.00')   // 12
Number('123e-1')  // 12.3
Number('')        // 0
Number(null)      // 0
Number(undefined)      // NaN
Number(['12.3'])      // 12.3 先toString()
Number([{}])      // NaN 先toString()
Number(true)      // 1
Number(false)      // 0
Number(new Date())      // 1669571642588
Number('0x11')    // 17
Number('0b11')    // 3
Number('0o11')    // 9
Number('foo')     // NaN
Number('100a')    // NaN
Number('-Infinity') //-Infinity
```
---
## parseInt() / parseFloat()
>**parseInt(string, radix) <font color=red>解析一个字符串</font>，并返回一个十进制整数**

[MDN链接](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/parseInt?_blank)
**描述**：字符串从左到右依次查找有效数字字符，直到遇到非有效数字字符，停止查找，把找到的当作数字返回。
| 参数 | 描述 |
| ---- | ---- |
|string|必需。要被解析的字符串。其他数据类型会先被转成 string|
|radix|可选。表示要解析的数字的基数。该值介于 2 ~ 36 之间。（`说明string是多少进制`）|
|<font color=red>返回值</font>| 一个十进制整数 或者 NaN|
```javascript
parseInt([]); //NaN
parseInt({}); //NaN
parseInt(null); //NaN
parseInt(undefined); //NaN
parseInt(true); //NaN
parseInt(false); //NaN
parseInt(""); //NaN
parseInt(" 123"); //123
parseInt(" 1 23"); //1
parseInt("11", 2); //3 返回二进制为11 的十进制整数
parseInt("1010", 2); //10 返回二进制为1010 的十进制整数

// 以下例子均返回15
parseInt("0xF", 16);
parseInt("F", 16);
parseInt("17", 8);
parseInt(021, 8);
parseInt("015", 10);   // parseInt(015, 8); 返回 13
parseInt(15.99, 10);
parseInt("15,123", 10);
parseInt("FXX123", 16);
parseInt("1111", 2);
parseInt("15 * 3", 10);
parseInt("15e2", 10);
parseInt("15px", 10);
parseInt("12", 13);
```

>**parseFloat(string) <font color=red>解析一个字符串</font>，并返回一个浮点数。**

[MDN链接](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/parseFloat?_blank)
**描述**：与 parseInt() 类似，但 parseFloat() 能识别小数点，可返回一个合理的小数。
| 参数 | 描述 |
| ---- | ---- |
|string|必需。要被解析的字符串。其他数据类型会先被转成 string|
|<font color=red>返回值</font>| 一个浮点数 或者 NaN|


---
## NaN
>**NaN和任何值（包括NaN自己）都不相等**
```javascript
console.log("abc" == NaN); //false
console.log(123 == NaN); //false
console.log(NaN == NaN); //false
```

---
## isNaN() 判断是否是非数字值
>**isNaN(value)**

`isNaN()` 函数用来确定一个值是否为NaN。`isNaN()` 检测值时，会先将其他的数据类型用 `Number()` 转成数字类型，即为判断一个值能否被 `Number()` 合法地转化成数字
| 参数 | 描述 |
| ---- | ---- |
|value|要被检测的值。|
|<font color=red>返回值</font>| 布尔值|

```javascript
isNaN(NaN);       // true
isNaN(undefined); // true
isNaN({});        // true

isNaN(true);      // false
isNaN(null);      // false
isNaN(37);        // false

// strings
isNaN("37");      // false: 可以被转换成数值 37
isNaN("37.37");   // false: 可以被转换成数值 37.37
isNaN("37,5");    // true
isNaN('123ABC');  // true:  parseInt("123ABC") 的结果是 123，但是 Number("123ABC") 结果是 NaN
isNaN("");        // false: 空字符串被转换成 0
isNaN(" ");       // false: 包含空格的字符串被转换成 0
isNaN([]);       // false: [].toString()为 ''
isNaN(['']);       // false: Number([''])为 0
isNaN(['1']);       // false: Number(['1'])为 1
isNaN(['1',]);       // false: Number(['1'])为 1
isNaN(['1', '2']);       // false: Number(['1','2'])为 NaN

// dates
isNaN(new Date());                // false
isNaN(new Date().toString());     // true

isNaN("blabla")   // true: "blabla"不能转换成数值
                  // 转换成数值失败，返回 NaN
```

---
## 关于Number类型的一些封装函数
### isNumber(value) 
| 参数 | 描述 |
| ---- | ---- |
|value|必需。要被检测的值。|
|<font color=red>返回值</font>| 布尔值|

```javascript
function isNumber(value){
    return typeof value === 'number' ? !isNaN(value) : false;
}
```
