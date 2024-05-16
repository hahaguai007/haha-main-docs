# **JavaScript**中的数组Array
## 数组的操作

#### 1. 添加对象到数组

> 要向数组中添加一个对象，你可以使用 push() 方法或 unshift() 方法。

```javascript
// 创建一个对象
var newObj = {id: 1, name: 'John'};

// 添加到数组末尾
array.push(newObj);

// 或者添加到数组开头
array.unshift(newObj);
```

#### 2. 从数组中删除对象

> 你可以使用 pop() 方法从数组末尾删除对象，或者使用 shift() 方法从数组开头删除对象。你还可以使用 splice()
> 方法根据索引删除指定位置的对象。

```javascript
// 从末尾删除一个对象
var deletedObj = array.pop();

// 从开头删除一个对象
var deletedObj = array.shift();

// 根据索引删除对象
var index = array.findIndex(obj => obj.id === 1);
if (index !== -1) {
    var deletedObjs = array.splice(index, 1); // 删除指定位置的对象
}
```

#### 3. 修改数组中的对象

> 你可以直接通过索引访问数组中的对象，并修改其属性。

```javascript
// 根据索引修改对象属性
array[0].name = 'Alice';

// 使用 findIndex 找到对象的索引
var index = array.findIndex(obj => obj.id === 1);
if (index !== -1) {
    // 修改对象的属性
    array[index].name = 'Bob';
}
```

### 4. 计算属性

> 操作数组中的对象，包括添加、删除和修改。

> 使用reduce（）方式，简化数组的操作，减少代码量。
> 关于reduce的详细介绍：https://blog.csdn.net/weixin_39570423/article/details/138953849

#### 1. 求和

```javascript
const numbers = [1, 2, 3, 4, 5];
let sum = 0;
for (let i = 0; i < numbers.length; i++) {
    sum += numbers[i];
}
console.log(sum); // 输出: 15
// 使用 reduce() 方法
const numbers = [1, 2, 3, 4, 5];
const sum = numbers.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
console.log(sum); // 输出: 15
```

#### 2. 展开数组

```javascript
const numberArray = [[1, 2], [3, 4], [5, 6]];
const newnumberArray = numberArray.reduce((start, curr) => start.concat(curr), []);
// 结果: [1, 2, 3, 4, 5, 6]
```

#### 3. 分组

```javascript
const students = [
    {name: 'Alice', age: 11},
    {name: 'Bob', age: 11},
    {name: 'Charlie', age: 12},
    {name: 'Dave', age: 12}
];
// 使用 reduce 方法根据 age 属性进行分组
const groupedStudents = students.reduce((groups, student) => {
    const age = student.age;
    if (!groups[age]) {
        groups[age] = [];
    }
    groups[age].push(student);
    return groups;
}, {});

// 结果
// {
//     '11' : [{name: 'Alice', age: 11}, {name: 'Bob', age: 11}],
//     '12' : [{name: 'Charlie', age: 12}, {name: 'Dave', age: 12}]
// }
```

#### 4. 过滤

> 查询年龄11和12的学生

```javascript
const students = [
    {name: 'Alice', age: 11},
    {name: 'Bob', age: 12},
    {name: 'Charlie', age: 13},
    {name: 'Dave', age: 14}
];

// 使用 reduce 方法查询年龄为11和12岁的学生
const filteredStudents = students.reduce((filtered, student) => {
    if (student.age === 11 || student.age === 12) {
        filtered.push(student);
    }
    return filtered;
}, []);
console.log(filteredStudents);
// 普通的查询方式
const students = [
    {name: 'Alice', age: 11},
    {name: 'Bob', age: 12},
    {name: 'Charlie', age: 13},
    {name: 'Dave', age: 14}
];
// 查询年龄为11和12岁的学生
const filteredStudents = students.filter(student => student.age === 11 || student.age === 12);
console.log(filteredStudents);
```

#### 5. 遍历

* 使用 for 循环遍历数组

> 使用传统的 for 循环可以遍历数组的每个元素。

```javascript
const numbers = [1, 2, 3, 4, 5];

for (let i = 0; i < numbers.length; i++) {
    console.log(numbers[i]);
}
```

* 使用 forEach 方法遍历数组

> forEach 方法可以遍历数组的每个元素，并对每个元素执行指定的操作。

```javascript
numbers.forEach(number => {
    console.log(number);
});
```

* 使用 map 方法遍历数组

> map 方法可以遍历数组的每个元素，并对每个元素执行指定的操作，然后返回一个新的数组。

```javascript
const squaredNumbers = numbers.map(number => {
    return number * number;
});

console.log(squaredNumbers);
```

* 使用 filter 方法遍历数组

> filter 方法可以遍历数组的每个元素，并根据指定条件过滤出符合条件的元素，然后返回一个新的数组。

```javascript
const evenNumbers = numbers.filter(number => {
    return number % 2 === 0;
});

console.log(evenNumbers);
```

* 使用 for...of 循环遍历数组

> for...of 循环可以遍历数组的每个元素。

```javascript
for (const number of numbers) {
    console.log(number);
}
```

#### 6. 删除

* 使用 `splice()` 方法删除元素.

> `splice()` 方法会直接修改原数组

```javascript
let numbers = [1, 2, 3, 4, 5];

// 删除数组中索引为 2 的元素
numbers.splice(2, 1);

console.log(numbers); // 输出 [1, 2, 4, 5]
```

* 使用 `filter()` 方法删除元素.

> `filter()` 方法可以根据指定条件过滤数组中的元素，并返回一个新的数组，你可以使用它来删除特定元素.

```javascript
let numbers = [1, 2, 3, 4, 5];

// 使用 filter() 方法删除数组中的某个元素
numbers = numbers.filter(number => number !== 3);

console.log(numbers); // 输出 [1, 2, 4, 5]

```

* 使用 `pop() `方法删除末尾元素.

> `pop()` 方法可以删除数组末尾的元素，并返回被删除的元素。

```javascript
let numbers = [1, 2, 3, 4, 5];

numbers.pop(); // 删除末尾的元素

console.log(numbers); // 输出 [1, 2, 3, 4]
```

* 使用 `shift()` 方法删除开头元素.

> `shift()` 方法可以删除数组首个元素，并返回被删除的元素。

```javascript
let numbers = [1, 2, 3, 4, 5];

numbers.shift(); // 删除首个元素

console.log(numbers); // 输出 [2, 3, 4, 5]
```

* 使用 `slice()` 方法删除指定范围的元素.

> `slice()` 方法可以返回数组的一部分，你可以使用它来删除指定范围的元素。但是要注意，`slice()` 方法不会修改原数组，而是返回一个新的数组。

```javascript
let numbers = [1, 2, 3, 4, 5];

numbers = numbers.slice(0, 2).concat(numbers.slice(3)); // 删除索引为 2 的元素

console.log(numbers); // 输出 [1, 2, 4, 5]
```

* 使用 `delete` 操作符删除指定索引处的元素.

> 你还可以使用 `delete` 操作符来删除指定索引处的元素。但是要注意，`delete`操作符不会修改数组的长度，并且删除后的元素值变为
> undefined。

```javascript
let numbers = [1, 2, 3, 4, 5];

delete numbers[2]; // 删除索引为 2 的元素

console.log(numbers); // 输出 [1, 2, undefined, 4, 5]
```
## 简化数组的操作

关于reduce的详细介绍和使用：https://blog.csdn.net/weixin_39570423/article/details/138953849