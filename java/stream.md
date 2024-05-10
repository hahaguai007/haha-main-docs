# Stream

## 什么是Stream流

Java Stream 是 Java 8 引入的一个新的抽象层，用于对集合数据进行操作和处理。它提供了一种更简洁、更灵活的方式来处理集合数据，可以极大地简化代码，并提高代码的可读性和可维护性。
使用 Java Stream 可以实现各种集合操作，如过滤、映射、排序、聚合等。它的设计理念主要包括：

1. **流式处理（Stream）:** Java Stream 提供了一种类似于流式处理的方式来操作集合数据。它允许你对集合中的元素进行一系列的连续操作，而不需要显式地使用循环。

2. **惰性求值（Lazy Evaluation）:** Stream 中的操作是惰性求值的，即在调用终端操作之前，中间操作不会立即执行。这意味着你可以构建一个操作序列，然后在需要时一次性执行，以减少不必要的计算。

3. **函数式编程（Functional Programming）:** Java Stream 基于函数式编程的理念，提供了丰富的中间操作（Intermediate
   Operation）和终端操作（Terminal Operation），可以通过函数式接口来实现自定义操作。

## 流的分类

> 了解这些流的分类和特点可以帮助你更好地选择和使用适合特定场景的流，从而提高Java程序的效率和可读性。

### 1. 根据数据处理方式

* 顺序流（Sequential Streams）：
  这是最常见的流类型，流的操作是按顺序在单个线程上执行的。使用顺序流时，每个元素一个接一个地进行操作，直到所有元素处理完成。可以通过
  stream() 方法从集合中创建顺序流。
* 并行流（Parallel Streams）：
  并行流利用多核处理器的优势，将流的元素分配到多个线程上，使得每部分数据的处理可以同时（并行）进行。并行流可以通过
  parallelStream() 方法从集合中创建，或者通过 parallel() 方法将已存在的流转换为并行流。

### 2. 根据操作类型

* 中间操作（Intermediate Operations）：
  这些操作都会返回一个新的流，允许多个操作可以连接起来形成一个查询。中间操作不会执行任何实际的数据处理，它们是惰性的，直到遇到终端操作才开始计算。常见的中间操作包括
  map、filter、sorted 等。
* 终端操作（Terminal Operations）：
  终端操作会从流的流水线生成结果。当一个终端操作执行时，它会触发前面的中间操作进行实际的数据处理。终端操作是立即执行的，并且一旦执行，流就被消费掉了不能再使用。常见的终端操作包括
  forEach、collect、reduce、first、anyMatch 等。

### 3. 根据数据源类型

* 集合流（Collection-based Streams）：
  最常用的流类型，通常通过调用集合（如 List、Set）的 stream() 或 parallelStream() 方法获得。
* 数组流（Array-based Streams）：
  可以通过 Arrays.stream(T[] array) 方法从数组创建流。
* 文件流（File-based Streams）：
  通过 Files 类的静态方法（如 Files.lines(Path path)）从文件中创建流，通常用于逐行读取文件。
* 生成流（Generating Streams）：
  通过 Stream.generate() 或 Stream.iterate() 方法生成的流，可以无限生成数据。

### 4. 根据返回数据类型

* 对象流（Object Streams）：
  处理对象类型数据的流，例如 `Stream<T>`。
* 原始数据类型流（Primitive Streams）：
  为了性能优化，Java 8 引入了三种基本数据类型的特化流：IntStream、LongStream、DoubleStream。这些流拥有处理原始类型数据的特定方法，如
  sum()、average() 等。

## 获取流的方式

### 1. 集合类的流

> 最直接的方式来获取流是通过Java集合框架（如List, Set）的stream()方法。如果想利用并行处理的优势，可以使用parallelStream()方法。

```java
List<String> list = Arrays.asList("Alice", "Bob", "Charlie");
Stream<String> stream = list.stream();
Stream<String> parallelStream = list.parallelStream();
```

### 2. 数组的流

> 对于数组，可以通过Arrays.stream()方法获取流。这个方法允许你从数组或数组的某个部分创建流。
> 数组的流支持所有通常的流操作，包括但不限于`filter`、`map`、`reduce`、`collect`、`sorted`等

