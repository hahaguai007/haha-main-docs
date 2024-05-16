# **JavaScript**中的Set

## Set的操作

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