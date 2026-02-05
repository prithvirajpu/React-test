import React, { useState } from 'react';
import './ThirdPage.css';
import { useNavigate } from 'react-router-dom';

const ThirdPage = () => {
    const navigate=useNavigate()
  const [selected, setSelected] = useState(null);
  const [wrongClickCount, setWrongClickCount] = useState(0); // only counts wrong attempts
  const [showMessage, setShowMessage] = useState(false);

  const correctAnswer = 'C';

  // Different messages for repeated wrong clicks
  const wrongMessages = [
    "Utharam C aan Porke  ath poy njekk ",
    "Paranjath poy njekkadi 😤",
    "Onn njekko C il 🐸",
    "Thallammeeeeeeee .... 🐽",
  ];

  const handleOptionClick = (option) => {
    setSelected(option);
    setShowMessage(true);

    if (option !== correctAnswer) {
      // Only increment on wrong clicks
      setWrongClickCount((prev) => prev + 1);
    }
  };

  const isCorrect = selected === correctAnswer;

  // Get the message
  const getWrongMessage = () => {
    if (wrongClickCount === 0) return null;
    // Use click count -1 as index (first wrong = index 0)
    const index = (wrongClickCount - 1) % wrongMessages.length;
    return wrongMessages[index];
  };

  return (
    <div className="page-container">
      <div className="content-box">
        <h1>Question Time! 🐸 <br /> No .1</h1>

        <div className="question">
          <p>Nivin Pauly abinayicha nee kanda last padam 'in theatre' ?</p>
        </div>
         {showMessage && (
          <div className={`message ${isCorrect ? 'correct-msg' : 'wrong-msg'}`}>
            {isCorrect ? (
              <p>Yay! Correct aan 🐸💖 You are Brilliant !</p>
            ) : (
              <p>{getWrongMessage() || "Utharam C aan Porke  ath poy njekk 😏"}</p>
            )}
          </div>
        )}

        <div className="options">
          <button
            className={`option-btn ${selected === 'A' ? 'selected' : ''}`}
            onClick={() => handleOptionClick('A')}
          >
            A) Chanthupottu
          </button>

          <button
            className={`option-btn ${selected === 'B' ? 'selected' : ''}`}
            onClick={() => handleOptionClick('B')}
          >
            B) Pulimurugan
          </button>

          <button
            className={`option-btn ${selected === 'C' ? 'selected correct' : ''}`}
            onClick={() => handleOptionClick('C')}
          >
            C) Sarvam Maya
          </button>

          <button
            className={`option-btn ${selected === 'D' ? 'selected' : ''}`}
            onClick={() => handleOptionClick('D')}
          >
            D) None of this above
          </button>
        </div>

        {/* Optional: if correct, show next button */}
        {isCorrect && (
          <button onClick={()=>navigate('/fourth')} className="next-btn">
            Next Question →
          </button>
        )}

        <p className="small-note">Choose carefully makri... 😌</p>
      </div>
    </div>
  );
};

export default ThirdPage;