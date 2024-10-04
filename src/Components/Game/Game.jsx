



import React, { useState } from 'react';
import { motion } from 'framer-motion';

const questions = [
  {
    id: 1,
    question: "What is the best time to irrigate crops to minimize water evaporation?",
    options: ["A) Early morning", "B) Noon", "C) Late afternoon", "D) Evening"],
    answer: "A) Early morning",
  },
  {
    id: 2,
    question: "Which of the following practices helps conserve water in farming?",
    options: ["A) Overwatering plants", "B) Drip irrigation", "C) Leaving soil bare", "D) Growing the same crop every year"],
    answer: "B) Drip irrigation",
  },
  {
    id: 3,
    question: "Which factor is most likely to contribute to soil erosion?",
    options: ["A) Heavy rainfall", "B) Irrigation", "C) Crop rotation", "D) Shade trees"],
    answer: "A) Heavy rainfall",
  },
  {
    id: 4,
    question: "What could be the reason for the yellowing leaves on this tree?",
    image: "https://i.ibb.co.com/dchhXGd/Gemini-Generated-Image-27ttiy27ttiy27tt.jpg", // Replace with actual image URL
    options: ["A) Overwatering", "B) Nitrogen deficiency", "C) Fungal infection", "D) Lack of sunlight"],
    answer: "B) Nitrogen deficiency",
  },
  {
    id: 5,
    question: "What disease is affecting this crop?",
    image: "https://i.ibb.co.com/rQ23dbM/Gemini-Generated-Image-t2xf99t2xf99t2xf.jpg", // Replace with actual image URL
    options: ["A) Powdery mildew", "B) Blight", "C) Root rot", "D) Rust fungus"],
    answer: "A) Powdery mildew",
  },
  {
    id: 6,
    question: "What is the most effective solution for this soil condition?",
    image: "https://i.ibb.co.com/gz1wrvT/Gemini-Generated-Image-y5e45qy5e45qy5e4.jpg", // Replace with actual image URL
    options: ["A) Irrigation scheduling", "B) Fertilizer application", "C) Planting more crops", "D) Spraying pesticides"],
    answer: "A) Irrigation scheduling",
  },
];

const getResultMessage = (score, totalQuestions) => {
  const percentage = (score / totalQuestions) * 100;

  if (percentage === 100) {
    return "🌟 Perfect! You're a farming genius! 🌟";
  } else if (percentage >= 80) {
    return "🎉 Great job! You really know your stuff! 🎉";
  } else if (percentage >= 50) {
    return "👍 Good effort! Keep learning and improving! 👍";
  } else {
    return "😅 Don't worry, practice makes perfect! Try again! 😅";
  }
};

const Quiz = () => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedOption, setSelectedOption] = useState('');
  const [score, setScore] = useState(0);
  const [isFinished, setIsFinished] = useState(false);
  const [showAnswer, setShowAnswer] = useState(false);
  const [showCorrectAnswers, setShowCorrectAnswers] = useState(false);

  const handleOptionChange = (option) => {
    setSelectedOption(option);
  };

  const handleSubmit = () => {
    if (selectedOption === questions[currentQuestionIndex].answer) {
      setScore(score + 1);
    }
    setShowAnswer(true); // Show the correct answer after submission

    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
      setSelectedOption(''); // Reset selected option for next question
      setShowAnswer(false); // Reset answer visibility for next question
    } else {
      setIsFinished(true);
    }
  };

  const resetQuiz = () => {
    setCurrentQuestionIndex(0);
    setScore(0);
    setIsFinished(false);
    setSelectedOption(''); // Reset selected option
    setShowAnswer(false);
    setShowCorrectAnswers(false); // Reset correct answers visibility
  };

  const toggleCorrectAnswers = () => {
    setShowCorrectAnswers(!showCorrectAnswers);
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gradient-to-r from-green-400 to-blue-500">
      <h1 className="text-4xl font-bold text-white mb-5">🌱 Agriculture Quiz 🌱</h1>

      {isFinished ? (
        <motion.div
          className="bg-white p-5 rounded shadow-md text-center"
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-2xl mb-4">Quiz Finished!</h2>
          <motion.p
            className="text-lg"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            You scored: <span className="font-bold text-green-600">{score}</span> out of {questions.length}
          </motion.p>
          <motion.div
            className="mt-4 p-4 bg-yellow-200 rounded-lg shadow-md"
            initial={{ scale: 0.5 }}
            animate={{ scale: 1.2 }}
            exit={{ scale: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-xl font-bold">🎉 Congratulations! 🎉</h2>
            <p>{getResultMessage(score, questions.length)}</p>
          </motion.div>
          <button onClick={resetQuiz} className="mt-4 bg-blue-500 text-white p-2 rounded hover:bg-blue-600 transition">
            Retry Quiz
          </button>
          <button
            onClick={toggleCorrectAnswers}
            className="mt-4 bg-purple-500 text-white p-2 rounded hover:bg-purple-600 transition"
          >
            {showCorrectAnswers ? "Hide Correct Answers" : "View Correct Answers"}
          </button>
          {showCorrectAnswers && (
            <motion.div
              className="mt-4 p-4 border border-blue-300 rounded bg-blue-50"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-lg font-bold">Correct Answers:</h2>
              <ul>
                {questions.map((q) => (
                  <li key={q.id}>
                    <span className="font-semibold">{q.question}</span> - <span className="text-green-600">{q.answer}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          )}
        </motion.div>
      ) : (
        <motion.div
          className="bg-white p-5 rounded shadow-md"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          
          {questions[currentQuestionIndex].image && (
            <img
              src={questions[currentQuestionIndex].image}
              alt="Question related"
              className="mb-4 rounded shadow-md mx-auto w-64 h-64 object-cover" // Fixed size for the image
            />
          )}
                      <div className="flex flex-col mb-4 justify-center mx-auto">
                          <h2 className="text-xl mb-4">{questions[currentQuestionIndex].question}</h2>
            {questions[currentQuestionIndex].options.map((option) => (
              <label key={option} className="flex items-center mb-2">
                <input
                  type="radio"
                  value={option}
                  checked={selectedOption === option}
                  onChange={() => handleOptionChange(option)}
                  className="mr-2 "
                />
                {option}
              </label>
            ))}
                          
          </div>
          <button
            onClick={handleSubmit}
            disabled={!selectedOption}
            className={`bg-blue-500 text-white p-2 rounded ${!selectedOption ? 'opacity-50 cursor-not-allowed' : 'hover:bg-blue-600 transition'}`}
          >
            Submit
          </button>
          {showAnswer && !isFinished && (
            <motion.div
              className="mt-4 p-3 border border-blue-300 rounded bg-blue-50"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <p className="text-lg font-bold">Correct Answer: <span className="text-green-600">{questions[currentQuestionIndex].answer}</span></p>
            </motion.div>
          )}
        </motion.div>
      )}
    </div>
  );
};

export default Quiz;
