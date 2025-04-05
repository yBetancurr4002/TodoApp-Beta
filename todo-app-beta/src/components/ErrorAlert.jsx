import React from 'react';

function ErrorAlert({ message, onClose }) {
  return (
    <div className="alert alert-danger alert-dismissible fade show" role="alert">
      {message}
      <button type="button" className="btn-close" onClick={onClose} aria-label="Close"></button>
    </div>
  );
}

export default ErrorAlert;
