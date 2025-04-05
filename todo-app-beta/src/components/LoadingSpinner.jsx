import React from 'react';

function LoadingSpinner() {
  return (
    <div className="d-flex justify-content-center my-3">
      <div className="spinner-border text-primary" role="status">
        <span className="visually-hidden">Cargando...</span>
      </div>
    </div>
  );
}

export default LoadingSpinner;
