import React from 'react';

export const blogs = [
    {
        slug: "java-oops-dsa-intro",
        title: "The Ultimate Guide to Java, OOP, and DSA",
        excerpt: "A deep dive into the Java ecosystem, mastering Object-Oriented Programming principles, and building a foundation in Data Structures & Algorithms.",
        date: "2025-08-13",
        readTime: "25 min read",
        author: "Muhammad Shayan",
        tags: ["Java", "OOP", "DSA", "Backend"],
        content: (
            <div className="space-y-8 text-gray-800 dark:text-gray-200 leading-relaxed">
                <section>
                    <h2 className="text-3xl font-bold text-blue-600 dark:text-blue-400 mb-6">1. Java: The Backbone of Enterprise Software</h2>
                    <p className="mb-4 text-lg">
                        Java remains one of the most dominant programming languages in the world, powering everything from Android apps to large-scale banking systems. Developed by <strong>Sun Microsystems</strong> in 1995 and now stewarded by Oracle, Java's philosophy of <em>"Write Once, Run Anywhere" (WORA)</em> revolutionized how we think about cross-platform development.
                    </p>
                    <p className="mb-6 text-lg">
                        Unlike C++, where code is compiled into machine-specific instructions, Java compiles into <strong>Bytecode</strong>. This bytecode is then interpreted by the <strong>Java Virtual Machine (JVM)</strong>, which acts as a bridge between the code and the hardware. This architecture ensures that a Java program written on Windows runs seamlessly on Linux or macOS without modification.
                    </p>

                    <h3 className="text-2xl font-semibold mb-3">1.1 The Java Ecosystem (JDK, JRE, JVM)</h3>
                    <div className="bg-gray-100 dark:bg-gray-800 p-6 rounded-xl border-l-4 border-blue-500 mb-6">
                        <ul className="space-y-3">
                            <li><strong>JDK (Java Development Kit):</strong> The toolbox for developers. It contains the compiler (javac), the JRE, and debugging tools.</li>
                            <li><strong>JRE (Java Runtime Environment):</strong> The environment required to <em>run</em> Java applications. It contains libraries and the JVM.</li>
                            <li><strong>JVM (Java Virtual Machine):</strong> The engine that loads code, verifies it, executes it, and manages memory (Garbage Collection).</li>
                        </ul>
                    </div>
                </section>

                <hr className="border-gray-300 dark:border-gray-700 my-8" />

                <section>
                    <h2 className="text-3xl font-bold text-blue-600 dark:text-blue-400 mb-6">2. Mastering Object-Oriented Programming (OOP)</h2>
                    <p className="mb-6 text-lg">
                        OOP is not just syntax; it is a way of thinking. It models real-world entities using <strong>Classes</strong> (blueprints) and <strong>Objects</strong> (instances). Java is strictly object-oriented, meaning you cannot write a runnable program without at least one class.
                    </p>

                    <div className="space-y-8">
                        <div>
                            <h3 className="text-2xl font-bold mb-3 text-purple-600">2.1 Encapsulation: Data Security</h3>
                            <p className="mb-4">
                                Encapsulation is the practice of bundling data (variables) and methods (functions) together and restricting direct access to some of an object's components. This prevents accidental data modification.
                            </p>
                            <pre className="bg-gray-900 text-gray-100 p-6 rounded-xl text-sm overflow-x-auto shadow-lg">
{`public class BankAccount {
    private double balance; // Hidden from outside world

    public BankAccount(double initialBalance) {
        if (initialBalance > 0) this.balance = initialBalance;
    }

    // Controlled access via methods
    public void deposit(double amount) {
        if (amount > 0) {
            balance += amount;
            System.out.println("Deposited: " + amount);
        }
    }

    public double getBalance() {
        return balance;
    }
}`}
                            </pre>
                        </div>

                        <div>
                            <h3 className="text-2xl font-bold mb-3 text-purple-600">2.2 Polymorphism: Flexibility</h3>
                            <p className="mb-4">
                                Polymorphism allows methods to do different things based on the object it is acting upon. In Java, this is achieved via <strong>Method Overloading</strong> (compile-time) and <strong>Method Overriding</strong> (runtime).
                            </p>
                            <pre className="bg-gray-900 text-gray-100 p-6 rounded-xl text-sm overflow-x-auto shadow-lg">
{`class Payment {
    void pay() { System.out.println("Processing payment..."); }
}

class CreditCard extends Payment {
    @Override
    void pay() { System.out.println("Paying via Credit Card..."); }
}

class PayPal extends Payment {
    @Override
    void pay() { System.out.println("Paying via PayPal..."); }
}

// Usage
Payment p = new CreditCard();
p.pay(); // Output: Paying via Credit Card...`}
                            </pre>
                        </div>
                    </div>
                </section>

                <hr className="border-gray-300 dark:border-gray-700 my-8" />

                <section>
                    <h2 className="text-3xl font-bold text-blue-600 dark:text-blue-400 mb-6">3. Data Structures & Algorithms (DSA)</h2>
                    <p className="mb-6 text-lg">
                        If OOP is how you organize your code, DSA is how you make it <strong>efficient</strong>. Companies like Google, Amazon, and Netflix test candidates heavily on DSA because efficient code saves money on server costs and reduces latency.
                    </p>

                    <h3 className="text-2xl font-semibold mb-4">3.1 Big O Notation</h3>
                    <p className="mb-4">
                        Big O describes the <strong>worst-case scenario</strong> of an algorithm's growth rate.
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                        <div className="p-4 bg-green-100 dark:bg-green-900/30 rounded border border-green-200 dark:border-green-800">
                            <h4 className="font-bold">O(1) - Constant Time</h4>
                            <p className="text-sm">Accessing an array element by index. The speed is the same regardless of data size.</p>
                        </div>
                        <div className="p-4 bg-yellow-100 dark:bg-yellow-900/30 rounded border border-yellow-200 dark:border-yellow-800">
                            <h4 className="font-bold">O(n) - Linear Time</h4>
                            <p className="text-sm">Looping through a list. If data doubles, time doubles.</p>
                        </div>
                        <div className="p-4 bg-orange-100 dark:bg-orange-900/30 rounded border border-orange-200 dark:border-orange-800">
                            <h4 className="font-bold">O(log n) - Logarithmic Time</h4>
                            <p className="text-sm">Binary Search. Extremely efficient for large datasets.</p>
                        </div>
                        <div className="p-4 bg-red-100 dark:bg-red-900/30 rounded border border-red-200 dark:border-red-800">
                            <h4 className="font-bold">O(n²) - Quadratic Time</h4>
                            <p className="text-sm">Nested loops (e.g., Bubble Sort). Avoid this for large data.</p>
                        </div>
                    </div>
                </section>
            </div>
        )
    },
    {
        slug: "javascript-tips",
        title: "20+ Advanced JavaScript Tips & Tricks for 2025",
        excerpt: "Move beyond the basics. Explore closures, async/await patterns, currying, generators, and modern ES6+ features to write professional-grade JavaScript.",
        date: "2025-09-01",
        readTime: "15 min read",
        author: "Muhammad Shayan",
        tags: ["JavaScript", "Web Dev", "ES6"],
        content: (
            <div className="space-y-8 text-gray-800 dark:text-gray-200">
                <p className="text-xl">
                    JavaScript allows for many ways to solve a single problem, but the difference between <em>working</em> code and <em>clean, efficient</em> code is vast. Below is a comprehensive collection of patterns used by senior developers.
                </p>

                <div className="grid gap-8">
                    {/* Section 1 */}
                    <section>
                        <h2 className="text-2xl font-bold text-yellow-600 mb-4">1. Mastering Asynchronous JS</h2>
                        <div className="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 p-6 rounded-xl shadow-lg">
                            <h3 className="font-bold text-lg mb-2">Promise.allSettled() vs Promise.all()</h3>
                            <p className="text-gray-600 dark:text-gray-400 mb-4">
                                `Promise.all` fails if <em>one</em> promise fails. `Promise.allSettled` waits for all to finish, regardless of status.
                            </p>
                            <pre className="bg-gray-950 p-4 rounded-lg overflow-x-auto text-sm text-green-400 font-mono">
{`const p1 = new Promise((resolve) => setTimeout(resolve, 100, 'Success'));
const p2 = new Promise((_, reject) => setTimeout(reject, 200, 'Error'));

// Promise.all would throw an error here immediately.
// Promise.allSettled returns status for both:
Promise.allSettled([p1, p2]).then((results) => {
    results.forEach((result) => console.log(result.status));
});
// Output: "fulfilled", "rejected"`}
                            </pre>
                        </div>
                    </section>

                    {/* Section 2 */}
                    <section>
                        <h2 className="text-2xl font-bold text-yellow-600 mb-4">2. The Power of Closures</h2>
                        <div className="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 p-6 rounded-xl shadow-lg">
                            <p className="text-gray-600 dark:text-gray-400 mb-4">
                                Closures allow a function to remember the scope in which it was created, even after that scope has finished executing. This is crucial for data privacy.
                            </p>
                            <pre className="bg-gray-950 p-4 rounded-lg overflow-x-auto text-sm text-blue-300 font-mono">
{`function createCounter() {
    let count = 0; // Private variable
    return {
        increment: () => ++count,
        getValue: () => count
    };
}

const counter = createCounter();
console.log(counter.increment()); // 1
console.log(counter.increment()); // 2
console.log(counter.count); // undefined (cannot access directly)`}
                            </pre>
                        </div>
                    </section>

                    {/* Section 3 */}
                    <section>
                        <h2 className="text-2xl font-bold text-yellow-600 mb-4">3. Advanced Object Manipulation</h2>
                        
                        <div className="grid gap-4">
                            <div className="bg-gray-50 dark:bg-gray-800 p-5 rounded-lg">
                                <h4 className="font-bold mb-2">Dynamic Property Keys</h4>
                                <pre className="bg-gray-900 text-gray-100 p-3 rounded text-xs">
{`const dynamicKey = "status";
const user = {
    name: "Ali",
    [dynamicKey]: "Active" // Computed property name
};`}
                                </pre>
                            </div>

                            <div className="bg-gray-50 dark:bg-gray-800 p-5 rounded-lg">
                                <h4 className="font-bold mb-2">Object Freezing</h4>
                                <pre className="bg-gray-900 text-gray-100 p-3 rounded text-xs">
{`const config = { api: "https://site.com" };
Object.freeze(config);
config.api = "https://hacker.com"; // Fails silently or throws error in strict mode`}
                                </pre>
                            </div>
                        </div>
                    </section>

                     {/* Section 4 */}
                     <section>
                        <h2 className="text-2xl font-bold text-yellow-600 mb-4">4. Generator Functions</h2>
                        <div className="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 p-6 rounded-xl shadow-lg">
                            <p className="text-gray-600 dark:text-gray-400 mb-4">
                                Generators can pause execution and resume later. They are great for infinite streams of data or custom iterators.
                            </p>
                            <pre className="bg-gray-950 p-4 rounded-lg overflow-x-auto text-sm text-pink-300 font-mono">
{`function* idGenerator() {
    let id = 1;
    while (true) {
        yield id++;
    }
}

const gen = idGenerator();
console.log(gen.next().value); // 1
console.log(gen.next().value); // 2`}
                            </pre>
                        </div>
                    </section>
                </div>
            </div>
        )
    },
    {
        slug: "oops-dsa",
        title: "Advanced CS Fundamentals: System Design & Algorithms",
        excerpt: "Moving from theory to practice. How to apply OOP design patterns and complex algorithms to solve Scalability and System Design problems.",
        date: "2025-09-10",
        readTime: "20 min read",
        author: "Muhammad Shayan",
        tags: ["Architecture", "System Design", "Algorithms"],
        content: (
            <div className="space-y-10 text-gray-800 dark:text-gray-200">
                <section>
                    <h2 className="text-3xl font-extrabold mb-6">1. Design Patterns in OOP</h2>
                    <p className="mb-4 text-lg">
                        Design patterns are typical solutions to commonly occurring problems in software design. They are like pre-made blueprints that you can customize to solve a recurring design problem in your code.
                    </p>
                    
                    <div className="grid md:grid-cols-2 gap-6 mt-6">
                        <div className="bg-indigo-50 dark:bg-indigo-900/20 p-6 rounded-lg border border-indigo-100 dark:border-indigo-800">
                            <h3 className="text-xl font-bold text-indigo-700 dark:text-indigo-300 mb-2">Singleton Pattern</h3>
                            <p className="text-sm mb-3">Ensures a class has only one instance and provides a global point of access to it. Used for Database Connections, Loggers, or Configuration Managers.</p>
                            <div className="bg-white dark:bg-gray-900 p-3 rounded text-xs font-mono border dark:border-gray-700">
                                class Database &#123; <br/>
                                &nbsp;&nbsp; static instance; <br/>
                                &nbsp;&nbsp; constructor() &#123; <br/>
                                &nbsp;&nbsp;&nbsp;&nbsp; if (Database.instance) return Database.instance; <br/>
                                &nbsp;&nbsp;&nbsp;&nbsp; Database.instance = this; <br/>
                                &nbsp;&nbsp; &#125; <br/>
                                &#125;
                            </div>
                        </div>

                        <div className="bg-teal-50 dark:bg-teal-900/20 p-6 rounded-lg border border-teal-100 dark:border-teal-800">
                            <h3 className="text-xl font-bold text-teal-700 dark:text-teal-300 mb-2">Factory Pattern</h3>
                            <p className="text-sm mb-3">Creates objects without specifying the exact class of object that will be created. Great for scalability when adding new types.</p>
                            <div className="bg-white dark:bg-gray-900 p-3 rounded text-xs font-mono border dark:border-gray-700">
                                class UserFactory &#123; <br/>
                                &nbsp;&nbsp; createUser(type) &#123; <br/>
                                &nbsp;&nbsp;&nbsp;&nbsp; if (type === 'admin') return new Admin(); <br/>
                                &nbsp;&nbsp;&nbsp;&nbsp; return new Customer(); <br/>
                                &nbsp;&nbsp; &#125; <br/>
                                &#125;
                            </div>
                        </div>
                    </div>
                </section>

                <section>
                    <h2 className="text-3xl font-extrabold mb-6">2. Advanced Data Structures</h2>
                    <p className="mb-6">
                        Beyond arrays and linked lists lie structures that power the internet.
                    </p>

                    <div className="space-y-6">
                        <div className="border-l-4 border-purple-500 pl-6">
                            <h3 className="text-2xl font-bold mb-2">Hash Maps (Hash Tables)</h3>
                            <p className="text-gray-700 dark:text-gray-300 mb-2">
                                Used everywhere (JSON objects, Database Indexing, Caches). It maps keys to values using a hash function.
                            </p>
                            <p className="text-sm font-semibold">Time Complexity: O(1) average case.</p>
                        </div>

                        <div className="border-l-4 border-pink-500 pl-6">
                            <h3 className="text-2xl font-bold mb-2">Graphs (BFS & DFS)</h3>
                            <p className="text-gray-700 dark:text-gray-300 mb-2">
                                Graphs model relationships (Social Networks, GPS Navigation). 
                            </p>
                            <ul className="list-disc pl-5 text-sm space-y-1">
                                <li><strong>BFS (Breadth-First Search):</strong> Explores neighbors first. Good for finding the shortest path (e.g., GPS).</li>
                                <li><strong>DFS (Depth-First Search):</strong> Explores as deep as possible. Good for solving mazes or puzzles.</li>
                            </ul>
                        </div>
                    </div>
                </section>
            </div>
        )
    },
    {
        slug: "web-development-roadmap",
        title: "The Comprehensive 2025 Web Development Roadmap",
        excerpt: "From HTML tags to Kubernetes clusters. A granular roadmap for Full Stack Developers aiming for senior roles.",
        date: "2025-01-01",
        readTime: "30 min read",
        author: "Muhammad Shayan",
        tags: ["Career", "Full Stack", "DevOps"],
        content: (
            <div className="space-y-12 text-gray-800 dark:text-gray-200">
                <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white p-8 rounded-2xl shadow-xl">
                    <h2 className="text-3xl font-bold mb-4">Why Web Development?</h2>
                    <p className="text-lg opacity-90">
                        The web is the platform of the future. It is no longer just about static pages; it is about complex applications, real-time data streaming, and 3D rendering in the browser.
                    </p>
                </div>

                <div className="space-y-12 ml-4 md:ml-10 border-l-2 border-dashed border-gray-300 dark:border-gray-700 pl-8 md:pl-12 relative">
                    
                    {/* Phase 1 */}
                    <div className="relative">
                        <span className="absolute -left-[42px] md:-left-[58px] flex h-10 w-10 md:h-12 md:w-12 items-center justify-center rounded-full bg-blue-100 ring-8 ring-white dark:ring-gray-950 dark:bg-blue-900 font-bold text-blue-600">01</span>
                        <h3 className="text-2xl font-bold mb-4">Frontend Fundamentals</h3>
                        <p className="mb-4 text-gray-600 dark:text-gray-400">Do not rush this. This is your foundation.</p>
                        <ul className="grid md:grid-cols-2 gap-4">
                            <li className="bg-gray-50 dark:bg-gray-800 p-4 rounded border dark:border-gray-700">
                                <strong className="block text-lg mb-1">Semantic HTML5</strong>
                                <span className="text-sm">Accessibility (ARIA), Forms, SEO structure.</span>
                            </li>
                            <li className="bg-gray-50 dark:bg-gray-800 p-4 rounded border dark:border-gray-700">
                                <strong className="block text-lg mb-1">Modern CSS</strong>
                                <span className="text-sm">Flexbox, Grid, Custom Properties (Variables), Responsive Design.</span>
                            </li>
                            <li className="bg-gray-50 dark:bg-gray-800 p-4 rounded border dark:border-gray-700">
                                <strong className="block text-lg mb-1">JavaScript (ES6+)</strong>
                                <span className="text-sm">DOM Manipulation, Fetch API, Event Bubbling, Modules.</span>
                            </li>
                        </ul>
                    </div>

                    {/* Phase 2 */}
                    <div className="relative">
                        <span className="absolute -left-[42px] md:-left-[58px] flex h-10 w-10 md:h-12 md:w-12 items-center justify-center rounded-full bg-purple-100 ring-8 ring-white dark:ring-gray-950 dark:bg-purple-900 font-bold text-purple-600">02</span>
                        <h3 className="text-2xl font-bold mb-4">Frontend Frameworks & State</h3>
                        <p className="mb-4">Once you know JS, use tools to manage complexity.</p>
                        <div className="bg-gray-900 text-gray-300 p-6 rounded-xl">
                            <h4 className="text-white font-bold mb-2">React Ecosystem</h4>
                            <ul className="list-disc pl-5 space-y-2">
                                <li><strong>React Core:</strong> Hooks (useState, useEffect, useMemo).</li>
                                <li><strong>Routing:</strong> React Router or Next.js App Router.</li>
                                <li><strong>State Management:</strong> Redux Toolkit, Zustand, or Context API.</li>
                                <li><strong>Styling:</strong> Tailwind CSS, Styled Components, or ShadCN UI.</li>
                            </ul>
                        </div>
                    </div>

                    {/* Phase 3 */}
                    <div className="relative">
                        <span className="absolute -left-[42px] md:-left-[58px] flex h-10 w-10 md:h-12 md:w-12 items-center justify-center rounded-full bg-green-100 ring-8 ring-white dark:ring-gray-950 dark:bg-green-900 font-bold text-green-600">03</span>
                        <h3 className="text-2xl font-bold mb-4">Backend & DevOps</h3>
                        <p className="mb-4">You build the API, you deploy the API.</p>
                        <div className="grid gap-4">
                            <div className="p-4 border border-green-200 dark:border-green-800 rounded bg-green-50 dark:bg-green-900/10">
                                <h4 className="font-bold">Server Side</h4>
                                <p className="text-sm mt-1">Node.js (Express/NestJS) or Python (Django/FastAPI). Learn REST vs GraphQL.</p>
                            </div>
                            <div className="p-4 border border-green-200 dark:border-green-800 rounded bg-green-50 dark:bg-green-900/10">
                                <h4 className="font-bold">Databases</h4>
                                <p className="text-sm mt-1">Relational (PostgreSQL, MySQL) vs Non-Relational (MongoDB, Redis). Learn ORMs like Prisma.</p>
                            </div>
                             <div className="p-4 border border-green-200 dark:border-green-800 rounded bg-green-50 dark:bg-green-900/10">
                                <h4 className="font-bold">DevOps Basics</h4>
                                <p className="text-sm mt-1">Docker (Containerization), CI/CD (GitHub Actions), AWS/Vercel (Deployment).</p>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        )
    },
    {
        slug: "intro-to-ai-ml",
        title: "Artificial Intelligence & Machine Learning: The Complete Beginner's Guide",
        excerpt: "Demystifying AI. A comprehensive look at the history, types, and mathematical foundations of Machine Learning, Deep Learning, and Neural Networks.",
        date: "2025-10-05",
        readTime: "40 min read",
        author: "Muhammad Shayan",
        tags: ["AI", "Machine Learning", "Data Science", "Deep Learning"],
        content: (
            <div className="space-y-10 text-gray-800 dark:text-gray-200 leading-loose">
                <section>
                    <h2 className="text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-blue-500 mb-6">
                        1. What is Artificial Intelligence?
                    </h2>
                    <p className="text-xl mb-6">
                        At its core, **Artificial Intelligence (AI)** is the branch of computer science dedicated to creating systems capable of performing tasks that typically require human intelligence. These tasks include recognizing speech, making decisions, translating languages, and identifying patterns.
                    </p>
                    <p className="mb-6">
                        However, the term "AI" is often used as a catch-all. To truly understand it, we must categorize it:
                    </p>
                    <div className="grid md:grid-cols-3 gap-6 mb-8">
                        <div className="bg-gray-100 dark:bg-gray-800 p-6 rounded-xl">
                            <h3 className="font-bold text-lg mb-2 text-teal-600">ANI (Narrow AI)</h3>
                            <p className="text-sm">
                                <strong>Artificial Narrow Intelligence.</strong> AI designed for a specific task. Examples: Siri, Google Search, Chess bots. This is where we are today.
                            </p>
                        </div>
                        <div className="bg-gray-100 dark:bg-gray-800 p-6 rounded-xl">
                            <h3 className="font-bold text-lg mb-2 text-blue-600">AGI (General AI)</h3>
                            <p className="text-sm">
                                <strong>Artificial General Intelligence.</strong> AI that possesses the ability to understand, learn, and apply knowledge across a wide variety of tasks, much like a human.
                            </p>
                        </div>
                        <div className="bg-gray-100 dark:bg-gray-800 p-6 rounded-xl">
                            <h3 className="font-bold text-lg mb-2 text-purple-600">ASI (Super AI)</h3>
                            <p className="text-sm">
                                <strong>Artificial Super Intelligence.</strong> Hypothetical AI that surpasses human intellect in every possible way, including creativity and emotional intelligence.
                            </p>
                        </div>
                    </div>
                </section>

                <hr className="border-gray-200 dark:border-gray-800" />

                <section>
                    <h2 className="text-3xl font-bold mb-6">2. Understanding Machine Learning (ML)</h2>
                    <p className="mb-4 text-lg">
                        Machine Learning is a subset of AI. Instead of hard-coding rules (e.g., "If it has whiskers, it's a cat"), we feed the computer <strong>data</strong> and let it figure out the rules itself.
                    </p>
                    
                    <div className="space-y-6">
                        <div className="flex flex-col md:flex-row gap-4">
                            <div className="flex-1 bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 p-6 rounded-lg shadow-sm">
                                <h3 className="text-xl font-bold mb-2">Supervised Learning</h3>
                                <p className="mb-2 text-sm text-gray-500 uppercase tracking-wide font-bold">The Teacher Approach</p>
                                <p>
                                    The model is trained on labeled data. You show it a picture of a cat and tell it "This is a cat." After seeing thousands of labeled cats, it learns to identify one on its own.
                                </p>
                                <p className="mt-4 text-sm font-mono bg-gray-100 dark:bg-gray-800 p-2 rounded">Algorithms: Linear Regression, Decision Trees, SVM.</p>
                            </div>
                            
                            <div className="flex-1 bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 p-6 rounded-lg shadow-sm">
                                <h3 className="text-xl font-bold mb-2">Unsupervised Learning</h3>
                                <p className="mb-2 text-sm text-gray-500 uppercase tracking-wide font-bold">The Self-Discovery Approach</p>
                                <p>
                                    The model is given unstructured, unlabeled data. It tries to find patterns or structures on its own (e.g., grouping customers by purchasing behavior).
                                </p>
                                <p className="mt-4 text-sm font-mono bg-gray-100 dark:bg-gray-800 p-2 rounded">Algorithms: K-Means Clustering, Principal Component Analysis.</p>
                            </div>
                        </div>

                         <div className="bg-gradient-to-br from-indigo-900 to-purple-900 text-white p-6 rounded-lg shadow-lg">
                            <h3 className="text-xl font-bold mb-2">Reinforcement Learning</h3>
                            <p className="mb-2 text-xs uppercase tracking-wide font-bold opacity-75">The Trial & Error Approach</p>
                            <p>
                                An agent learns to make decisions by performing actions in an environment and receiving rewards or penalties. This is how AlphaGo learned to beat the world champion at Go.
                            </p>
                        </div>
                    </div>
                </section>

                <hr className="border-gray-200 dark:border-gray-800" />

                <section>
                    <h2 className="text-3xl font-bold mb-6">3. Deep Learning & Neural Networks</h2>
                    <p className="text-lg mb-6">
                        Deep Learning is a specialized subset of ML inspired by the human brain. It uses <strong>Artificial Neural Networks (ANNs)</strong>.
                    </p>

                    <div className="pl-6 border-l-4 border-teal-500 space-y-4">
                        <p>
                            <strong>The Neuron:</strong> Just like a biological neuron, an artificial neuron receives inputs, applies a "weight" (importance) to them, passes them through an "activation function," and produces an output.
                        </p>
                        <p>
                            <strong>Layers:</strong>
                            <ul className="list-disc pl-5 mt-2 space-y-1">
                                <li><strong>Input Layer:</strong> Receives raw data (pixels of an image).</li>
                                <li><strong>Hidden Layers:</strong> The "magic" happens here. Layers extract features (edges, shapes, textures). "Deep" learning means having many hidden layers.</li>
                                <li><strong>Output Layer:</strong> Gives the final prediction (e.g., "Cat: 98%, Dog: 2%").</li>
                            </ul>
                        </p>
                    </div>

                    <div className="mt-8 bg-gray-900 text-gray-300 p-6 rounded-xl font-mono text-sm">
                        <p className="text-green-400 mb-2">// Simple Python (PyTorch) Concept</p>
                        <p>import torch.nn as nn</p>
                        <p className="mt-2">class SimpleNet(nn.Module):</p>
                        <p className="pl-4">def __init__(self):</p>
                        <p className="pl-8">super().__init__()</p>
                        <p className="pl-8">self.layer1 = nn.Linear(in_features=784, out_features=128)</p>
                        <p className="pl-8">self.activation = nn.ReLU()</p>
                        <p className="pl-8">self.layer2 = nn.Linear(in_features=128, out_features=10)</p>
                        <br />
                        <p className="pl-4">def forward(self, x):</p>
                        <p className="pl-8">x = self.layer1(x)</p>
                        <p className="pl-8">x = self.activation(x)</p>
                        <p className="pl-8">return self.layer2(x)</p>
                    </div>
                </section>
            </div>
        )
    },
    {
        slug: "generative-ai-llms",
        title: "The Era of Generative AI: LLMs, Transformers & GPT",
        excerpt: "How did ChatGPT change the world? An extensive breakdown of Large Language Models, the Transformer architecture, and the future of Prompt Engineering.",
        date: "2025-10-12",
        readTime: "35 min read",
        author: "Muhammad Shayan",
        tags: ["Generative AI", "LLM", "GPT", "NLP"],
        content: (
            <div className="space-y-10 text-gray-800 dark:text-gray-200">
                <section>
                    <p className="text-xl leading-relaxed">
                        In late 2022, the release of ChatGPT took the world by storm. But this technology didn't appear out of thin air. It is the culmination of decades of research in <strong>Natural Language Processing (NLP)</strong>. This guide explains exactly how it works.
                    </p>
                </section>

                <section>
                    <h2 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-red-600 mb-6">
                        1. What is Generative AI?
                    </h2>
                    <p className="mb-4 text-lg">
                        Traditional AI is <strong>Discriminative</strong> (e.g., "Is this email spam or not?"). <br/>
                        <strong>Generative AI</strong> is different; it creates <em>new</em> data. It can generate text, images, code, or audio that looks like it was created by a human.
                    </p>
                </section>

                <section className="bg-gray-50 dark:bg-gray-900 p-8 rounded-2xl border border-gray-200 dark:border-gray-800">
                    <h2 className="text-3xl font-bold mb-6">2. The Transformer Architecture</h2>
                    <p className="mb-4">
                        Before 2017, NLP relied on RNNs (Recurrent Neural Networks), which processed words sequentially (one by one). They were slow and forgot context in long sentences.
                    </p>
                    <p className="mb-6">
                        In 2017, Google researchers published the paper <em>"Attention Is All You Need,"</em> introducing the <strong>Transformer</strong>.
                    </p>

                    <h3 className="text-2xl font-bold mb-4 text-orange-600">The "Attention" Mechanism</h3>
                    <p className="mb-4">
                        Imagine reading a sentence: <em className="italic">"The animal didn't cross the street because it was too tired."</em>
                    </p>
                    <p className="mb-4">
                        What does "it" refer to? The street or the animal? Humans know it refers to the animal because of the word "tired."
                    </p>
                    <p>
                        The <strong>Self-Attention</strong> mechanism allows the model to look at every word in a sentence simultaneously and calculate "attention scores" (relationships) between them. It understands that "it" is highly related to "animal" in this context.
                    </p>
                </section>

                <section>
                    <h2 className="text-3xl font-bold mb-6">3. Large Language Models (LLMs)</h2>
                    <p className="mb-6 text-lg">
                        LLMs like GPT-4, Claude, and Llama are simply Transformers trained on massive amounts of text data (basically the entire internet).
                    </p>

                    <div className="grid md:grid-cols-2 gap-8">
                        <div>
                            <h4 className="font-bold text-xl mb-2">Tokenization</h4>
                            <p className="text-gray-600 dark:text-gray-400">
                                LLMs don't read words; they read "tokens." A token can be a word, part of a word, or a character. For example, "learning" might be one token, but "unbelievable" might be split into "un", "believ", "able".
                            </p>
                        </div>
                        <div>
                            <h4 className="font-bold text-xl mb-2">Next-Token Prediction</h4>
                            <p className="text-gray-600 dark:text-gray-400">
                                At its heart, an LLM is a giant prediction engine. Given the sequence "The sky is", it calculates the probability of the next word.
                                <br/>
                                <span className="font-mono text-xs block mt-2 bg-gray-200 dark:bg-gray-800 p-2 rounded">
                                    "blue": 85% <br/>
                                    "cloudy": 10% <br/>
                                    "green": 0.01%
                                </span>
                            </p>
                        </div>
                    </div>
                </section>

                <section>
                    <h2 className="text-3xl font-bold mb-6">4. Prompt Engineering & Fine-Tuning</h2>
                    <p className="mb-4">
                        A raw LLM is like a genius who has read every book but doesn't know how to chat.
                    </p>
                    <ul className="space-y-4">
                        <li className="bg-orange-50 dark:bg-orange-900/10 p-4 rounded border-l-4 border-orange-500">
                            <strong>Pre-training:</strong> The model learns language patterns from terabytes of text. (Expensive & Time-consuming).
                        </li>
                        <li className="bg-blue-50 dark:bg-blue-900/10 p-4 rounded border-l-4 border-blue-500">
                            <strong>Fine-Tuning (RLHF):</strong> Reinforcement Learning from Human Feedback. Humans rate the model's answers to teach it to be helpful, harmless, and honest.
                        </li>
                        <li className="bg-green-50 dark:bg-green-900/10 p-4 rounded border-l-4 border-green-500">
                            <strong>Prompt Engineering:</strong> The art of guiding the model's output by crafting specific inputs (e.g., "Act as a senior Python developer...").
                        </li>
                    </ul>
                </section>

                <div className="bg-gray-900 text-gray-200 p-6 rounded-lg text-center italic">
                    "We are entering an age where the barrier to creation is dropping to zero. The skill of the future is not just knowing the answer, but knowing which question to ask."
                </div>
            </div>
        )
    }
];