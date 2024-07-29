
require('dotenv').config()
const bodyParser = require('body-parser');
const fetch = require('node-fetch');
const cors =require('cors');
const OpenAI=require('openai');
const express = require('express');
const multer = require('multer');
const axios = require('axios');
const fs = require('fs');
const pdfParse= require('pdf-parse');
const mongoose = require('mongoose');
const User = require('./models/User');
const userRoutes = require('./routes/userRoutes');
const http = require('http');
const socketIo = require('socket.io');


const port = process.env.PORT || 5000; // Choose any port number you prefer
const API_KEY = process.env.OPENAI_API_KEY;
const app = express();
const upload = multer({ dest: 'uploads/' });


app.use(express.json());

app.use(cors({ origin: 'http://localhost:3000', credentials: true }));;

app.use(bodyParser.json());


// Connect to MongoDB server
mongoose.connect(process.env.MONGO_URL)
    .then(() => {
        console.log('Connected to MongoDB');
    })
    .catch((error) => {
        console.error('Error connecting to MongoDB:', error);
});

const openai = new OpenAI({
    apiKey: API_KEY
});

//handle sign up 
app.post('/SignUpUser', userRoutes);

//handle sign in
app.post('/SignInUser', userRoutes);

// app.post('/AddUser' , async (req , res ) => {
//     try{
//         const { name ,email , password } = req.body;
//         console.log(req.body);
//         if(!name || !email || !password){
//             return res.status(400).json({ error: 'Please fill all the fields' });
//         }
//         if(password.length < 8){
//             return res.status(400).json({ error: 'Password must be at least 8 characters long' });
//         }
//         const exist = await User.findOne({ email });
//         if(exist){
//             return res.status(400).json({ error: 'Email already exists' });
//         }

//         const newUser = await User.create({
//             name,
//             email,
//             password
//         });
//         await newUser.save();

//         res.status(201).json({ message: 'User created successfully' });
//     }catch(err){
//         console.error(err);
//         res.status(500).json({ error: 'Server error' });
//     }
// })

const server = http.createServer(app);
const io = socketIo(server);

// Store active rooms and their messages
const rooms = {};

io.on('connection', (socket) => {
  console.log('A user connected');

  // Handle joining a room
  socket.on('joinRoom', (roomId) => {
    socket.join(roomId);
    if (!rooms[roomId]) {
      rooms[roomId] = [];
    }
    socket.emit('message', `You have joined room ${roomId}`);
    socket.broadcast.to(roomId).emit('message', 'A new user has joined the room');
  });

  // Handle chat messages
  socket.on('chatMessage', (roomId, message) => {
    const msg = `User: ${message}`;
    rooms[roomId].push(msg);
    io.to(roomId).emit('message', msg);
  });

  // Handle disconnection
  socket.on('disconnect', () => {
    console.log('A user disconnected');
  });
});


// Endpoint to handle requests from frontend
app.post('/api/DescriptionGeneration', async (req, res) => {
    try {
        const { topic, Technology } = req.body;
        const prompt = "Generate a brief  description for the topic: " + topic + "in Technology "+Technology+"Dont try to give the More info as this is read by the user before Quize is taken.so avoid Most inportant data.which give user to test his skills" +"\n\nDescription:";

        // Make request to ChatGPT API to get description based on the topic
        const response = await openai.chat.completions.create({
            model: 'gpt-3.5-turbo-0125',
            messages: [{ 'role': 'system', 'content': 'You are a helpful assistant.' }, { 'role': 'user', 'content': prompt }],
            max_tokens: 100
        });

        //const data = await response.json();
        
        // Extract and send description back to frontend
        const description = response.choices[0].message.content.trim();
        console.log(description);
        res.json({ description });
    } catch (error) {
        console.error('Error:', error);
        res.status(500).json({ error: 'An internal server error occurred' });
    }
});


// const { GoogleGenerativeAI } = require("@google/generative-ai");

// Access your API key as an environment variable (see "Set up your API key" above)
// const genAI = new GoogleGenerativeAI(process.env.API_KEY);

// app.post('/api/DescriptionGeneration',async(skills) => {
//   // For text-only input, use the gemini-pro model
//   const model = genAI.getGenerativeModel({ model: "gemini-pro"});

//   const prompt = "Write a story about a magic backpack."

//   const result = await model.generateContent(prompt);
//   const response = await result.response;
//   const text = response.text();
//   console.log(text);

// );

