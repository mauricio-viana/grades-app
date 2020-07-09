import React from 'react';
import { Link } from 'react-router-dom';

export default function EditGrade({ grade }) {
  const { _id, name, subject, type, value } = grade;
  return (
    <div>
      <div className="pt-4 pb-2 mb-3">
        <h4>Grade</h4>
      </div>
      <div>
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

        <Link
          to={'/grade/' + _id}
          className="btn btn-warning align-icon"
          style={{ width: '98px' }}
        >
          <i className="material-icons">create</i>
          <strong className="ml-2">Edit</strong>
        </Link>
      </div>
    </div>
  );
}
