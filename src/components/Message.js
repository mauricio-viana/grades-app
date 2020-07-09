import React from 'react';

export default function Message({ message, labelButton, onClickRedirect }) {
  const handleClickRedirect = () => {
    onClickRedirect();
  };

  return (
    <div className="content-message shadow p-3 mb-5 bg-white rounded">
      <h4>{message}</h4>
      <button
        className="btn btn-success align-icon mt-4"
        onClick={handleClickRedirect}
      >
        <i className="material-icons">cached</i>
        <strong className="mr-2 ml-2">{labelButton}</strong>
      </button>
    </div>
  );
}
