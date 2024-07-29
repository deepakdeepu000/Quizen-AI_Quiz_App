// const text = `
// C (Medium):

// Topic: Pointers
// Question: What is the result of the following C code snippet?

// \`\`\`
// int x = 10;
// int *ptr = &x;
// *ptr = 20;
// printf("%d", x);
// \`\`\`

// Options:
// A) 10
// B) 20
// C) Compile error
// D) Undefined behavior
// Correct Answer: B) 20
// Description: By dereferencing the pointer 'ptr' and assigning 20 to it, the value of 'x' is updated to 20.


// Java (Medium):

// Topic: Exception Handling
// Question: Which keyword is used to handle exceptions in Java?

// Options:
// A) try
// B) catch
// C) throw
// D) finally
// Correct Answer: B) catch
// Description: The 'catch' keyword is used in Java to catch and handle exceptions that are thrown within the 'try' block.
// `;

// const regex = /([^:\n]+)\s+\(([^)]+)\):\s*Topic:\s*([^:\n]+)\s+Question:\s*([^?]+)\?\s*(?:.*?\`\`\`[\s\S]*?\`\`\`)?\s*Options:\s*(?:\n[A-D]\)\s*([^:\n]+))\s*(?:\n[A-D]\)\s*([^:\n]+))\s*(?:\n[A-D]\)\s*([^:\n]+))\s*(?:\n[A-D]\)\s*([^:\n]+))\s*Correct Answer:\s*([^:\n]+)\s*Description:\s*([^]+?)(?=\n\n|\n$|$)/gm;

// function parseContent(text) {
//   const matches = text.matchAll(regex);
//   const parsedData = [];
//   for (const match of matches) {
//     const [, language, difficulty, topic, question, optionA, optionB, optionC, optionD, correctAnswer, description] = match;
//     parsedData.push({
//       language: language.trim(),
//       difficulty: difficulty.trim(),
//       topic: topic.trim(),
//       question: question.trim(),
//       options: [optionA.trim(), optionB.trim(), optionC.trim(), optionD.trim()],
//       correctAnswer: correctAnswer.trim(),
//       description: description.trim(),
//     });
//   }
//   return parsedData;
// }

// const results = parseContent(text);
// console.log(results);

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

C++ (Medium):

Topic: Pointers
Question: What is the output of the following C++ code snippet?
Options:
 A) 5
 B) Garbage value
 C) Address of x
 D) Compilation error
Correct Answer: A) 5
Description: The code defines an integer variable x with a value of 5. The pointer ptr is assigned the address of x using the address-of operator '&'. When dereferencing ptr with '*', it prints the value stored at the address pointed to by ptr, which is 5.

Java (Medium):

Topic: Exception Handling
Question: In Java, which block is used to handle exceptions that are not caught by preceding catch blocks?
 A) finally
 B) try
 C) catch
 D) throw
Correct Answer: A) finally
Description: The 'finally' block in Java is used to execute code that should always run, regardless of whether an exception is thrown or not. It is typically used for cleanup operations like closing files or releasing resources.

Python (Medium):

Topic: List Comprehensions
Question: What does the following Python list comprehension do?
 A) Generates a list of squared numbers from 0 to 5
 B) Generates a list of squared numbers from 1 to 5
 C) Generates a list of squares of even numbers from 0 to 5
 D) Compilation error
Correct Answer: A) Generates a list of squared numbers from 0 to 5       
Description: The list comprehension iterates over numbers from 0 to 4 (range(5)), squares each number, and forms a new list with the squared values.

MySQL Tools (Medium):

Topic: Data Modeling
Question: Which MySQL tool is commonly used for designing and modeling relational databases?
 A) MySQL Workbench
 B) SQL Server Management Studio
 C) phpMyAdmin
 D) HeidiSQL
Correct Answer: A) MySQL Workbench
Description: MySQL Workbench is a popular visual tool that allows users to create, design, and manage MySQL databases using a graphical interface for data modeling and database administration.

Amazon Web Services (AWS) (Medium):

Topic: Elastic Compute Cloud (EC2)
Question: When launching an Amazon EC2 instance, what is required to access the instance remotely?
 A) Security Group
 B) Key Pair
 C) Load Balancer
 D) VPC
Correct Answer: B) Key Pair
Description: When launching an EC2 instance, you need to create a key pair, which consists of a public key for encryption and a private key for decryption. The private key is used to securely access the EC2 instance remotely.

Linux (Medium):

