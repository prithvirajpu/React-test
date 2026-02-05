import React, { useState } from 'react';
import './ThirdPage.css';
import { useNavigate } from 'react-router-dom';

const FourthPage = () => {
  const navigate = useNavigate();

  const [decisionSelected, setDecisionSelected] = useState(null);
  const [decisionYesCount, setDecisionYesCount] = useState(0);
  const [decisionNoCount, setDecisionNoCount] = useState(0);
  const [showDecisionMessage, setShowDecisionMessage] = useState(false);
  const [showRiddle, setShowRiddle] = useState(false);

  const noMessages = [
    "Ithil oru option oll continue go and click 😏",
    "I said click yes bitch 🐽",
  ];

  const getNoMessage = () => {
    if (decisionNoCount === 0) return null;
    const index = (decisionNoCount - 1) % noMessages.length;
    return noMessages[index];
  };

  const handleDecisionClick = (choice) => {
    setDecisionSelected(choice);
    setShowDecisionMessage(true);

    if (choice === 'Yes') {
      setDecisionYesCount((prev) => prev + 1);
      setShowRiddle(true);
    } else if (choice === 'No') {
      setDecisionNoCount((prev) => prev + 1);
    }
  };

  const isContinue = decisionSelected === 'Yes';

  // Riddle states
  const [riddleSelected, setRiddleSelected] = useState(null);
  const [riddleWrongCount, setRiddleWrongCount] = useState(0);
  const [showRiddleMessage, setShowRiddleMessage] = useState(false);

  const riddleCorrect = '3';

  const riddleWrongMessages = [
    "Ithin clue illa 😏",
    "Next 🐸",
    "Again 😤",
    "Once More 😤",
  ];

  const handleRiddleClick = (option) => {
    setRiddleSelected(option);
    setShowRiddleMessage(true);
    if (option !== riddleCorrect) {
      setRiddleWrongCount((prev) => prev + 1);
    }
  };

  const isRiddleCorrect = riddleSelected === riddleCorrect;

  const getRiddleWrongMessage = () => {
    if (riddleWrongCount === 0) return null;
    const index = (riddleWrongCount - 1) % riddleWrongMessages.length;
    return riddleWrongMessages[index];
  };

  const canGoNext = isRiddleCorrect && isContinue;

  return (
    <div className="page-container">
      <div className="content-box">
        <h1>Question Time! 🐸 <br /> No .3</h1>

        {!showRiddle && (
          <>
            <div className="question">
              <p>Next question valare important aan... quit cheyyano or continue cheyyano? 😏</p>
            </div>

            <div className="buttons" style={{ display: 'flex', justifyContent: 'center', gap: '3rem', margin: '1.5rem 0' }}>
              <button
                className="btn no"
                onClick={() => handleDecisionClick('No')}
              >
                No (Quit)
              </button>

              <button
                className="btn yes"
                onClick={() => handleDecisionClick('Yes')}
                style={{
                  transform: `scale(${1 + decisionNoCount * 0.25})`,   // ← GROWS EVERY TIME NO IS CLICKED
                  transition: 'transform 0.4s ease',
                  padding: '1rem 3rem',
                  fontSize: '1.4rem',
                  position: 'relative',
                  zIndex: 10,
                }}
              >
                Yes (Continue)
              </button>
            </div>

            {showDecisionMessage && (
              <div className={`message ${isContinue ? 'correct-msg' : 'wrong-msg'}`}>
                {isContinue ? (
                  <p>Yay! Athanne... 🐸💖</p>
                ) : (
                  <p>{getNoMessage() || "Ithil oru option oll continue go and click 😏"}</p>
                )}
              </div>
            )}
          </>
        )}

        {showRiddle && (
          <>
            <div className="question">
              <p>Njettilla vattayila? </p>
            </div>
            {showRiddleMessage && (
              <div className={`message ${isRiddleCorrect ? 'correct-msg' : 'wrong-msg'}`}>
                {isRiddleCorrect ? (
                  <p>Super !... Amazing..😘 <br />Last Question -------</p>
                ) : (
                  <p>{getRiddleWrongMessage() || "C 😏"}</p>
                )}
                
              </div>
            )}

            <div className="options">
              <button
                className={`option-btn ${riddleSelected === '1' ? 'selected' : ''}`}
                onClick={() => handleRiddleClick('1')}
              >
                1) Pappaya
              </button>
              <button
                className={`option-btn ${riddleSelected === '2' ? 'selected' : ''}`}
                onClick={() => handleRiddleClick('2')}
              >
                2) Ambazhanga
              </button>
              <button
                className={`option-btn ${riddleSelected === '3' ? 'selected correct' : ''}`}
                onClick={() => handleRiddleClick('3')}
              >
                3) Pappadam
              </button>
              <button
                className={`option-btn ${riddleSelected === '4' ? 'selected' : ''}`}
                onClick={() => handleRiddleClick('4')}
              >
                4) None of this above
              </button>
            </div>

            
          </>
        )}

        {canGoNext && (
          <button onClick={() => navigate('/six')} className="next-btn">
            Next →
          </button>
        )}

        <p className="small-note">Choose carefully makri... 😌</p>
      </div>
    </div>
  );
};

export default FourthPage;