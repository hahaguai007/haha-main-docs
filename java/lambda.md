# Lambda

## 1. 什么是Lambda？

* Lambda 表达式是 Java 8 中引入的一种语法糖，用于简化函数式编程的语法。它允许开发者以更简洁的方式声明匿名函数。
* Lambda 表达式通常与函数式接口（Functional Interface）一起使用，这些接口只有一个抽象方法，可以通过 Lambda 表达式来实现。
* 使用 Lambda 表达式可以使代码更加紧凑和清晰，尤其是在需要传递行为（Behavior）的场景下，如集合的排序、过滤、映射等操作。

## 2. Lambda表达式形式

1. 基本语法：
   ```java
   (parameters) -> expression
   ```

   或者

   ```java
   (parameters) -> { statements; }
   ```
2. 参数列表：Lambda
   表达式的参数列表位于圆括号中，参数可以是零个或多个，如果只有一个参数，圆括号可以省略。如果没有参数，则使用空的圆括号 ()。
3. 箭头符号：箭头符号 -> 将参数列表与 Lambda 表达式的主体（或函数体）分隔开。
4. 表达式主体：表达式主体可以是一个表达式，也可以是一个代码块。如果表达式主体是一个表达式，则可以省略花括号 {} 和 return
   关键字，表达式的结果将自动返回。如果表达式主体是一个代码块，则需要使用花括号 {}，并且需要显式使用 return 关键字返回结果。

## 3.基本使用样例：

1. Lambda 表达式表示一个简单的函数：

   ```java
   () -> System.out.println("Hello, world!");
   ```

2. Lambda 表达式表示一个带有参数的函数：

   ```java
   (int a, int b) -> a + b
   ```

3. Lambda 表达式表示一个带有参数和代码块的函数：

   ```java
   (int a, int b) -> {
   int result = a + b;
   return result;
   }
   ```

4. Lambda 表达式表示一个不带参数的函数：

   ```java
   () -> {
   System.out.println("Hello, world!");
   }
   ```

5. Lambda 表达式表示一个接收单个参数的函数：

   ```java
   (String name) -> "Hello, " + name;
   ```

6. Lambda 表达式表示一个接收单个参数并返回计算结果的函数：

   ```java
   (int num) -> {
   return num * num;
   }
   ```

## 4. 核心内容介绍

> 要了解lambda表达式的使用规则，必须要了解匿名内部类和函数式接口。

### 4.1函数式接口

要理解lambda表达式，首先需要理解函数式接口。函数式接口是 Java 8 中引入的一个概念，它是指仅包含一个抽象方法的接口。函数式接口在
Java 中被广泛应用于支持函数式编程，Lambda
表达式和方法引用等特性。函数式接口的设计旨在简化代码，并提供一种轻量级的方式来实现匿名函数。

> 函数式接口的使用可以大大简化代码，并且使得代码更加灵活和易读。它们可以在集合操作、并行计算、事件处理等各种场景下发挥作用，是
> Java 中函数式编程的基础。

1. 只包含一个抽象方法：函数式接口只允许包含一个抽象方法，但可以包含多个默认方法（default methods）或静态方法（static
   methods）。
2. @FunctionalInterface 注解：为了明确标识一个接口是函数式接口，Java 提供了 @FunctionalInterface
   注解。这个注解可以确保接口符合函数式接口的定义，并且编译器会检查接口是否只包含一个抽象方法。
3. Lambda 表达式和方法引用：函数式接口的主要用途是使用 Lambda 表达式或方法引用来创建接口的实例。Lambda
   表达式可以方便地表示一个函数式接口的实现，从而简化代码的编写。
4. 内置函数式接口：Java 8 提供了一些内置的函数式接口，如 Predicate、Function、Consumer、Supplier
   等，用于常见的函数式编程场景，开发者可以直接使用这些接口而无需自己定义。

下面是一个函数式接口示例：

> 假设我们有一个需求，需要将一个字符串列表中的所有字符串转换为大写，并且添加一个前缀。我们可以使用 `Function` 函数式接口来实现这个需求。