Topic: File Permissions
Question: In Linux, what does the file permission "rwxr-xr--" represent? 
 A) Read, write, and execute permissions for owner; read and execute permissions for group; only read permission for others
 B) Read and write permissions for owner; read and execute permissions for group; no permissions for others
 C) Read, write, and execute permissions for owner and group; no permissions for others
 D) Read and execute permissions for owner, group, and others
Correct Answer: A) Read, write, and execute permissions for owner; read and execute permissions for group; only read permission for others        
Description: The permission string "rwxr-xr--" breaks down permissions for the owner, group, and others, where 'r' stands for read, 'w' for write, and 'x' for execute.

DevOps (Medium):

Topic: Continuous Integration
Question: In the context of DevOps, which tool is commonly used for continuous integration and automation of build and deployment processes?      
    A) Jenkins
    B) Docker
    C) Kubernetes
    D) Ansible
Correct Answer: A) Jenkins
Description: Jenkins is a widely used open-source automation server that enables continuous integration and delivery of software projects by automating the build, test, and deployment process.

C (Medium):

Topic: Dynamic Memory Allocation
Question: Which C function is used to dynamically allocate memory for a single variable of a specified data type?
    A) malloc()
    B) realloc()
    C) calloc()
    D) free()
Correct Answer: A) malloc()
Description: The 'malloc()' function in C is used to allocate memory dynamically during runtime to store a single variable of a specified data type. It returns a pointer to the allocated memory block.

Java (Medium):

Topic: Generics
Question: What is the purpose of using generics in Java?
    A) To enable type checking at compile time
    B) To restrict the use of certain data types
    C) To prevent inheritance
    D) To handle exceptions
