import React from 'react';
import './index.css';
import { CheckCircle } from 'react-feather'; // Feather icon for check mark

const VotingSuccessPage = () => {
  const handleContinue = () => {
    // Redirect or navigate to another page
    alert('Continue clicked!');
  };

  return (
    <div className="voting-success-container">
      <div className="success-card">
        <CheckCircle className="success-icon" size={64} />
        <h2>Voting Successful!</h2>
        <p>Your vote has been added successfully.</p>
        <button className="continue-button" onClick={handleContinue}>
          Continue
        </button>
      </div>
    </div>
  );
};

export default VotingSuccessPage;
