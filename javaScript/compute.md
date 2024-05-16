# JavaScript 中的对象、数组、集合的操作

## 一. 对象的操作

### 1. 创建对象

> 可以使用对象字面量 {} 或 new Object() 构造函数来创建对象。

```javascript
// 使用对象字面量创建对象
const person = {
    name: 'Alice',
    age: 30,
    gender: 'female'
};

// 使用构造函数创建对象
const car = new Object();
car.make = 'Toyota';
car.model = 'Camry';
car.year = 2020;
```

### 2. 访问对象属性

> 可以使用点操作符 .propertyName 或方括号操作符 [propertyName] 来访问对象的属性。

```javascript
console.log(person.name); // 输出 'Alice'
console.log(car['make']); // 输出 'Toyota'
```

### 3. 修改对象属性

> 可以直接为对象的属性赋新值来修改属性的值。

```javascript
person.age = 31;
car['year'] = 2021;
```

### 4. 添加对象属性

> 可以为对象添加新的属性。

```javascript
person.city = 'New York';
car.color = 'blue';
```

### 5. 删除对象属性

> 可以使用 delete 关键字来删除对象的属性。

```javascript
delete person.gender;
delete car['color'];
```

### 6. 检查对象属性是否存在

> 可以使用 in 运算符来检查对象是否具有某个属性。

```javascript
console.log('name' in person); // 输出 true
console.log('model' in car); // 输出 false
```

### 7. 获取对象的所有属性名

> 可以使用 Object.keys() 方法获取对象的所有属性名。

```javascript
const keys = Object.keys(person);
console.log(keys); // 输出 ['name', 'age', 'city']
```

### 8. entries 分割对象

> `Object.entries()` 是 JavaScript 中的一个静态方法，用于返回给定对象自身可枚举属性的键值对数组。

```javascript
const person = {
    name: 'Alice',
    age: 30,
    gender: 'female'
};
// 使用 Object.entries() 方法可以将 person 对象转换为一个键值对数组：
const entries = Object.entries(person);
console.log(entries);
// 输出结果：
[['name', 'Alice'],
    ['age', 30],
    ['gender', 'female']
]
Object.entries('abc')// [['0', 'a'], ['1', 'b'], ['2', 'c']]
Object.entries(100)   // []
```

### 9. `assign`, 深拷贝`（Deep Copy）`和浅拷贝`（Shallow Copy）

用于复制对象或数组的两种常见方法。它们之间的主要区别在于拷贝后的对象或数组是否与原始对象或数组共享内部对象的引用。

* **浅拷贝**（Shallow Copy）

> 浅拷贝创建了一个新的对象或数组，并将原始对象或数组的成员值（primitive
> values）复制到新对象或数组中。但是如果原始对象或数组包含了对象类型的成员（non-primitive
> values，如对象、数组），则新对象或数组只是复制了这些成员的引用，而不是复制了它们的值。

```javascript
const originalObject = {name: 'Alice', age: 30};
const shallowCopy = Object.assign({}, originalObject);

originalObject.age = 31;

console.log(shallowCopy); // 输出 { name: 'Alice', age: 31 }
```

在上面的例子中，虽然改变了 originalObject 的 age 属性，但 shallowCopy 中的 age 属性也跟着改变，这是因为 shallowCopy 中的
age 属性只是引用了 originalObject 中的 age 属性。

* **深拷贝**（Deep Copy）

> 深拷贝创建了一个新的对象或数组，并递归地将原始对象或数组的所有成员值复制到新对象或数组中，包括原始对象或数组的内部对象或数组。

```javascript
const originalObject = {name: 'Alice', age: 30, address: {city: 'New York', zip: '10001'}};
const deepCopy = JSON.parse(JSON.stringify(originalObject));

originalObject.address.city = 'Los Angeles';

console.log(deepCopy); // 输出 { name: 'Alice', age: 30, address: { city: 'New York', zip: '10001' } }
```

在上面的例子中，改变了 originalObject 中 address 对象的 city 属性，但是 deepCopy 中的 address 对象保持不变，这是因为
deepCopy 对象中的 address 对象是一个全新的对象，与 originalObject 中的 address 对象没有任何关联。

**总结**

浅拷贝只复制对象或数组的第一层结构，内部对象或数组的引用仍然是共享的；
深拷贝复制了对象或数组的所有层级结构，包括内部对象或数组，新对象或数组与原始对象或数组完全独立，不共享任何引用。

需要注意的是，深拷贝可能会导致循环引用的问题，比如对象 A 中包含了对象 B，而对象 B 又包含了对象
A，在深拷贝过程中可能会导致无限递归。因此，在实现深拷贝时需要考虑如何处理循环引用的情况。

## 二. 数组的操作

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

## 三. Map的操作

`Map` 是 JavaScript 中用于存储键值对的集合。它提供了一种更灵活的方式来管理数据，相比普通对象，`Map`
具有更好的迭代顺序和更多的方法。以下是一些常见的

### 1. 创建 Map

> 使用 `new Map()` 构造函数可以创建一个空的 Map。

````javascript
const myMap = new Map();
// 也可以在创建 Map 时传入一个包含键值对的数组。
const myMap = new Map([
    ['key1', 'value1'],
    ['key2', 'value2'],
    ['key3', 'value3']
]);
````

### 2. 添加元素

> 使用 `set(key, value)` 方法向 Map 中添加键值对。

```javascript
myMap.set('key4', 'value4');
```

### 3. 获取元素

