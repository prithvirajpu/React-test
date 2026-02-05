import React, { useState } from 'react';
import './ThirdPage.css'; // ← Reuse the same CSS file (or copy to FourthPage.css)
import { useNavigate } from 'react-router-dom';

const FourthPage = () => {
  const navigate = useNavigate();
  const [selected, setSelected] = useState(null);
  const [wrongClickCount, setWrongClickCount] = useState(0);
  const [showMessage, setShowMessage] = useState(false);

  const correctAnswer = '3'; // ← Manja (as you requested)

  const wrongMessages = [
    "Oru chance koodi tharam onnudi njekkiko 😏",
    "Utharam pinnem C aan ",
    "Paranjath poy njekkadi 😤",
    "Onn njekko C il 🐸",
    "Thallammeeeeeeee .... 🐽",
  ];

  const handleOptionClick = (option) => {
    setSelected(option);
    setShowMessage(true);

    if (option !== correctAnswer) {
      setWrongClickCount((prev) => prev + 1);
    }
  };

  const isCorrect = selected === correctAnswer;

  const getWrongMessage = () => {
    if (wrongClickCount === 0) return null;
    const index = (wrongClickCount - 1) % wrongMessages.length;
    return wrongMessages[index];
  };

  return (
    <div className="page-container">
      <div className="content-box">
        <h1>Question Time! 🐸 <br /> No .2</h1>

        <div className="question">
          <p>Parakum thavalayude color enth?</p>
        </div>

        {showMessage && (
          <div className={`message ${isCorrect ? 'correct-msg' : 'wrong-msg'}`}>
            {isCorrect ? (
              <p>Yay! Correct aan 🐸🟡 You are Brilliant !</p>
            ) : (
              <p>{getWrongMessage() || "Oru chance koodi tharam onnudi njekkiko 😏"}</p>
            )}
          </div>
        )}

        <div className="options">
          <button
            className={`option-btn ${selected === '1' ? 'selected' : ''}`}
            onClick={() => handleOptionClick('1')}
          >
            1) Neela
          </button>

          <button
            className={`option-btn ${selected === '2' ? 'selected' : ''}`}
            onClick={() => handleOptionClick('2')}
          >
            2) Majantha
          </button>

          <button
            className={`option-btn ${selected === '3' ? 'selected correct' : ''}`}
            onClick={() => handleOptionClick('3')}
          >
            3) Manja
          </button>

          <button
            className={`option-btn ${selected === '4' ? 'selected' : ''}`}
            onClick={() => handleOptionClick('4')}
          >
            4) None of this above
          </button>
        </div>

        {isCorrect && (
          <button onClick={() => navigate('/fifth')} className="next-btn">
            Next Question →
          </button>
        )}

        <p className="small-note">Choose carefully makri... 😌</p>
      </div>
    </div>
  );
};

export default FourthPage;