function processQuizText3(text) {
    const questions = [];
    const regex = /^Topic:\s*([^:\n]+)\s+Question:\s*(.*?)\s*(?:\{\s*([\s\S]*?)\s*\})?\s*Options:\s*\n\s*A\)\s*(.*?)\n\s*B\)\s*(.*?)\n\s*C\)\s*(.*?)\n\s*D\)\s*(.*?)\n\s*Correct Answer:\s*(?:[A-D]\)\s*)?(.*?)\n\s*Description:\s*(.*?)$/gm
    let match;
    while ((match = regex.exec(text)) !== null) {
        const [, topic, question, code, optionA, optionB, optionC, optionD, correctAnswer, description] = match;
        const questionOptions = [optionA.trim(), optionB.trim(), optionC.trim(), optionD.trim()];
        
        questions.push({
            topic: topic.trim(),
            code: code ? code.trim() : '', // Handle code block (if present)
            question: question.trim(),
            questionOptions,
            correctAnswer: correctAnswer.trim(),
            description: description.trim()
        });
    }
    return questions;
}


// Define the processQuizText function
// function processQuizText(text) {
//     const questions = [];
//     //const regex = /^([^:]+)(?::\s*Topic:\s*([^:]+))?\n\s*Question:\s*(.*?)\n\s*A\)\s*(.*?)\n\s*B\)\s*(.*?)\n\s*C\)\s*(.*?)\n\s*D\)\s*(.*?)\n\s*Correct Answer:\s*(.*?)\n\s*Description:\s*(.*?)$/gm;
//     const regex = /^([^:\n]+)\s+\(([^)]+)\):\s*Topic:\s*([^:\n]+)\s+Question:\s*(.*?)\s*(?:Code:\s*```(?:\w+)?\n([\s\S]*?)\n\s*```(?:\n|$)\s*)?Options:\s*\n\s*A\)\s*(.*?)\n\s*B\)\s*(.*?)\n\s*C\)\s*(.*?)\n\s*D\)\s*(.*?)\n\s*Correct Answer:\s*(?:[A-D]\)\s*)?(.*?)\n\s*Description:\s*(.*?)$/gm;
//     let match;
//     while ((match = regex.exec(text)) !== null) {
//         const [, technology,difficulty, topic, question,code, optionA,optionB,optionC,optionD, correctAnswer, description] = match;
//         const questionOptions = [optionA.trim(), optionB.trim(), optionC.trim(), optionD.trim()];
//         questions.push({
//             technology: technology.trim(),
//             difficulty: difficulty.trim(),
//             topic: topic.trim(),
//             code : code.trim(),
//             question: question.trim(),
//             questionOptions,
//             correctAnswer,
//             description: description.trim()
//         });
//     }
//     return questions;
// }
function processQuizText(text) {
    const questions = [];
    const regex = /^([^:\n]+)\s+\(([^)]+)\):\s*Topic:\s*([^:\n]+)\s+Question:\s*(.*?)\s*(?:\{\s*([\s\S]*?)\s*\})?\s*Options:\s*\n\s*A\)\s*(.*?)\n\s*B\)\s*(.*?)\n\s*C\)\s*(.*?)\n\s*D\)\s*(.*?)\n\s*Correct Answer:\s*(?:[A-D]\)\s*)?(.*?)\n\s*Description:\s*(.*?)$/gm;

    let match;
    while ((match = regex.exec(text)) !== null) {
        const [, technology, difficulty, topic, question, code, optionA, optionB, optionC, optionD, correctAnswer, description] = match;
        const questionOptions = [optionA.trim(), optionB.trim(), optionC.trim(), optionD.trim()];
        
        questions.push({
            technology: technology.trim(),
            difficulty: difficulty.trim(),
            topic: topic.trim(),
            code: code ? code.trim() : '', // Handle code block (if present)
            question: question.trim(),
            questionOptions,
            correctAnswer: correctAnswer.trim(),
            description: description.trim()
        });
    }

    return questions;
}


