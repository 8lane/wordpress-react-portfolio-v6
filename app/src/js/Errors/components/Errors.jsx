import React from 'react';

const Errors = ({ messages }) => {
  return (
    <ul className="list-unstyled">
      {messages.map((message, idx) => {
        return (
          <li key={idx}>{message}</li>
        );
      })}
    </ul>
  );
};

export default Errors;
