// const text = `
// C (Medium):

// Topic: Memory Management
// Question: When is dynamic memory allocated using malloc() released in C? 
// Options:
//   A) Automatically when the program terminates
//   B) Manually using free() when it is no longer needed
//   C) Automatically when the pointer goes out of scope
//   D) By calling realloc() with a NULL pointer
// Correct Answer: Manually using free() when it is no longer needed        
// Description: In C, memory allocated using malloc() needs to be explicitly released using free() to prevent memory leaks.

// C++ (Medium):

// Topic: Object-Oriented Programming
// Question: In C++, what is the access level of members in a class defined using the keyword "protected"?
// Options:
//   A) Public access
//   B) Private access
//   C) Protected access
//   D) No access specifier needed
// Correct Answer: Protected access
// Description: Members defined as "protected" in a C++ class have access within the class itself and in its derived classes.

// C++ (Medium):

// Topic: Pointers
// Question: What is the output of the following C++ code snippet?
// code:
//     int x = 5;
//     int *ptr = &x;
//     std::cout << *ptr << std::endl;
// A) 5
// B) Garbage value
// C) Address of x
// D) Compilation error
// Correct Answer: A) 5
// Description: The code defines an integer variable x with a value of 5. The pointer ptr is assigned the address of x using the address-of operator '&'. When dereferencing ptr with '*', it prints the value stored at the address pointed to by ptr, which is 5.

// Java (Medium):

// Topic: Exception Handling
// Question: In Java, which block is used to handle exceptions that are not caught by preceding catch blocks?
// A) finally
// B) try
// C) catch
// D) throw
// Correct Answer: A) finally
// Description: The 'finally' block in Java is used to execute code that should always run, regardless of whether an exception is thrown or not. It is typically used for cleanup operations like closing files or releasing resources.

// Python (Medium):

// Topic: List Comprehensions
// Question: What does the following Python list comprehension do?
// code:
//     squares = [x**2 for x in range(5)]
// A) Generates a list of squared numbers from 0 to 5
// B) Generates a list of squared numbers from 1 to 5
// C) Generates a list of squares of even numbers from 0 to 5
// D) Compilation error
// Correct Answer: A) Generates a list of squared numbers from 0 to 5       
// Description: The list comprehension iterates over numbers from 0 to 4 (range(5)), squares each number, and forms a new list with the squared values.
// `;

// // Regular expression to match code blocks
// const codeBlocksRegex = /code:\s*([\s\S]*?)(?=(\n[A-Z]|$))/g;

// // Extract code blocks
// let match;
// const codeBlocks = [];

// while ((match = codeBlocksRegex.exec(text)) !== null) {
//     codeBlocks.push(match[1].trim());
// }

// // Display extracted code blocks
// codeBlocks.forEach((block, index) => {
//     console.log(`Code Block ${index + 1}:`);
//     console.log(block);
//     console.log(''); // Blank line for separation
// });
const text = `

C (Medium):

Topic: Memory Management
Question: When is dynamic memory allocated using malloc() released in C? 
Options:
  A) Automatically when the program terminates
  B) Manually using free() when it is no longer needed
  C) Automatically when the pointer goes out of scope
  D) By calling realloc() with a NULL pointer
Correct Answer: Manually using free() when it is no longer needed        
Description: In C, memory allocated using malloc() needs to be explicitly released using free() to prevent memory leaks.

C++ (Medium):

Topic: Object-Oriented Programming
Question: In C++, what is the access level of members in a class defined using the keyword "protected"?
Options:
  A) Public access
  B) Private access
  C) Protected access
  D) No access specifier needed
Correct Answer: Protected access
Description: Members defined as "protected" in a C++ class have access within the class itself and in its derived classes.

Java (Medium):

Topic: Generics
Question: What is the purpose of using generics in Java?
Options:
 A) To enable type checking at compile time
 B) To restrict the use of certain data types
 C) To prevent inheritance
 D) To handle exceptions
Correct Answer: A) To enable type checking at compile time
Description: Generics in Java allow classes, interfaces, and methods to operate on objects of various types while providing compile-time type safety by enforcing type constraints. This helps prevent type mismatches and improves code correctness.

`;

// Define the regex pattern to extract fields including options
const regex = /Topic: (.+?)\nQuestion: (.+?)\nOptions:\n((?:\s+[A-Z]\) .+?\n)+)Correct Answer: (.+?)\nDescription: (.+?)\n/g;

// Extract matches using the regex pattern
let matches = [...text.matchAll(regex)];

// Output the extracted matches
matches.forEach((match, index) => {
    const [, topic, question, optionsBlock, correctAnswer, description] = match;
    const optionsRegex = /\s+([A-Z]\) .+?)\n/g;
    let options = [];
    let optionMatch;
    while ((optionMatch = optionsRegex.exec(optionsBlock)) !== null) {
        options.push(optionMatch[1]);
    }
    
    console.log(`Match ${index + 1}:`);
    console.log(`- Topic: ${topic}`);
    console.log(`- Question: ${question}`);
    console.log(`- Options:`);
    options.forEach((option) => {
        console.log(`  ${option}`);
    });
    console.log(`- Correct Answer: ${correctAnswer}`);
    console.log(`- Description: ${description}`);
    console.log("----------------------");
});
