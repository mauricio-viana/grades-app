import React from 'react';

export default function Message({ message, labelButton, onClickRedirect }) {
  const handleClickRedirect = () => {
    onClickRedirect();
  };

  return (
    <div className="container">
      <h4>{message}</h4>
      <button className="btn btn-success" onClick={handleClickRedirect}>
        {labelButton}
      </button>
    </div>
  );
}
