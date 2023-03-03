## 转义符号 ==\\==
```javascript
console.log("hello "aaa" world");
// 报错 SyntaxError
console.log("hello \"aaa\" world");
// "hello "aaa" world"
console.log("hello \aaa\ world");
// "hello aaa world"
console.log("hello \\aaa\\ world");
// "hello \aaa\ world"
```

### 常见转义字符 ==\r== ==\n== ==\t==
+ ==适用于编辑系统，在html中仅为占位符（即空格）==
>**\n 换行 newline**
```javascript
console.log('hello \n world');
//"hello 
// world"
document.write('hello\nworld');
// html页面显示 "hello world"
```

>**\t 制表符 tab键**
```javascript
console.log('hello\tworld');
//"hello  world"
```

>**\r 回车 return**
+ windows  ==\r\n==
+ mac  ==\r==
+ linux  ==\n==
```javascript
console.log('hello\tworld');
//"hello  world"
```
---

## JS正则对象创建方式
>**字面量方式**
```javascript
// 字面量方式，两个斜杠包起来一些正则元字符
let reg = /\d+/g;
```
>**构造函数方式**
```javascript
// 构造函数方式，注意斜杠转义
let reg = new RegExp("\\d+", "g");
```

>**两种创建方式的区别**

1. ==构造函数==第一个参数是一个字符串，==要注意字符转义==
```javascript
console.log('\d');  // d
console.log('\\d');  // \d
```
2. ==字面量方式不能插入变量==，因为 ==<font color=red>//</font> 中间的都是正则元字符==，所以JS正则表达式中要使用变量的话只能用构造函数创建
```javascript
let name = 'Sam';
let reg1 = /^--+ name +--$/;
reg1.test('--Sam--'); // false
let reg2 = new RegExp("^--"+ name +"--$");
reg2.test('--Sam--'); // true
```
---

## 正则表达式有两个部分组成
### 元字符
>**常见量词元字符**

| 量词元字符 | 含义 |
| --- | --- |
| * | 零到多次|
| + | 1到多次|
| ? | 0次或1次|
| {n} | 出现n次|
| {n,} | 出现n次到多次|
| {n,m} | 出现n次到m次|

>**特殊元字符**

| 特殊元字符 | 含义 |
| --- | --- |
| \ | 转义符号 |
| . | 除\r（回车）\n（换行符）以外的所有字符 |
| ^ | 以哪个元字符开始（==[]里面使用表示非==）|
| $ | 以哪个元字符结束 |
| \r | 回车 |
| \n | 换行符 |
| \b | 单词边界 |
| \d | 0-9之间的一个数字 ==[0-9]==|
| \D | 非\d ==[^\d]== |
| \w | 数字、字母、下划线中任意一个字符 ==[0-9a-zA-Z_]== |
| \W | 非\w ==[^\w]== |
| \s | 一个空白字符（包括空格、制表符、换行符）等价于 ==[\f\n\r\t\v]== |
| \t | 一个制表符（tab键，4个空格） |
| x\|y | x或y |
| [xyz] | x或y或z |
| [^xy] | 除了x和y以外的任意字符 |
| [a-z] | 指定a-z范围内的任意字符（==[0-9a-zA-Z_] === \w==） |
| [^a-z] | 非上一个 |
| () | 正则中的分组 |
| (?: ) | 只匹配不捕获 |
| (?=) | 正向预查 |
| (?!) | 反向预查 |

>**修饰符**

| 修饰符 | 含义 |
| --- | --- |
| i | ignoreCase 忽略大小写 |
| m | multiline 可以多行匹配 |
| g | global 全局匹配 |
---

## 或 ==|==
==|== 直接使用的时候可能会出现一些不确定性，比如：
```javascript
let reg = /^18|29$/;
reg.test(18)  //true
reg.test(29)  //true
reg.test(129)  //true
reg.test(189)  //true
reg.test(229)  //true
reg.test(1236629)  //true
// 这时reg匹配的是/(^18)|(29$)/以18开始或者是29结束
// 如果你想匹配的是18或者29，那么
reg = /^(18|29)$/;
```
所以，避免不确定性，==建议在使用 <font color=red>|</font> 时加上小括号==。
---

## 小括号 ==()==
> **分组，提高优先级，配合 ==|== 使用**

参照上文
> **分组引用**

