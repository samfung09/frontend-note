## object 对象数据类型-普通对象
>**{[key]: [value], ...}**
+ 由零到多组键值对（属性名：属性值）组成
+ ==属性名只能是字符串或者数字==
+ 点语法或者中括号形式调用（==obj.key / obj["key"]==）
+ 数字命名的属性只能用中括号形式调用（==obj[1]==）
+ 属性名不能重复，重复旧的会被新的覆盖
+ 给属性重新赋值，即为==修改属性==
+ 给不存在的属性赋值，即为==增加属性==
```javascript
let person = {
    name: 'Sam',
    gender: 'male',
    height: '186cm',
    weight: '75kg',
    1: 100
}
person.name  // 'Sam'
person.abc  // undefined
person.1  // SyntaxError 语法错误
person[1]  // 100

let s = 'gender';
person[s]  // 'male'

//属性删除
person.weight = null; // 假删除
delete person[1]; // 真删除
```