```java
int[] numbers = {1, 2, 3, 4, 5};
IntStream intStream = Arrays.stream(numbers);
// 过滤操作允许从流中选出符合特定条件的元素。
int[] data = {1, 2, 3, 4, 5, 6};
IntStream filteredStream = Arrays.stream(data).filter(x -> x % 2 == 0);
filteredStream.forEach(System.out::println); // 输出 2, 4, 6
// 映射操作将流中的每个元素转换成另一种形式或值。
String[] names = {"Alice", "Bob", "Charlie"};
Stream<Integer> lengths = Arrays.stream(names).map(String::length);
lengths.forEach(System.out::println); // 输出名字的长度
// 排序操作可以将流中的元素按自然顺序或提供的比较器排序。
int[] randomNumbers = {5, 3, 9, 1, 6};
Arrays.stream(randomNumbers).sorted().forEach(System.out::println); // 输出排序后的数组
// 归约操作将流中的所有元素组合成一个结果。
int[] numbers = {1, 2, 3, 4, 5};
int sum = Arrays.stream(numbers).reduce(0, (a, b) -> a + b);
System.out.println("Sum: " + sum); // 输出求和结果
// 通过收集操作，可以将流转换为其他形式，如集合。
String[] languages = {"Java", "Python", "C++", "JavaScript"};
List<String> list = Arrays.stream(languages).collect(Collectors.toList());
System.out.println("List: " + list); // 输出列表
```

### 3. 静态方法生成流

> Stream类本身提供了几个静态方法来生成流：

* Stream.of()：从一组明确的值创建流。

```java
Stream<Integer> numberStream = Stream.of(1, 2, 3, 4);
```

* Stream.iterate()：生成无限流，通过重复应用函数至初始种子值。Java 9引入了有界的iterate方法。

```java
Stream<Integer> infiniteStream = Stream.iterate(0, n -> n + 1);
Stream<Integer> boundedStream = Stream.iterate(0, n -> n < 20, n -> n + 2);
```

* Stream.generate()：通过提供的Supplier接口来生成无限流。

```java
Stream<Double> randomStream = Stream.generate(Math::random);
```

### 4. 从文件获取流

* Java的java.nio.file.Files类的一些静态方法可以用来直接从文件中创建流，非常适合逐行读取文件：

```java
Path path = Paths.get("data.txt");
try (Stream<String> lines = Files.lines(path)) {
	lines.forEach(System.out::println);
}
```

### 5. 其他源

* 字符串流：可以通过字符串的字符创建流。

```java
IntStream chars = "Hello, World!".chars();
```

* 正则表达式：使用Pattern类分割字符串为流。

```java
Stream<String> words = Pattern.compile(", ").splitAsStream("Alice, Bob, Charlie");
```

* Random类流：Java 8 引入的Random类方法可以生成原始类型的流（如ints, longs, doubles）。

```java
new Random().ints(5).forEach(System.out::println); // 生成五个随机整数的流
```

## 常用方法

> 这些方法只是 Stream 类中的一部分，你可以根据实际需要选择适合的方法来操作流。

### 1. **中间操作方法**

- **filter(`Predicate<T>` predicate)：** 根据给定的条件过滤流中的元素。
- **map(`Function<T, R>` mapper)：** 将流中的每个元素映射为另一个元素。
- **flatMap(`Function<T, Stream<R>>` mapper)：** 将流中的每个元素映射为一个流，并将这些流连接成一个流。
- **distinct()：** 去除流中重复的元素。
- **sorted()：** 对流中的元素进行排序。
- **limit(long maxSize)：** 截断流，保留指定数量的元素。
- **skip(long n)：** 跳过前 n 个元素。
- **peek(`Consumer<T>` action)：** 对流中的每个元素执行指定的操作，返回一个新的流。

### **2. 终端操作方法**

- **collect(`Collector<T, A, R>` collector)：** 将流中的元素收集到一个集合中。
- **forEach(`Consumer<T>` action)：** 对流中的每个元素执行指定的操作。
- **reduce(`BinaryOperator<T>` accumulator)：** 将流中的元素依次进行归约操作。
- **count()：** 计算流中的元素数量。
- **min(`Comparator<T>` comparator)：** 找出流中的最小元素。
- **max(`Comparator<T>` comparator)：** 找出流中的最大元素。
- **anyMatch(`Predicate<T>` predicate)：** 判断流中是否存在满足指定条件的元素。
- **allMatch(`Predicate<T`> predicate)：** 判断流中的所有元素是否都满足指定条件。
- **noneMatch(`Predicate<T>` predicate)：** 判断流中是否没有任何元素满足指定条件。
- **findFirst()：** 返回流中的第一个元素（如果存在）。
- **findAny()：** 返回流中的任意一个元素（如果存在）。
- ### 3. **生成流的静态方法**

