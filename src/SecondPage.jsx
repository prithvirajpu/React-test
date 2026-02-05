import React from 'react';
import './SecondPage.css';  
import { useNavigate } from 'react-router-dom';

const SecondPage = () => {
    const navigate=useNavigate()

  return (
    <div className="page-container">
      <div className="content-box yay">
        <h1>Yayyyy! 🐸💖</h1>
        <p>Rechu Makri from Paravur confirmed! ✨</p>
        <p className="heart">❤️💗❤️</p>
        <div>
        <p>Lets start the Question answers</p>
      </div>
      <button onClick={()=>navigate('/third')}>Ready</button>
      </div>
      
    </div>
  );
};

export default SecondPage;