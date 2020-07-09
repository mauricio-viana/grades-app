import React, { useState, useEffect } from 'react';
import GradeDataService from '../services/GradeService';

import ListSubHeader from './ListSubHeader';
import ViewGrade from './ViewGrade';
import SearchName from './SearchName';

const GradeList = () => {
  const [grade, setGrade] = useState([]);
  const [currentGrade, setCurrentGrade] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(-1);
  const [searchName, setSearchName] = useState('');

  useEffect(() => {
    retrieveGrade();
  }, []);

  const handleChangeSearchName = (newName) => {
    setSearchName(newName);
  };

  const retrieveGrade = () => {
    GradeDataService.getAll()
      .then((response) => {
        setGrade(response.data);
      })
      .catch((e) => {
        console.log(e);
      });
  };

  const refreshList = () => {
    retrieveGrade();
    setCurrentGrade(null);
    setCurrentIndex(-1);
  };

  const setActiveGrade = (grade, index) => {
    setCurrentGrade(grade);
    setCurrentIndex(index);
  };

  const removeAllGrade = () => {
    GradeDataService.removeAll()
      .then((_) => {
        refreshList();
      })
      .catch((e) => {
        console.log(e);
      });
  };

  const findByName = () => {
    GradeDataService.findByName(searchName)
      .then((response) => {
        setGrade(response.data);
      })
      .catch((e) => {
        console.log(e);
      });
  };

  return (
    <main className="col-md-9 ml-sm-auto col-lg-10 px-md-4">
      <ListSubHeader titleHeader="Grades" />

      <div className="row">
        <div className="col-md-6">
          <SearchName
            valueSearchName={searchName}
            onClickSearch={findByName}
            onChangeSearchName={handleChangeSearchName}
          />
          <ul className="list-group list-group-flush ul-grade-list border">
            {grade &&
              grade.map((grade, index) => (
                <li
                  className={
                    'list-group-item ' +
                    (index === currentIndex ? 'active' : '')
                  }
                  onClick={() => setActiveGrade(grade, index)}
                  key={index}
                >
                  {grade.name}
                </li>
              ))}
          </ul>
          <button
            className="m-3 btn btn-danger align-icon"
            onClick={removeAllGrade}
          >
            <i className="material-icons">delete_forever</i>
            <strong className="mr-2 ml-2">Remove All</strong>
          </button>
        </div>
        <div className="col-md-6">
          {currentGrade ? (
            <ViewGrade grade={currentGrade} />
          ) : (
            <div className="mt-4">
              <br />
              <p>Please click on a Grade...</p>
            </div>
          )}
        </div>
      </div>
    </main>
  );
};

export default GradeList;