- **of(T... values)：** 根据指定的元素创建一个流。
- **iterate(T seed, `UnaryOperator<T>` f)：** 从初始值开始，对后续的元素执行指定操作来生成流。
- **generate(`Supplier<T>` s)：** 使用提供的 Supplier 来生成流中的元素。

### **4. 操作方法例子**

#### 中间操作

1. **filter(`Predicate<T>` predicate)：** 过滤出年龄大于等于 20 岁的学生。

    ```java
    List<Student> filteredStudents = students.stream()
                                            .filter(student -> student.getAge() >= 20)
                                            .collect(Collectors.toList());
    System.out.println(filteredStudents);
    // 输出：[Student{name='Alice', age=20}, Student{name='Bob', age=22}, Student{name='David', age=21}]
    
    ```
2. **map(`Function<T, R>` mapper)：** 将学生对象转换为姓名列表。

 ```java
 List<String> studentNames = students.stream()
                                     .map(Student::getName)
                                     .collect(Collectors.toList());
 System.out.println(studentNames);
 // 输出：[Alice, Bob, Charlie, David, Eva]
 ```

3. **sorted()：** 按年龄升序排序学生。

    ```java
    List<Student> sortedStudents = students.stream()
                                           .sorted(Comparator.comparingInt(Student::getAge))
                                           .collect(Collectors.toList());
    System.out.println(sortedStudents);
    // 输出：[Student{name='Charlie', age=18}, Student{name='Eva', age=19}, Student{name='Alice', age=20}, Student{name='David', age=21}, Student{name='Bob', age=22}]
    ```

4. **distinct()：** 去除重复的学生。

    ```java
    List<Student> distinctStudents = students.stream()
                                              .distinct()
                                              .collect(Collectors.toList());
    System.out.println(distinctStudents);
    // 输出原始列表，因为没有重复的学生对象
    ```
5. **skip() ：** 跳过第一个学生

    ```java
    List<Student> filteredStudents = students.stream()
                                                     .skip(1) // 跳过第一个学生
                                                     .collect(Collectors.toList());
    ```

#### 终端操作

1. **collect(`Collector<T, A, R>` collector)：** 将学生对象收集到一个列表中。

    ```java
    List<Student> collectedStudents = students.stream()
                                             .filter(student -> student.getAge() >= 20)
                                             .collect(Collectors.toList());
    System.out.println(collectedStudents);
    // 输出：[Student{name='Alice', age=20}, Student{name='Bob', age=22}, Student{name='David', age=21}]
    ```

2. **forEach(`Consumer<T>` action)：** 遍历并打印每个学生对象。

    ```java
    students.stream()
            .forEach(System.out::println);
    // 输出每个学生对象的信息
    ```

3. **reduce(`BinaryOperator<T>` accumulator)：** 计算所有学生的年龄总和。

    ```java
    int totalAge = students.stream()
                          .mapToInt(Student::getAge)
                          .reduce(0, Integer::sum);
    System.out.println("Total age: " + totalAge);
    // 输出：Total age: 100
    ```

4. **count()：** 计算学生的数量。

    ```java
    long count = students.stream().count();
    System.out.println("Number of students: " + count);
    // 输出：Number of students: 5
    ```

5. **min(`Comparator<T>` comparator)：** 找出年龄最小的学生。

    ```java
    Optional<Student> youngestStudent = students.stream()
                                                .min(Comparator.comparingInt(Student::getAge));
    youngestStudent.ifPresent(student -> System.out.println("Youngest student: " + student));
    // 输出：Youngest student: Student{name='Charlie', age=18}
    ```

6. **max(`Comparator<T>` comparator)：** 找出年龄最大的学生。

    ```java
    Optional<Student> oldestStudent = students.stream()
                                              .max(Comparator.comparingInt(Student::getAge));
    oldestStudent.ifPresent(student -> System.out.println("Oldest student: " + student));
    // 输出：Oldest student: Student{name='Bob', age=22}
    ```

7. **findFirst()：**

   `findFirst()` 方法用于查找流中的第一个元素。对于顺序流，它返回流中的第一个元素；对于并行流，它返回任何一个元素。如果流为空，则返回一个空的
   Optional 对象。

    ```java
    Optional<Student> firstStudent = students.stream().findFirst();
    firstStudent.ifPresent(student -> System.out.println("First student: " + student));
    ```

