# Introduction to Java, OOP, and DSA

## 📌 1. Introduction to Java

Java is a **high-level**, **class-based**, **object-oriented** programming language developed by **Sun Microsystems** in 1995 (now owned by Oracle). It is known for its **Write Once, Run Anywhere (WORA)** principle, thanks to the Java Virtual Machine (JVM).

### 1.1 Features of Java
- **Platform Independent** → Compiled into bytecode, runs on any device with a JVM.
- **Object-Oriented** → Everything revolves around objects and classes.
- **Simple & Secure** → Easy syntax similar to C++, but without complexities like pointers.
- **Robust** → Strong memory management, exception handling, and type-checking.
- **Multithreaded** → Supports concurrent execution of multiple threads.
- **Distributed** → Supports network programming through APIs.
- **High Performance** → Just-In-Time (JIT) compiler improves speed.

### 1.2 Java Architecture
1. **Source Code** (`.java`) → Written by the programmer.
2. **Compiler** (`javac`) → Converts source code into **bytecode** (`.class` file).
3. **Java Virtual Machine (JVM)** → Executes the bytecode on any platform.

### 1.3 Java Development Kit (JDK) Components
- **JDK** → Tools for development (compiler, debugger, libraries).
- **JRE (Java Runtime Environment)** → JVM + Libraries.
- **JVM** → Executes Java bytecode.

---

## 📌 2. Object-Oriented Programming (OOP) in Java

OOP is a programming paradigm based on the concept of **objects** that contain **data** (fields) and **methods** (functions).  

### 2.1 Four Pillars of OOP

#### **1. Encapsulation**
- Wrapping **data** and **methods** into a single unit (class).
- Achieved using **private variables** and **public getters/setters**.
```java
class Student {
    private String name;
    
    public void setName(String name) {
        this.name = name;
    }
    public String getName() {
        return name;
    }
}
````

#### **2. Inheritance**

* One class acquires the properties and methods of another.
* Promotes **code reusability**.

```java
class Animal {
    void eat() { System.out.println("Eating..."); }
}
class Dog extends Animal {
    void bark() { System.out.println("Barking..."); }
}
```

#### **3. Polymorphism**

* **One name, many forms**.
* Achieved via **method overloading** (compile-time) and **method overriding** (runtime).

```java
// Overloading
class MathOp {
    int add(int a, int b) { return a + b; }
    double add(double a, double b) { return a + b; }
}
```

#### **4. Abstraction**

* Hiding internal details and showing only functionality.
* Achieved using **abstract classes** and **interfaces**.

```java
interface Vehicle {
    void start();
}
class Car implements Vehicle {
    public void start() { System.out.println("Car started"); }
}
```

---

## 📌 3. Data Structures and Algorithms (DSA) in Java

### 3.1 What is DSA?

* **Data Structure** → A way of organizing and storing data efficiently.
* **Algorithm** → A step-by-step procedure to solve a problem.

---

### 3.2 Data Structures in Java

#### **Linear Data Structures**

* **Array**

  * Fixed-size, indexed data storage.
  * Example: `int[] arr = {1, 2, 3};`
* **Linked List**

  * Dynamic size, nodes connected via pointers.
* **Stack**

  * LIFO (Last In, First Out) principle.
  * Implemented via `Stack` class or `ArrayDeque`.
* **Queue**

  * FIFO (First In, First Out).
  * Variants: Priority Queue, Deque.

#### **Non-Linear Data Structures**

* **Tree**

  * Hierarchical structure (Binary Tree, BST, AVL).
* **Graph**

  * Nodes connected by edges.
  * Represented as adjacency list/matrix.

---

### 3.3 Important Algorithms in Java

#### **Searching**

* **Linear Search**

  * O(n) time complexity.
* **Binary Search**

  * Works on sorted data.
  * O(log n) time complexity.

#### **Sorting**

* Bubble Sort
* Insertion Sort
* Merge Sort
* Quick Sort

#### **Recursion**

* A method calling itself to solve smaller subproblems.

```java
int factorial(int n) {
    if (n <= 1) return 1;
    return n * factorial(n - 1);
}
```

---

### 3.4 Java Collections Framework

* **List** (ArrayList, LinkedList)
* **Set** (HashSet, TreeSet)
* **Map** (HashMap, TreeMap)
* Provides **ready-to-use** implementations of data structures.

---

## 📌 4. Roadmap to Master Java + OOP + DSA

1. **Learn Java Basics**

   * Syntax, variables, loops, arrays.
2. **Understand OOP**

   * Classes, objects, inheritance, polymorphism.
3. **Practice DSA**

   * Start with arrays & strings.
   * Move to linked lists, stacks, queues.
   * Learn recursion, sorting, searching.
4. **Master Collections Framework**

   * Efficiently use built-in DS.
5. **Build Projects**

   * Apply concepts in real-world applications.

---

## 📌 5. Conclusion

Java, with its strong OOP foundation and vast libraries, is an excellent language for mastering **DSA**. By combining Java’s features with problem-solving skills, you can build efficient, scalable, and maintainable software.

---

**Author:** Muhammad Shayan
**Date:** 2025-08-13

```
