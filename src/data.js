export default [
  {
    topic: 'frontend',
    questions: [
      { text: 'Which HTML tag is used to define an unordered list?', answers: ['<ol>', '<ul>', '<li>'], correctAnswer: 1 },
      { text: 'Which of the following is used to style a webpage?', answers: ['CSS', 'HTML', 'PHP'], correctAnswer: 0 },
      { text: 'What does "flex-direction" do in CSS?', answers: ['Align items', 'Define container direction', 'Grid layout'], correctAnswer: 1 },
      { text: 'Which method is used to select an element by ID?', answers: ['getElementById()', 'querySelector()', 'getElementsByClassName()'], correctAnswer: 0 },
      { text: 'What does the <meta> tag define in HTML?', answers: ['Meta information', 'Clickable links', 'External scripts'], correctAnswer: 0 }
    ]
  },
  {
    topic: 'backend',
    questions: [
      { text: 'Which of the following is a backend programming language?', answers: ['JavaScript', 'Python', 'CSS'], correctAnswer: 1 },
      { text: 'What does HTTP status code 500 represent?', answers: ['OK', 'Bad Request', 'Internal Server Error'], correctAnswer: 2 },
      { text: 'Which framework is used with Node.js?', answers: ['Django', 'Express.js', 'Laravel'], correctAnswer: 1 },
      { text: 'What does REST stand for?', answers: ['Representational State Transfer', 'Real-time Execution', 'Redundant Storage'], correctAnswer: 0 },
      { text: 'Which SQL command is used to insert data into a table?', answers: ['SELECT', 'INSERT INTO', 'UPDATE'], correctAnswer: 1 }
    ]
  },
  {
    topic: 'databases',
    questions: [
      { text: 'What is a primary key?', answers: ['A unique identifier', 'A foreign key', 'Table name'], correctAnswer: 0 },
      { text: 'Which SQL statement is used to create a table?', answers: ['CREATE TABLE', 'INSERT INTO', 'UPDATE TABLE'], correctAnswer: 0 },
      { text: 'What does ACID stand for?', answers: ['Atomicity, Consistency, Isolation, Durability', 'Access, Control, Integrity, Data'], correctAnswer: 0 },
      { text: 'Which type of database is MongoDB?', answers: ['Relational', 'NoSQL', 'Graph'], correctAnswer: 1 },
      { text: 'What command removes a table from a database?', answers: ['DELETE TABLE', 'DROP TABLE', 'REMOVE TABLE'], correctAnswer: 1 }
    ]
  }
]
