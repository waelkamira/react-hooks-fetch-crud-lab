import React, { useState } from "react";

function App() {
  const [questions, setQuestions] = useState([]);
  const [prompt, setPrompt] = useState("");
  const [answers, setAnswers] = useState(["", ""]);
  const [correctAnswer, setCorrectAnswer] = useState("");

  const handleAddQuestion = (e) => {
    e.preventDefault();

    const newQuestion = {
      id: Date.now(),
      prompt,
      answers,
      correctIndex: parseInt(correctAnswer),
    };

    setQuestions((prevQuestions) => [...prevQuestions, newQuestion]);
    setPrompt("");
    setAnswers(["", ""]);
    setCorrectAnswer("");
  };

  const handleDeleteQuestion = (questionId) => {
    setQuestions((prevQuestions) =>
      prevQuestions.filter((question) => question.id !== questionId)
    );
  };

  return (
    <div>
      <h1>Question List</h1>
      <button onClick={() => console.log("View Questions")}>
        View Questions
      </button>
      {questions.map((question) => (
        <div key={question.id}>
          <h3>{question.prompt}</h3>
          <ul>
            {question.answers.map((answer, index) => (
              <li key={index}>{answer}</li>
            ))}
          </ul>
          <button onClick={() => handleDeleteQuestion(question.id)}>
            Delete Question
          </button>
        </div>
      ))}
      <h2>New Question</h2>
      <form onSubmit={handleAddQuestion}>
        <label htmlFor="prompt">Prompt:</label>
        <input
          type="text"
          id="prompt"
          value={prompt}
          onChange={(e) => setPrompt(e.target.value)}
        />
        <label htmlFor="answer1">Answer 1:</label>
        <input
          type="text"
          id="answer1"
          value={answers[0]}
          onChange={(e) => setAnswers([e.target.value, answers[1]])}
        />
        <label htmlFor="answer2">Answer 2:</label>
        <input
          type="text"
          id="answer2"
          value={answers[1]}
          onChange={(e) => setAnswers([answers[0], e.target.value])}
        />
        <label htmlFor="correctAnswer">Correct Answer:</label>
        <select
          id="correctAnswer"
          value={correctAnswer}
          onChange={(e) => setCorrectAnswer(e.target.value)}
        >
          <option value="">Select Correct Answer</option>
          <option value="0">Answer 1</option>
          <option value="1">Answer 2</option>
        </select>
        <button type="submit">Add Question</button>
      </form>
    </div>
  );
}

export default App;






