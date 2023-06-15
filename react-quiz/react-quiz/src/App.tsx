import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import { QuestionCard } from './components/QuestionCard';


const TOTAL_QUESTIONS = 10;
function App() {
  const [loading, setLoading] = useState(false);
  const [questions, setQuestions] = useState([]);
  const [number, setNumber] = useState(0);
  const [userAnswers, setUserAnswers] = useState([]);
  const [score, setScore] = useState(0);
  const [gameOver, setGamerOver] = useState(true);
  const startTrivia = async () => {

  }

  const checkAnswer = (e: React.MouseEvent<HTMLButtonElement>) => {

  }

  const nextQuestion = () => {

  }

  return (
    <div className="App">
      <h1>React Quiz</h1>
      <button className='start' onClick={startTrivia}>Start</button>
      <p className='score'>Score:</p>
      <p>Loading Question ...</p>
      <QuestionCard
        questionNr={number + 1}
        totalQuestions={TOTAL_QUESTIONS} 
        question={questions[number].question} 
        answers={questions[number].answers} 
        userAnswer={userAnswers ? userAnswers[number] : undefined} 
        callback={checkAnswer}/>
      <button className='next' onClick={nextQuestion}>
        Next Question
      </button>
    </div>
  );
}

export default App;