```java
import java.util.*;
import java.util.function.*;

public class Main {
    public static void main(String[] args) {
        List<String> strings = Arrays.asList("apple", "banana", "orange", "kiwi");

        // 使用 Lambda 表达式创建 Function 接口的实例
        Function<String, String> processString = (s) -> "PREFIX_" + s.toUpperCase();

        // 使用 Function 接口的实例进行处理
        List<String> processedStrings = new ArrayList<>();
        for (String str : strings) {
            processedStrings.add(processString.apply(str));
        }

        // 输出处理后的字符串列表
        System.out.println("Processed strings: " + processedStrings);
    }
}
```

在上面的示例中，我们首先定义了一个字符串列表 `strings`，包含了一些水果名称。

然后，我们使用 Lambda 表达式创建了一个 `Function` 接口的实例 `processString`，实现了 `apply` 方法，用于将输入的字符串转换为大写，并在前面添加一个前缀。

接着，我们遍历了 `strings` 列表，并使用 `processString`
实例对每个字符串进行处理，将处理后的结果添加到新的列表 `processedStrings` 中。

最后，我们输出了处理后的字符串列表。

这就是函数式接口带对象参数的一个示例，通过 Lambda 表达式可以轻松地创建该接口的实例，并且对对象进行处理

### 4.2匿名内部类

> 匿名类是 Java 编程语言中的一种特殊类型的类，它允许在使用类的地方直接定义一个新的类，而不需要专门定义一个命名的类。匿名类通常用于创建临时的、只使用一次的类实例，尤其是在需要实现接口或继承抽象类的情况下。

1. **语法**：匿名类的语法与普通类定义类似，但在创建类的同时实现其方法或属性。通常在创建对象的地方，使用 `new` 关键字后面跟上类的定义。

2. **匿名类的特点**：

    - 匿名类没有类名，它是一个临时的、内联的类定义。
    - 匿名类通常用于需要实现接口或继承抽象类的场景，可以直接在使用的地方实现相关方法。
    - 匿名类只能被创建一次，并且通常只在其创建的地方使用。

3. **使用场景**：

    - 实现接口：匿名类可以用于实现接口的情况，尤其是接口中只有一个方法需要实现时。
    - 继承抽象类：匿名类也可以用于继承抽象类的情况，实现抽象方法。

   下面是一个使用匿名类的简单示例：

   > 我们定义了一个接口 `Greeting`，并使用匿名类实现了该接口的 `greet` 方法。然后，我们创建了一个 `Greeting`
   接口的实例，并调用其 `greet` 方法，输出 "Hello, world!"。这样，我们就利用匿名类实现了接口的临时实例化，而不需要专门定义一个具名的类.

   ```java
   // 定义一个接口
   interface Greeting {
       void greet();
   }

   public class Main {
       public static void main(String[] args) {
           // 使用匿名类实现接口
           Greeting greeting = new Greeting() {
               @Override
               public void greet() {
                   System.out.println("Hello, world!");
               }
           };

           // 调用接口方法
           greeting.greet();
       }
   }
   ```

#### 函数式接口和匿名类别的区别：

1. 语法简洁性：
    * 函数式接口通过 Lambda 表达式来实现，语法更加简洁明了，使得代码更加清晰易读。
    * 匿名内部类需要使用关键字 new 创建一个实例，并在其中实现接口的抽象方法，语法相对冗长。
2. 背景和用途：
    * 函数式接口是为了支持函数式编程而设计的，主要用于在集合操作、事件处理等场景中传递行为。
    * 匿名内部类是 Java 早期就有的特性，主要用于创建临时的、只使用一次的类实例，通常用于实现接口或继承抽象类。
3. 类型检查：
    * 函数式接口会进行类型检查，编译器会检查接口是否符合函数式接口的定义（只包含一个抽象方法）。
    * 匿名内部类不会进行类型检查，编译器只会检查语法的正确性，可以是接口，是抽象类，是具体类。
4. 性能：
    * 由于 Lambda 表达式会被编译成匿名内部类的形式，因此它们的性能相当。
    * 但是，由于函数式接口的语法更加简洁，通常会使代码更易读和易维护。

