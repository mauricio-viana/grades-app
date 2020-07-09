import React from 'react';

export default function SearchName(props) {
  const { onClickSearch, onChangeSearchName, valueSearchName } = props;

  const handleClickSearch = () => {
    onClickSearch();
  };

  const handleChangeInputSearchName = (event) => {
    const searchName = event.target.value;
    onChangeSearchName(searchName);
  };

  return (
    <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3">
      <h4>Grade List</h4>
      <div className="btn-toolbar mb-2 mb-md-0">
        <div className="input-group mb-2">
          <input
            type="text"
            className="form-control"
            placeholder="Search by name"
            value={valueSearchName}
            onChange={handleChangeInputSearchName}
          />
          <div className="input-group-append">
            <button
              className="btn btn-outline-secondary align-icon"
              type="button"
              onClick={handleClickSearch}
            >
              <i className="material-icons">search</i>
              <strong className="mr-2 ml-2">Search</strong>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
