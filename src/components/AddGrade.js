import React, { useState } from 'react';
import GradeDataService from '../services/GradeService';
import ListSubHeader from './ListSubHeader';
import Message from './Message';
import { fieldValidation } from '../Helpers/fieldValidation';

const AddGrade = () => {
  const initialGradeState = {
    id: null,
    name: '',
    subject: '',
    type: '',
    value: '',
  };
  const [grade, setGrade] = useState(initialGradeState);
  const [submitted, setSubmitted] = useState(false);
  const [message, setMessage] = useState('');

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setGrade({ ...grade, [name]: value });
  };

  const saveGrade = () => {
    const data = {
      name: grade.name,
      subject: grade.subject,
      type: grade.type,
      value: grade.value,
    };

    const fieldsError = fieldValidation(data);

    if (fieldsError.length > 0) {
      setMessage(`Required fields: [ ${fieldsError.join([', '])} ]`);
      return;
    }

    GradeDataService.create(data)
      .then((response) => {
        setGrade({
          id: response.data.id,
          name: response.data.name,
          subject: response.data.subject,
          type: response.data.type,
          value: response.data.value,
        });
        setMessage('You submitted successfully!');
        setSubmitted(true);
      })
      .catch((e) => {
        console.log(e);
      });
  };

  const newGrade = () => {
    setMessage('');
    setGrade(initialGradeState);
    setSubmitted(false);
  };

  return (
    <main role="main" className="col-md-9 ml-sm-auto col-lg-10 px-md-4">
      <ListSubHeader titleHeader="Add new grade" visibleFieldSearch={false} />

      {submitted ? (
        <Message
          message={message}
          labelButton="Add"
          onClickRedirect={newGrade}
        />
      ) : (
        <div className="container" style={{ width: '50%' }}>
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <span></span>
            <input
              type="text"
              className="form-control"
              id="name"
              value={grade.name}
              onChange={handleInputChange}
              name="name"
              formNoValidate
            />
          </div>

          <div className="form-group">
            <label htmlFor="subject">Subject</label>
            <input
              type="text"
              className="form-control"
              id="subject"
              value={grade.subject}
              onChange={handleInputChange}
              name="subject"
            />
          </div>
          <div className="form-group">
            <label htmlFor="type">Type</label>
            <input
              type="text"
              className="form-control"
              id="type"
              value={grade.type}
              onChange={handleInputChange}
              name="type"
            />
          </div>
          <div className="form-group">
            <label htmlFor="value">Value</label>
            <input
              type="Number"
              className="form-control"
              id="value"
              value={grade.value}
              onChange={handleInputChange}
              name="value"
            />
          </div>
          <button onClick={saveGrade} className="btn btn-success">
            Submit
          </button>
          <p style={{ color: 'red', marginTop: '16px' }}> {message} </p>
        </div>
      )}
    </main>
  );
};

export default AddGrade;