函数式接口是一种更加现代化和简洁的接口实现方式，特别适用于函数式编程的场景。而匿名内部类虽然语法相对繁琐，但在一些旧的代码中仍然可以发挥作用，尤其是在需要传递行为的场景中。

### 4.3区别示例：

> 实现一个简单的计算器接口，并使用 Lambda 表达式和匿名内部类来实现：

1. 使用函数式接口和 Lambda 表达式：
   ```java
   @FunctionalInterface
   interface Calculator {
       int calculate(int a, int b);
   }
   
   public class Main {
       public static void main(String[] args) {
           // 使用 Lambda 表达式实现 Calculator 接口
           Calculator addition = (int a, int b) -> a + b;
   
           // 调用 Lambda 表达式计算结果
           int result = addition.calculate(10, 5); // 输出 15
   
           // 输出结果
           System.out.println("Result: " + result);
       }
   }
   ```
2. 使用匿名内部类：
   ```java
   interface Calculator {
    int calculate(int a, int b);
   }

   public class Main {
      public static void main(String[] args) {
     // 使用匿名内部类实现 Calculator 接口
      Calculator addition = new Calculator() {
      @Override
      public int calculate(int a, int b) {
      return a + b;
      }
   };
   
     // 调用匿名内部类计算结果
     int result = addition.calculate(10, 5); // 输出 15
   
     // 输出结果
     System.out.println("Result: " + result);
     }
   }
   ```

在这两个例子中，我们都实现了 Calculator 接口，但是使用了不同的方式。第一个例子使用了函数式接口和 Lambda
表达式，语法更加简洁明了；而第二个例子使用了匿名内部类，语法相对繁琐。然而，它们的输出结果是相同的。

## 5.lambda表达式在项目中示例：

1. **使用 Lambda 表达式实现接口的抽象方法**：

   > 假设我们有一个简单的接口 `MathOperation`，定义了一个抽象方法 `int operate(int a, int b)`，用于执行某种数学操作。我们可以使用
   > Lambda 表达式来实现该接口的抽象方法。

   ```java
   @FunctionalInterface
   interface MathOperation {
       int operate(int a, int b);
   }
   
   public class Main {
       public static void main(String[] args) {
           // 使用 Lambda 表达式实现接口的抽象方法
           MathOperation addition = (a, b) -> a + b;
           MathOperation subtraction = (a, b) -> a - b;
           
           // 调用 Lambda 表达式
           System.out.println("Addition: " + addition.operate(10, 5)); // 输出 15
           System.out.println("Subtraction: " + subtraction.operate(10, 5)); // 输出 5
       }
   }
   
   @FunctionalInterface
   interface MathOperation {
       int operate(int a, int b);
   }
   
   public class Main {
       public static void main(String[] args) {
           // 使用 Lambda 表达式实现接口的抽象方法
           MathOperation addition = (a, b) -> a + b;
           MathOperation subtraction = (a, b) -> a - b;
           
           // 调用 Lambda 表达式
           System.out.println("Addition: " + addition.operate(10, 5)); // 输出 15
           System.out.println("Subtraction: " + subtraction.operate(10, 5)); // 输出 5
       }
   }
   ```

2. **将 Lambda 表达式作为方法的参数传递**：

   > 假设我们有一个方法 `operate`，接受两个整数和一个函数式接口 `MathOperation` 作为参数，用于执行数学操作。我们可以将
   Lambda
   > 表达式作为该方法的参数传递，实现数学操作的灵活调用。

   ```java
   public class Main {
       // 方法接受两个整数和一个函数式接口作为参数
       public static void operate(int a, int b, MathOperation operation) {
           int result = operation.operate(a, b);
           System.out.println("Result: " + result);
       }
   
       public static void main(String[] args) {
           // 使用 Lambda 表达式作为方法的参数传递
           operate(10, 5, (a, b) -> a + b); // 输出 15
           operate(10, 5, (a, b) -> a - b); // 输出 5
       }
   }
   ```

lambda表达式一般都是配合stream流使用。详细介绍可以参考：[Java8 Stream流](https://blog.csdn.net/weixin_39570423/article/details/138663910)













