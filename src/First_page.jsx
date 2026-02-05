import React, { useState } from 'react';
import './FirstPage.css';
import { Navigate, useNavigate } from 'react-router-dom';

const FirstPage = () => {
  const [noMessage, setNoMessage] = useState(false);
  const navigate=useNavigate()


  return (
    <div className="page-container">
      <div className="content-box">
        <h1>Hello!</h1>

        <div className="question">
          <p>
            Are you <span className="highlight">Rechu Makri🐸</span> from{' '}
            <span className="highlight">Paravur</span>?
          </p>
        </div>

        <div className="buttons">
          <button onClick={()=>navigate('/second')} className="btn yes">Yes</button>
          <button onClick={()=>setNoMessage(true)} className="btn no">
            No
          </button>
        </div>

        {noMessage && (
          <div className="no-message">
            <p style={{color:'red'}}>Yes click cheyyadi panni makri </p>
          </div>
        )}

        <p className="small-note">just tap one of the buttons please</p>
      </div>
    </div>
  );
};

export default FirstPage;