> 使用 `get(key)` 方法从 Map 中获取指定键对应的值。

```javascript
console.log(myMap.get('key1')); // 输出 'value1'
```

### 4. 删除元素

> 使用 `delete(key)` 方法从 Map 中删除指定键及其对应的值。

```javascript
myMap.delete('key2');
```

### 5. 检查键是否存在

> 使用 `has(key)` 方法检查 Map 中是否存在指定键。

```javascript
console.log(myMap.has('key3')); // 输出 true
```

### 6. 获取键值对数量

> 使用 `size` 属性获取 Map 中键值对的数量。

```javascript
console.log(myMap.size); // 输出 3
```

### 7. 清空 Map

> 使用 `clear()` 方法清空 Map 中的所有键值对。

```javascript
myMap.clear();
```

### 8. 迭代 Map

> 可以使用 `forEach()` 方法、for...of 循环等方式对 Map 进行迭代。

```javascript
myMap.forEach((value, key) => {
    console.log(`${key}: ${value}`);
});

for (let [key, value] of myMap) {
    console.log(`${key}: ${value}`);
}
```

### 使用场景

#### 1. 数据处理和分析

> `Map` 可以用于数据处理和分析，比如统计词频、计算频率等。

```javascript
const words = ['apple', 'banana', 'apple', 'orange', 'banana', 'apple'];

const wordFrequency = new Map();
words.forEach(word => {
    const count = wordFrequency.get(word) || 0;
    wordFrequency.set(word, count + 1);
});

console.log(wordFrequency);
// 输出:
// Map(3) { 'apple' => 3, 'banana' => 2, 'orange' => 1 }
```

#### 2.数据结构映射

> `Map` 可以用于将一种数据结构映射为另一种数据结构，比如将对象转换为 `Map`，或将 `Map` 转换为对象。

```javascript
// 对象转换为 Map
const obj = {name: 'Alice', age: 30};
const map = new Map(Object.entries(obj));

// Map 转换为对象
const newObj = Object.fromEntries(map);
```

## 四. Set的操作

**Set** 是 JavaScript 中一种特殊的数据结构，它类似于数组，但是它的元素是唯一的，没有重复的值。Set
对象允许存储任何类型的值，包括原始值和对象引用。

### 1. 创建 Set

> 使用 `new Set()` 构造函数可以创建一个空的 `Set`。

```javascript
const mySet = new Set();
// 也可以在创建 Set 时传入一个数组，这样 Set 将会初始化为包含数组中唯一元素的集合。
const mySet = new Set([1, 2, 3, 4, 5]);
`````

### 2. 添加元素

> 使用 `add(value)` 方法向 `Set` 中添加新的元素。

```javascript
mySet.add(6);
```

### 3. 删除元素

> 使用 `delete(value)` 方法从 `Set` 中删除指定的元素。

```javascript
mySet.delete(3);
```

### 4. 检查元素是否存在

> 使用`has(value)` 方法检查 `Set` 中是否存在指定的元素。

```javascript
console.log(mySet.has(4)); // 输出 true
```

### 5. 获取 Set 的大小

> 使用 `size` 属性获取 `Set` 中元素的数量。

```javascript
console.log(mySet.size); // 输出 5
```

### 6. 清空 Set

> 使用 `clear()` 方法清空 `Set` 中的所有元素。

```javascript
mySet.clear();
```

### 7. 迭代 Set

> 可以使用 `forEach()` 方法或 for...of 循环等方式对 Set 进行迭代。

```javascript
mySet.forEach(value => {
    console.log(value);
});

for (let value of mySet) {
    console.log(value);
}
```

### 使用场景

#### 1. 数组去重

> `Set` 中的元素是唯一的，不会包含重复的值。因此，使用 Set 可以方便地实现数组去重的功能。

```javascript
const numbers = [1, 2, 3, 3, 4, 4, 5];
const uniqueNumbers = [...new Set(numbers)];
console.log(uniqueNumbers); // 输出 [1, 2, 3, 4, 5]
```

#### 2. 元素的存在性检查

> 由于 `Set` 中的元素是唯一的，因此可以使用 `Set` 来快速检查某个值是否存在于集合中。

```javascript
const mySet = new Set(['apple', 'banana', 'orange']);
console.log(mySet.has('banana')); // 输出 true
console.log(mySet.has('grape')); // 输出 false
```

#### 3. 集合运算

> `Set` 支持集合运算，包括并集、交集、差集等操作，可以帮助你处理集合之间的关系。

```javascript
const set1 = new Set([1, 2, 3]);
const set2 = new Set([3, 4, 5]);

// 并集
const union = new Set([...set1, ...set2]);
console.log(union); // 输出 Set { 1, 2, 3, 4, 5 }

// 交集
const intersection = new Set([...set1].filter(value => set2.has(value)));
console.log(intersection); // 输出 Set { 3 }

// 差集
const difference = new Set([...set1].filter(value => !set2.has(value)));
console.log(difference); // 输出 Set { 1, 2 }
```

#### 4. 缓存

> `Set` 可以用来存储临时的数据，比如存储用户的临时选择或状态，以便后续使用。

```javascript
const selectedItems = new Set();

// 用户选择了某个项目
selectedItems.add('item1');
selectedItems.add('item2');
selectedItems.add('item3');

// 检查用户是否选择了某个项目
console.log(selectedItems.has('item2')); // 输出 true
```

## 简化数组的操作

关于reduce的详细介绍和使用：https://blog.csdn.net/weixin_39570423/article/details/138953849