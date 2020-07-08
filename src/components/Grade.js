import React, { useState, useEffect } from 'react';
import GradeDataService from '../services/GradeService';
import ListSubHeader from './ListSubHeader';
import Message from './Message';
import { fieldValidation } from '../Helpers/fieldValidation';

const Grade = (props) => {
  const initialGradeState = {
    id: null,
    name: '',
    subject: '',
    type: '',
    value: '',
  };
  const [currentGrade, setCurrentGrade] = useState(initialGradeState);
  const [submitted, setSubmitted] = useState(false);
  const [message, setMessage] = useState('');

  const getGrade = (id) => {
    GradeDataService.get(id)
      .then((response) => {
        setCurrentGrade(response.data);
      })
      .catch((e) => {
        console.log(e);
      });
  };

  useEffect(() => {
    getGrade(props.match.params.id);
  }, [props.match.params.id]);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setCurrentGrade({ ...currentGrade, [name]: value });
  };

  const updateGrade = () => {
    const fieldsError = fieldValidation(currentGrade);

    if (fieldsError.length > 0) {
      setMessage(`Required fields: [ ${fieldsError.join([', '])} ]`);
      return;
    }

    GradeDataService.update(currentGrade._id, currentGrade)
      .then((_) => {
        setMessage('The grade was updated successfully!');
        setSubmitted(true);
      })
      .catch((e) => {
        console.log(e);
      });
  };

  const deleteGrade = () => {
    GradeDataService.remove(currentGrade._id)
      .then((_) => {
        setMessage('The grade was deleted successfully!');
        setSubmitted(true);
      })
      .catch((e) => {
        console.log(e);
      });
  };

  const redirectGrades = () => {
    props.history.push('/grade');
  };

  return (
    <main role="main" className="col-md-9 ml-sm-auto col-lg-10 px-md-4">
      <ListSubHeader titleHeader="Edit grade" visibleFieldSearch={false} />

      {currentGrade ? (
        submitted ? (
          <Message
            message={message}
            labelButton="Grades"
            onClickRedirect={redirectGrades}
          />
        ) : (
          <div className="container" style={{ width: '50%' }}>
            <div className="form-group ">
              <label htmlFor="name">Name</label>
              <input
                type="text"
                className="form-control"
                id="name"
                name="name"
                value={currentGrade.name}
                onChange={handleInputChange}
              />
            </div>
            <div className="form-group">
              <label htmlFor="subject">Subject</label>
              <input
                type="text"
                className="form-control"
                id="subject"
                name="subject"
                value={currentGrade.subject}
                onChange={handleInputChange}
              />
            </div>
            <div className="form-group">
              <label htmlFor="type">Type</label>
              <input
                type="text"
                className="form-control"
                id="type"
                name="type"
                value={currentGrade.type}
                onChange={handleInputChange}
              />
            </div>
            <div className="form-group">
              <label htmlFor="value">Value</label>
              <input
                type="number"
                className="form-control"
                id="value"
                name="value"
                value={currentGrade.value}
                onChange={handleInputChange}
              />
            </div>

            <button className="btn btn-danger mr-4" onClick={deleteGrade}>
              Delete
            </button>

            <button
              type="submit"
              className="btn btn-success"
              onClick={updateGrade}
            >
              Update
            </button>
            <p style={{ color: 'red', marginTop: '16px' }}> {message} </p>
          </div>
        )
      ) : (
        <div>
          <br />
          <p>Please click on a Grade...</p>
        </div>
      )}
    </main>
  );
};

export default Grade;