通过"==\数字=="让该位置和==对应分组==（==根据数字指定第几个分组==）的内容相同
```javascript
// 比如我想匹配像book这样第二和第三个字母一样的单词
var reg = /^[a-zA-Z]{4}$/;    //这样达是不到要求
reg.test('book');    //true
reg.test('boak');    //true
 
reg = /^[a-zA-Z]([a-zA-Z])\1[a-zA-Z]$/;    //\1位置内容与第一个分组内容相同
reg.test('book');    //true
reg.test('boak');    //false
 
reg = /^([a-zA-Z])[a-zA-Z]\1[a-zA-Z]$/;    //\1位置内容与第一个分组内容相同
reg.test('book');    //false
reg.test('boak');    //false
reg.test('bobk');    //true
```
---

## 中括号 ==[]==
+ ==[]里面没有多位数==
+ ==[]里面字符大多为原意==
---

## 正则捕获
### exec()
>**exec() 方法用于检索字符串中的正则表达式的匹配。==如果字符串中有匹配的值返回该匹配值，否则返回 null==。**
+ 每次只捕获一个匹配项
+ 如果正则表达式==带修饰符g==的话，则每执行完一次就会修改正则实例的lastIndex属性，从而实现捕获多个匹配项
+ 如果正则表达式==不带修饰符g==的话，那么exec()之后reg.lastIndex还是0，如果带g的话，test()和exec()都会改变lastIndex
+ **<font color=red>使用 test() 或 exec() 时，特别注意正则带 g 的情况</font>**

| 参数 | 描述 |
| --- | --- |
| str |要匹配正则表达式的字符串。|
|<font color=red>返回值</font>|`null或数组`。如果==匹配失败，exec() 方法返回 null，并将正则表达式的 lastIndex 重置为 0==。<br>如果==匹配成功，exec() 方法返回一个数组，并更新正则表达式对象的 lastIndex 属性==。完全匹配成功的文本将作为返回数组的第一项，从第二项起，后续每项都对应一个匹配的捕获组|
```javascript
// 这是一个国内身份证号码的正则，之所以加这么多小括号是为了便于分组捕获一些关键信息
let reg = /^([1-8]\d{5})([1-2]\d{3})([0-1]\d)([0-3]\d)\d{2}(\d)(\d|X)$/;
reg.exec('431101199912311193');
// 捕获结果["431101199912311193", "431101", "1999", "12", "31", "9", "3", index: 0, input: "431101199912311193", groups: undefined]
// 对应解释[捕获到的内容, 分组1内容, 分组2内容, 分组3内容, 分组4内容, 分组5内容, 分组6内容, index：开始匹配内容时的索引, input：原文本 ...]
```

### match() ==String方法==
>**match() 方法可在字符串内检索指定的值，或找到一个或多个正则表达式的匹配。**
+ ==如果正则表达式不带修饰符g的话，match()和exec()返回值一样，效果一样。==

[MDN链接](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/String/match)
| 参数 | 描述 |
| --- | --- |
| regexp |==一个正则表达式对象或者任何具有 Symbol.match 方法的对象==。如果 regexp 不是 RegExp 对象并且对象上无 Symbol.match 方法，则会使用 new RegExp(regexp) 将其隐式地转换为 RegExp。如果你==没有给出任何参数并直接使用 match()== 方法，你将会==得到一个包含空字符串的数组：[""]，因为这等价于 match(/(?: )/)==|
|<font color=red>返回值</font>|`null或数组`。如果==使用 g 标志==，则将返回与完整正则表达式匹配的所有结果，但==不会返回捕获组==。<br>如果==未使用 g 标志==，则仅返回第一个完整匹配及其相关的捕获组（Array）。在这种情况下，返回的项目将具有如下所述的其他属性。|
```javascript
//如果不带g
let reg = /\d+/;
reg.exec('2099年12月31日');//["2099", index: 0, input: "2099年12月31日", groups: undefined]
'2099年12月31日'.match(reg);//["2099", index: 0, input: "2099年12月31日", groups: undefined]
//如果带g
let reg = /\d+/g;
reg.exec('2099年12月31日');//["2099", index: 0, input: "2099年12月31日", groups: undefined]
'2099年12月31日'.match(reg);//["2099", "12", "31"]
```

### replace() ==String方法==
>**replace() 方法用于在字符串中用一些字符替换另一些字符，或==替换一个与正则表达式匹配的子串==。**
+ ==不改变原字符串==
+ 该方法更多的是配合正则使用。
+ 如果==第二个参数是函数==，那么==如果正则不匹配==的话，==该函数不会执行==。

