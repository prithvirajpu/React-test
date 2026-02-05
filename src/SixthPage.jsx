import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
// import './SixthPage.css'; 

const SixthPage = () => {
  const navigate = useNavigate();
  const [answer, setAnswer] = useState(null);

  const handleAnswer = (choice) => {
    setAnswer(choice);
  };

  return (
    <div className="page-container">
      <div className="content-box">
        <h1>Final Question! 🐸💖</h1>

        <div className="question">
          <p>Do you love me?</p>
        </div>

        <div className="buttons">
          <button
            className={`btn yes ${answer === 'yes' ? 'selected' : ''}`}
            onClick={() => handleAnswer('yes')}
          >
            Yes
          </button>

          <button
            className={`btn no ${answer === 'no' ? 'selected' : ''}`}
            onClick={() => handleAnswer('no')}
          >
            No
          </button>
        </div>

        {answer && (
          <div className={`message ${answer === 'yes' ? 'correct-msg' : 'wrong-msg'}`}>
            {answer === 'yes' ? (
              <p>Yayyyy! 🐸💕 I know that..! ❤️❤️❤️</p>
            ) : (
              <p>Chattakam choodakki kuntk vekkum Yes paranjat poya mathy🐽</p>
            )}
          </div>
        )}

        {answer === 'yes' && (
          <button 
            className="next-btn"
            onClick={() => navigate('/end')} 
          >
            Next →
          </button>
        )}

        <p className="small-note">Be honest makri... 😌</p>
      </div>
    </div>
  );
};

export default SixthPage;