Correct Answer: A) To enable type checking at compile time
Description: Generics in Java allow classes, interfaces, and methods to operate on objects of various types while providing compile-time type safety by enforcing type constraints. This helps prevent type mismatches and improves code correctness.
`;

//const regex = /^([^:\n]+)\s+\(([^)]+)\):\s*Topic:\s*([^:\n]+)\s+Question:\s*(.*?)\s\n*(?:code:\n\s*([\s\S]*?))?Options:\s*\n\s*A\)\s*(.*?)\n\s*B\)\s*(.*?)\n\s*C\)\s*(.*?)\n\s*D\)\s*(.*?)\n\s*Correct Answer:\s*(.*?)\n\s*Description:\s*([\s\S]+?)(?=\n\n|\n$|$)/gm;
//const regex = /(\w+)\s+\((\w+)\):\s*\nTopic:\s*(.*?)\s*\nQuestion:\s*(.*?)\s*\n(?:code:\s*(.*?)\s*\n)?Options:\s*\n\s*A\)\s*(.*?)\s*\n\s*B\)\s*(.*?)\s*\n\s*C\)\s*(.*?)\s*\n\s*D\)\s*(.*?)\s*\nCorrect Answer:\s*(.*?)\s*\nDescription:\s*(.*?)\s*\n/gs;
// const regex = /^([A-Za-z]+) \(([^)]+)\):\s*Topic: (.*?)\s*Question: (.*?)\s*(?:code:\s*(.*?)\s*)?Options:\s*\n\s*A\) (.*?)\n\s*B\) (.*?)\n\s*C\) (.*?)\n\s*D\) (.*?)\nCorrect Answer: (.*?)\s*Description: (.*?)$/gm;

// function parseContent(text) {
//     const parsedData = [];
//     let match;

//     // Loop through all matches in the text
//     while ((match = regex.exec(text)) !== null) {
//         console.log("Match found:", match);

//         const [, language, difficulty, topic, question, codeBlock, optionA, optionB, optionC, optionD, correctAnswer, description] = match;

//         // Create an object for each parsed question
//         const parsedQuestion = {
//             language: language.trim(),
//             difficulty: difficulty.trim(),
//             topic: topic.trim(),
//             question: question.trim(),
//             codeBlock: codeBlock ? codeBlock.trim() : '',
//             options: [optionA.trim(), optionB.trim(), optionC.trim(), optionD.trim()],
//             correctAnswer: correctAnswer.trim(),
//             description: description.trim(),
//         };

//         // Push the parsed question object into the array
//         parsedData.push(parsedQuestion);
//     }

//     return parsedData;
// }

// const parsedQuestions = parseContent(text);
// console.log(parsedQuestions);

// const regex = /^([A-Za-z+]+) \(([^)]+)\):\n\nTopic: (.*?)\nQuestion: (.*?)\n(?:code:\n([\s\S]*?)\n)?Options:\n\s*A\) (.*?)\n\s*B\) (.*?)\n\s*C\) (.*?)\n\s*D\) (.*?)\nCorrect Answer: (.*?)\nDescription: (.*?)$/gm;

// function parseContent(text) {
//     const parsedData = [];
//     let match;

//     // Loop through all matches in the text
//     while ((match = regex.exec(text)) !== null) {
//         const [, language, difficulty, topic, question, codeBlock, optionA, optionB, optionC, optionD, correctAnswer, description] = match;

//         // Create an object for the parsed question
//         const parsedQuestion = {
//             language: language.trim(),
//             difficulty: difficulty.trim(),
//             topic: topic.trim(),
//             question: question.trim(),
//             codeBlock: codeBlock ? codeBlock.trim() : '',
//             options: [optionA.trim(), optionB.trim(), optionC.trim(), optionD.trim()],
//             correctAnswer: correctAnswer.trim(),
//             description: description.trim(),
//         };

//         // Push the parsed question to the parsedData array
//         parsedData.push(parsedQuestion);
//     }

//     return parsedData;
// }

// const parsedQuestions = parseContent(text);
// console.log(parsedQuestions);


// const regex = /^([A-Za-z+]+) \(([^)]+)\):\s*Topic: (.*?)\s*Question: (.*?)\s*(?:code:\s*(.*?)\s*)?Options:\s*\n\s*A\) (.*?)\n\s*B\) (.*?)\n\s*C\) (.*?)\n\s*D\) (.*?)\nCorrect Answer: (.*?)\s*Description: (.*?)$/gm;

// function parseContent(text) {
//     const parsedData = [];
//     let match;
//     let currentLanguage = null;
//     let languageQuestions = [];

//     // Loop through all matches in the text
//     while ((match = regex.exec(text)) !== null) {
//         const [, language, difficulty, topic, question, codeBlock, optionA, optionB, optionC, optionD, correctAnswer, description] = match;

//         // Check if we encountered a new language
//         if (currentLanguage !== language && currentLanguage !== null) {
//             // Push the current language questions to parsedData
//             if (languageQuestions.length > 0) {
//                 parsedData.push(...languageQuestions);
//                 languageQuestions = [];
//             }
//         }

//         // Create an object for the parsed question
//         const parsedQuestion = {
//             language: language.trim(),
//             difficulty: difficulty.trim(),
//             topic: topic.trim(),
//             question: question.trim(),
//             codeBlock: codeBlock ? codeBlock.trim() : '',
//             options: [optionA.trim(), optionB.trim(), optionC.trim(), optionD.trim()],
//             correctAnswer: correctAnswer.trim(),
//             description: description.trim(),
//         };

//         // Add the parsed question to the current language questions array
//         languageQuestions.push(parsedQuestion);

//         // Update the current language
//         currentLanguage = language;

//         // Move the regex index forward to continue matching from the end of the last match
//         regex.lastIndex = match.index + match[0].length;
//     }

//     // Push the remaining language questions to parsedData
//     if (languageQuestions.length > 0) {
//         parsedData.push(...languageQuestions);
//     }

//     return parsedData;
// }

// const parsedQuestions = parseContent(text);
// console.log(parsedQuestions);

const regex = /^([A-Za-z+]+) \(([^)]+)\):\n\nTopic: (.*?)\nQuestion: (.*?)\n(?:code:\n([\s\S]*?)\n)?Options:\n\s*A\) (.*?)\n\s*B\) (.*?)\n\s*C\) (.*?)\n\s*D\) (.*?)\nCorrect Answer: (.*?)\nDescription: (.*?)$/gm;

function parseContent(text) {
    const parsedData = [];
    let match;

    // Loop through all matches in the text
    while ((match = regex.exec(text)) !== null) {
        const [, language, difficulty, topic, question, , optionA, optionB, optionC, optionD, correctAnswer, description] = match;

        // Create an object for the parsed question
        const parsedQuestion = {
            language: language.trim(),
            difficulty: difficulty.trim(),
            topic: topic.trim(),
            question: question.trim(),
            options: [optionA.trim(), optionB.trim(), optionC.trim(), optionD.trim()],
            correctAnswer: correctAnswer.trim(),
            description: description.trim(),
        };

        // Push the parsed question to the parsedData array
        parsedData.push(parsedQuestion);
    }

    return parsedData;
}

const parsedQuestions = parseContent(text);
console.log(parsedQuestions);