[MDN链接](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/String/replace)
| 参数 | 描述 |
| --- | --- |
|str / ==regexp==|`必需`。str 是一个将被 newStr 替换的 字符串。其被视为一整个字符串，而不是一个正则表达式。仅第一个匹配项会被替换。<br>==一个RegExp 对象或者其字面量。该正则所匹配的内容会被第二个参数的返回值替换掉==。|
|newStr / function|`必需`。newStr 用于替换掉第一个参数在原字符串中的匹配部分的字符串。该字符串中可以内插一些特殊的变量名。参考MDN文档。==function== 是一个用来创建新子字符串的函数，==该函数的返回值将替换掉第一个参数匹配到的结果==。|
|<font color=red>返回值</font>|`String`。一个新的字符串，是用 replacement 替换了 regexp 的第一次匹配或所有匹配之后得到的。|
> **案例：时间字符串处理**
```javascript
//时间字符串处理
let time = '2099-12-31';
let reg = /^(\d{4})-(\d{1,2})-(\d{1,2})$/;
time.replace(reg, '$1年$2月$3日');    //2099年12月31日
```
> **案例：单词首字母大写**
+ ==当replace第二个参数是函数时，正则匹配几次该函数就会执行几次，每次的函数实参跟exec()捕获结果一致（[匹配的字符串，分组1，分组2...，原文本]）。==
```javascript
//单词首字母大写
let str = 'good good study, day day up!';
let reg = /\b([a-zA-z])([a-zA-z]*)\b/g;
str.replace(reg, (...args) => {
    let [, $1, $2] = args;
    return $1.toUpperCase() + $2;
})    //"Good Good Study, Day Day Up!"
```
> **案例：aabbccdd 变 ababcdcd**
```javascript
// aabbccdd 变 ababcdcd
let str = 'aabbccdd';
let reg = /([a-zA-z])\1([a-zA-z])\2/g;
str.replace(reg, '$1$2$1$2')    // "ababcdcd"
```
> **案例：js-plus-plus 变 jsPlusPlus**
```javascript
// js-plus-plus 变 jsPlusPlus
let str = 'js-plus-plus';
// 其他方法
let arr = str.split('-');
let newStr = arr[0] + arr[1].slice(0,1).toUpperCase() + arr[1].slice(1) + arr[2].slice(0,1).toUpperCase()+arr[2].slice(1);
console.log(newStr) // "jsPlusPlus"
// 正则
let reg = /-([a-zA-z])/g;
str.replace(reg, function($, $1){
    return $1.toUpperCase();
})    // "jsPlusPlus"
```
> **案例：aaabbcccc 变 abc**
```javascript
// aaabbcccc 变 abc
let str = 'aaabbcccc';
let reg = /([a-z])\1+/g;
str.replace(reg, '$1')    // "abc"
```
---

## RegExp.\$1-$9
+ RegExp.\$1，RegExp.\$2...，RegExp.\$9分别表示当前正则实例匹配捕获到的==分组捕获内容==。==$1表示正则表达式里的第一个分组，如此类推，这里最多9个==。
```javascript
let str = '2099年12月31日';
let reg = /\d+/g;
reg.test(str);
console.log(RegExp.$1)    //""
reg = /(\d+)/g;    //正则表达式里必须要有分组才有效果
reg.test(str);
console.log(RegExp.$1)    //2099
reg.test(str);    //前面说到test()也是会改变lastIndex的
console.log(RegExp.$1)    //12
reg.test(str);
console.log(RegExp.$1)    //31
```
---

## 正则的贪婪性
+ ==默认情况==下，正则捕获的时候，是按照当前==正则所匹配的最长结果来捕获==的，称为正则捕获的==贪婪==性。
+ 在==量词元字符后面加上<font color=red>?</font>== 即可取消正则捕获贪婪性（==按照正则匹配的最短结果捕获==）。
```javascript
let str = '2099年12月31日';
//贪婪匹配
let reg = /\d+/g;    
str.match(reg);    //["2099", "12", "31"]
//懒惰匹配
reg = /\d+?/g;    
str.match(reg);    //["2", "0", "9", "9", "1", "2", "3", "1"]
```
---

