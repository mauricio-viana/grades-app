import React from 'react';

export default function ListSubHeader(props) {
  const {
    titleHeader,
    visibleFieldSearch,
    onClickSearch,
    onChangeSearchName,
    valueSearchName,
  } = props;

  const handleClickSearch = () => {
    onClickSearch();
  };

  const handleChangeInputSearchName = (event) => {
    const searchName = event.target.value;
    onChangeSearchName(searchName);
  };

  return (
    <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
      <h1 className="h2">{titleHeader}</h1>
      <div className="btn-toolbar mb-2 mb-md-0">
        {visibleFieldSearch && (
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
                className="btn btn-outline-secondary"
                type="button"
                onClick={handleClickSearch}
              >
                Search
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
