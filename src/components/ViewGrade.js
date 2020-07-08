import React from 'react';
import { Link } from 'react-router-dom';

export default function EditGrade({ grade }) {
  const { _id, name, subject, type, value } = grade;
  return (
    <div>
      <h4>Grade</h4>
      <div>
        <label>
          <strong>Name:</strong>
        </label>{' '}
        {name}
      </div>
      <div>
        <label>
          <strong>Subject:</strong>
        </label>{' '}
        {subject}
      </div>
      <div>
        <label>
          <strong>Type:</strong>
        </label>{' '}
        {type}
      </div>
      <div>
        <label>
          <strong>Value:</strong>
        </label>{' '}
        {value}
      </div>

      <Link to={'/grade/' + _id} className="btn btn-warning">
        Edit
      </Link>
    </div>
  );
}