## 正向预查 / 反向预查
> **正向预查 ==(?=)==**
+ (?=xxx)可理解为：==匹配的内容必须在xxx前面==
```javascript
let str = '[object Array]';
let reg1 = /\b(Array)/i;
console.log(reg1.exec(str));
// [ 'Array]', 'Array', index: 8, input: '[object Array]', groups: undefined] 匹配到的是'Array]'

let reg2 = /\b(Array)(?=])/i;
console.log(reg2.exec(str));
// [ 'Array', 'Array', index: 8, input: '[object Array]', groups: undefined] 匹配到的是'Array'
```

> **正向否定预查 ==(?!)==**
+ (?!xxx)可理解为：==匹配的内容必须在<font color=red>非xxx</font>前面==
```javascript
let str = '1a2b3a4b5a6b';

let reg1 = /\d/g;
console.log(str.match(reg1));
// ['1', '2', '3', '4', '5', '6']

let reg2 = /\d(?!b)/g; // 后面不为b的数字
console.log(str.match(reg2));
// ['1', '3', '5']
```

> **反向预查 ==(?<=)==**
+ (?<=xxx)可理解为：==匹配的内容必须在xxx后面==
```javascript
let str = '1a2b3a4b5a6b';

let reg1 = /\d/g;
console.log(str.match(reg1));
// ['1', '2', '3', '4', '5', '6']

let reg2 = /(?=b)\d/g; // 错误写法
console.log(str.match(reg2));
// null

let reg3 = /(?<=b)\d/g; // 前面为b的数字
console.log(str.match(reg3));
// ['3', '5']
```

> **反向否定预查 ==(?<!)==**
+ (?<!xxx)可理解为：==匹配的内容必须在<font color=red>非xxx</font>后面==
```javascript
let str = '1a2b3a4b5a6b';

let reg1 = /\d/g;
console.log(str.match(reg1));
// ['1', '2', '3', '4', '5', '6']

let reg2 = /(?!b)\d/g; // 错误写法
console.log(str.match(reg2));
// ['1', '2', '3', '4', '5', '6']

let reg3 = /(?<!b)\d/g; // 前面不为b的数字
console.log(str.match(reg3));
// ['1', '2', '4', '6']
```
---

## 捕获分组 ==?:==
+ ==()== 表示捕获分组，()会把每个分组里的匹配的值保存起来，使用<font color=red>$n</font>(n是一个数字，表示第n个捕获组的内容)
+ <font color=red>(?: )</font>表示非捕获分组，和捕获分组唯一的区别在于，==非捕获分组匹配的值不会保存起来==
```javascript
let str = 'abcabc';

let reg1 = /abc/;
reg1.exec(str);
// ['abc', index: 0, input: 'abcabc', groups: undefined]

let reg2 = /(a)(b)(c)/;
reg2.exec(str);
// ['abc', 'a', 'b', 'c', index: 0, input: 'abcabc', groups: undefined]

let reg3 = /(?:a)(b)(c)/;
reg3.exec(str);
// ['abc', 'b', 'c', index: 0, input: 'abcabc', groups: undefined]
```
---

## 匹配空字符
```javascript
let str = 'dsa';
let reg = new RegExp("", "g");
str.replace(reg, '-'); // "-d-s-a-"
```
> **案例：10000000000 变 10,000,000,000**
```javascript
// 10000000000 变 10,000,000,000
let str = '10000000000';
let reg = /(?=\B(\d{3})+$)/g;
str.replace(reg, ',')    // "10,000,000,000"
```
---

## 模板替换
>**简单举例**
```javascript
let str = 'My name is {{name}}, I\'m {{age}} years old.';
let reg = /{{(.+?)}}/g;
str.replace(reg, function($, key){
    return {
        name: 'Sam',
        age: 20
    }[key]
})
// "My name is Sam, I'm 20 years old."
```
>**举例**
```html
<body>
    <div id="article"></div>
    <script type="text/html" id="tpl">
        <div>
            <h3>{{title}}</h3>
            <p>{{author}}</p>
            <div>{{content}}</div>
        </div>
    </script>
    <script>
        let tpl = document.getElementById('tpl');
        let article = document.getElementById('article');
        let articleObj = {
            title: '春晓',
            author: '孟浩然',
            content: '春眠不觉晓，</br>处处闻啼鸟，</br>夜来风雨声，</br>花落知多少。'
        };
        let reg = /{{(.+?)}}/g;
    
        article.innerHTML = tpl.innerHTML.replace(reg, function($, key){
            return articleObj[key];
        })
    </script>
</body>
```