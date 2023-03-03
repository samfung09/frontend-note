## 变量声明方式
>**传统方式 `var` / `function`**
```javascript
//存在变量提升，可重复声明，存储的值可变
var n; 
//声明一个变量fn，存储的是一个函数， 存在变量提升
function fn(){}; 
```
>**新方式 `let` / `const` / `import`**
```javascript
//不存在变量提升，不可重复声明，存储的值可变
let x; 
//不存在变量提升，不可重复声明，存储的值不可变（常量）
const y; 
//创建类也相当于创建变量
class A{} 
//ES6 Module 模块导入，把导入的模块存储到z变量中
import z from "./z.js" 
//Symbol创建唯一标识
let sb = Symbol();
```
### var、let、const的区别
>**var可重复声明，let 和 const 不可重复声明**
```javascript
var a = 1;
var a = 2;
console.log(a); // 2
```
```javascript
let b = 1;
let b = 2;
console.log(b); // 报错：Identifier 'b' has already been declared 变量已声明过
```
```javascript
const c = 1;
const c = 2;
console.log(c); // 报错：Identifier 'c' has already been declared 变量已声明过
```
>**var存在变量提升，let和const则不存在**
```javascript
// undefined  ===>  a已声明还没赋值，默认得到undefined值
console.log(a); 
var a = 100;
// 报错：b is not defined
console.log(b); 
let b = 10;
// 报错：c is not defined
console.log(c); 
const c = 10;
```
>**let 和 const 存在块级作用域**
```javascript
for(var i=0;i<10;i++){
    var test = i;
}
console.log(test); //9
console.log(i); //10 用来记数的变量也可以访问， 无意中就污染了全局变量
```
```javascript
for(let i=0;i<10;i++){
    let test = i;
}
console.log(test); // 报错：test is not defined
console.log(i); // 报错：i is not defined
```
>**const 声明变量时一定要赋值**
```javascript
const c; // 报错：Missing initializer in const declaration
```

---
## 命名规范
+ 基于字母、数字、$、_，<font color=red>不可以数字开头</font>
+ 有<font color=red> $ </font>和<font color=red> _ </font>的话，用于开头居多
+ 约定俗成：<font color=red> $ </font>开头的变量一般用于存储JQuery获取的值，<font color=red> _ </font>开头的变量一般用于全局或公共的
+ 对字母大小写敏感（y和Y是不同的变量），建议驼峰命名法
+ 不能使用关键字和保留字
  + 关键字：JS中有特殊含义的，如`var` / `let` / `const` /`function` / `import` / `break` / `continue` / `return`...
  + 保留字：未来会成为关键字，现在保留下来的

---
## JS中的数据类型
>**基本数据类型 / 值类型 / 原始数据类型**
+ 数字 Number(`NaN`)
+ 字符串 String
+ 布尔值 Boolean
+ 空 null
+ 未定义 undefined
+ 唯一标识符 Symbol
+ 大数字 bigint
>**引用数据类型**
+ 对象类型 Object
  + 普通对象 `{key: value, ...}`
  + 数组对象 `[value, ...]`
  + 日期对象 `new Date()`
  + 正则对象 `/^[+-]?(\d|([1-9]\d+))(\.\d+)?$/`
  + ...
+ 函数对象 Function

![](https://www.runoob.com/wp-content/uploads/2013/08/Javascript-DataType.png)