app.post('/api/SkillTestGeneration', async (req, res) => {
    try {
        console.log(req.body);  
        const { skill } = req.body;
        console.log("This",skill);
        const prompt = `
        Instructions:

Generate 10 multiple-choice quiz questions on following skill: ${skill}.
Topic: Briefly describe the skill being tested.
Question: Present the question clearly.
if code is present for the given question give it in curly braces to identify
Options: Provide four distinct multiple-choice options.
One option should be the correct answer.
Other options should be plausible but incorrect.
Correct Answer: correct option text.
Description: Explain why the chosen option is the correct answer.
Ensure no duplicate questions are generated.
Example:

Topic: ${skill}
 Question:  You want to dynamically update the content of an HTML element based on user input. Which JavaScript method is most appropriate for this task?
 {
    <div id="output"></div>
    }
  A) document.getElementById() (to retrieve the element)
  B) document.createElement() (to create a new element)
  C) innerHTML (to modify the element's content) 
  D) addEventListener() (to attach event listeners)
 Correct Answer: innerHTML 
 IMPORTANT --> { instruction : don't give like  C) innerHTML }
 Description: "innerHTML" allows you to directly set the HTML content within an element, making it ideal for dynamic updates based on user input.

Warnings and Must Do's:

1. Generate atleast a minimum 10 question that must be distributed equally to every skill mentioned
2 .Don't stop the generation in middle
        `;
        const response = await openai.chat.completions.create({
            model: 'gpt-3.5-turbo',
            messages: [{ "role": "assistant", "content": prompt }],
        });

        const resultText = response.choices[0].message.content;
        console.log(resultText);
        const generatedQuestions = processQuizText3(resultText);

        console.log("Generated quiz questions:\n", generatedQuestions);

        res.status(200).json({ quizQuestions: generatedQuestions });
    } catch (error) {
        console.error('Error generating questions:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

app.post('/api/TestGeneration', async (req, res) => {
    try {
        const { skills } = req.body;
        console.log(skills);
        console.log(skills);

        if(skills.length == 0){
            return res.status(400).json({ error: 'Skills are required' });
        }
        
        const prompt = `
Instructions:

Generate 10 multiple-choice quiz questions.
Each question should target a specific skill within the following technologies: ${skills.join(', ')}.
Difficulty level: Medium (suitable for users with some experience).
Format:
Topic: Briefly describe the skill being tested.
Question: Present the question clearly.
if code is present for the given question give it in curly braces to identify
Options: Provide four distinct multiple-choice options.
One option should be the correct answer.
Other options should be plausible but incorrect.
Correct Answer: correct option text.
Description: Explain why the chosen option is the correct answer.
Ensure no duplicate questions are generated.
Example:

JavaScript (Medium):

Topic: DOM Manipulation
 Question:  You want to dynamically update the content of an HTML element based on user input. Which JavaScript method is most appropriate for this task?
 {
    <div id="output"></div>
    }
  A) document.getElementById() (to retrieve the element)
  B) document.createElement() (to create a new element)
  C) innerHTML (to modify the element's content) 
  D) addEventListener() (to attach event listeners)
 Correct Answer: innerHTML 
 IMPORTANT --> { instruction : don't give like  C) innerHTML }
 Description: "innerHTML" allows you to directly set the HTML content within an element, making it ideal for dynamic updates based on user input.

Warnings and Must Do's:

1. Generate atleast a minimum 10 question that must be distributed equally to every skill mentioned
2 .Don't stop the generation in middle
`;

        const response = await openai.chat.completions.create({
            model: 'gpt-3.5-turbo',
            messages: [{ "role": "assistant", "content": prompt }],
        });

        const resultText = response.choices[0].message.content;
        console.log(resultText);
        const generatedQuestions = processQuizText(resultText);

        console.log("Generated quiz questions:\n", generatedQuestions);

        res.status(200).json({ quizQuestions: generatedQuestions });
    } catch (error) {
        console.error('Error generating questions:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

app.post('/uploadResume', upload.single('resume'), async (req, res) => {
    try {
        const file = req.file;
        let text = '';
        const skills = [];
        const projects = [];
        if (!file) {
            return res.status(400).json({ error: 'No file uploaded.' });
        }

        // Read the uploaded file
        const resumeBuffer = fs.readFileSync(file.path);

        // Use pdf-parse to extract text from the PDF file
        pdfParse(resumeBuffer).then(data => {
            text = data.text; // Sending extracted text back to the frontend
            console.log(text);
            const regex = /(?:Programming Languages|Tools|Frameworks|tools|Skills|coursework|softskillsprojects):(\s*[\w\s()+-]+(?:,?\s*[\w\s()+-]+)*)/g;
            const projectRegex = /PROJECTS\n([\s\S]*?)ACCOMPLISHMENTS/gm;
            let Skillmatch;

            while ((Skillmatch = regex.exec(text)) !== null) {
                // Extracting skills from captured groups
                const skill = Skillmatch[1].replace(/\s+/g, ' ').trim(); // Removing extra spaces and trimming
                skills.push(
                    ...skill.split(',').map(s => s.trim()));
            }

            let projectMatch;
            while ((projectMatch = projectRegex.exec(text)) !== null) {
                const projectText = projectMatch[1].trim();
                const projectInfoRegex = /(?:•\s*)(.+?)\|(.+?)\n([\s\S]*?)(?=\n•|$)/g;
                let projectInfoMatch;
                while ((projectInfoMatch = projectInfoRegex.exec(projectText)) !== null) {
                    const projectName = projectInfoMatch[1].trim();
                    const description = projectInfoMatch[3].trim().replace(/\n/g, ' ').replace(/\s+/g, ' ');
                    const technologies = projectInfoMatch[2].split(',').map(tech => tech.trim());
                    projects.push({ projectName, description, technologies });
                }
            }
            res.json({ extractedText: {
                skills:skills,
                projects:projects
            } });
        }).catch(error => {
            console.error("Failed to extract text from PDF:", error);
            res.status(500).json({ error: 'Failed to extract text from PDF.' });
        });
        // Delete the uploaded file after processing
        fs.unlinkSync(file.path);
        console.log("file deleted");
    } catch (error) {
        console.error('Error:', error.message);
        res.status(500).json({ error: 'Internal server error.' });
    }
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
