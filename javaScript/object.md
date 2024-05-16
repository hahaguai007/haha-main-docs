# **JavaScript**中的对象**object**操作

## 对象的操作

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