8. **findAny()：**

   `findAny()` 方法用于查找流中的任意一个元素。对于顺序流和串行流，它的行为与 `findFirst()`
   方法一样；对于并行流，它会尽量返回最快可用的元素。如果流为空，则返回一个空的 Optional 对象。

    ```
    Optional<Student> anyStudent = students.stream().findAny();
    anyStudent.ifPresent(student -> System.out.println("Any student: " + student));
    ```

9. **anyMatch(`Predicate<T> `predicate)：**

   `anyMatch()` 方法用于检查流中是否至少有一个元素满足指定条件。如果存在满足条件的元素，则返回 true；否则返回 false。

    ```
    boolean anyAdult = students.stream().anyMatch(student -> student.getAge() >= 18);
    System.out.println("Is there any adult student? " + anyAdult);
    ```

## 常用操作练习

###### 1.通过学生姓名查询学生

```java
 public static Student findStudentByName(List<Student> students, String name) {
        return students.stream()
                      .filter(student -> student.getName().equals(name))
                      .findFirst()
                      .orElse(null); // 如果找不到学生，则返回 null
    }
```

###### 2.list和Map相互转换

```java
// 将list转换为以姓名为键的Map
Map<String, Student> studentMap = students.stream()
             .collect(Collectors.toMap(Student::getName, student -> student));
// 输出映射
studentMap.forEach((name, student) -> System.out.println(name + ": " + student));
// map转list
 Map<String, Student> studentMap = Map.of(
            "Alice", new Student("Alice", 20),
            "Bob", new Student("Bob", 22),
            "Charlie", new Student("Charlie", 18)
        );

// 将学生映射转换为学生列表
List<Student> studentList = studentMap.entrySet().stream()
                                               .map(Map.Entry::getValue)
                                               .collect(Collectors.toList());

// 输出学生列表
studentList.forEach(System.out::println);
```

###### 3.根据 Map 中的对象的某个属性进行排序，并将排序后的对象返回到列表中

```java
Map<String, Student> studentMap;
// 根据学生的年龄属性排序，并将排序后的学生对象返回到列表中
List<Student> sortedStudents = studentMap.values().stream()                                                  .sorted(Comparator.comparingInt(Student::getAge)).collect(Collectors.toList());
        // 输出排序后的学生列表
        sortedStudents.forEach(System.out::println);
```

###### 4.将学生的姓名和年龄组合成一个字符串，并将这些字符串设置为学生对象的姓名属性

```java
 // 将学生列表中的学生姓名和年龄组合成一个字符串，并设置为学生的姓名属性
        List<Student> modifiedStudents = students.stream()
              .map(student -> {
                  String newName = student.getName() + "-" + student.getAge();
                                                     student.setName(newName);
                                                     return student;
                                                 }).collect(Collectors.toList());
// 输出修改后的学生列表
 modifiedStudents.forEach(System.out::println);
```

###### 5.查询姓名以`A`开头的，并跳过第一个学生

```java
List<Student> filteredStudents = students.stream()
                                                 .filter(student -> student.getName().startsWith("A"))
                                                 .skip(1) // 跳过第一个姓 "A" 的学生
                                                 .collect(Collectors.toList());
```

###### 6.将给定的学生信息字符串转换为学生对象，并将这些学生对象封装到一个**list**和一个**Map**中

```java
// 给定的学生信息字符串数组
        String[] studentInfos = {"tom1,16", "peter2,17", "alice3,18", "zhangsan,19", "lisi,20", "wangwu,21"};

        // 将学生信息字符串数组转换为学生对象列表
        List<Student> studentsList = Arrays.stream(studentInfos)
                                           .map(info -> {
                                               String[] parts = info.split(",");
                                               String name = parts[0];
                                               int age = Integer.parseInt(parts[1]);
                                               return new Student(name, age);
                                           })
                                           .collect(Collectors.toList());

        // 将学生信息字符串数组转换为学生对象映射
        Map<String, Student> studentsMap = Arrays.stream(studentInfos)
                                                 .map(info -> {
                                                     String[] parts = info.split(",");
                                                     String name = parts[0];
                                                     int age = Integer.parseInt(parts[1]);
                                                     return new Student(name, age);
                                                 })
                                                 .collect(Collectors.toMap(Student::getName, student -> student));

        // 输出学生对象列表
        System.out.println("Students List:");
        studentsList.forEach(System.out::println);

        // 输出学生对象映射
        System.out.println("\nStudents Map:");
        studentsMap.forEach((name, student) -> System.out.println(name + ": " + student));
```