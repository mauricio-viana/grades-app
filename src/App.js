import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

import AddGrade from './components/AddGrade';
import Grade from './components/Grade';
import GradeList from './components/GradeList';

function App() {
  return (
    <Router>
      <div>
        <nav className="navbar navbar-dark sticky-top bg-dark shadow">
          <a href="/grade" className="navbar-brand col-md-3 col-lg-2">
            App
          </a>
        </nav>

        <div className="container-fluid">
          <div className="row">
            <nav
              className="col-md-3 col-lg-2 d-md-block bg-light position-fixed"
              style={styles.navBar}
            >
              <ul className="nav flex-column mt-4">
                <li className="nav-item">
                  <Link to={'/grade'} className="nav-link">
                    Grades
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to={'/add'} className="nav-link">
                    Add
                  </Link>
                </li>
              </ul>
            </nav>

            <Switch>
              <Route exact path={['/', '/grade']} component={GradeList} />
              <Route exact path="/add" component={AddGrade} />
              <Route path="/grade/:id" component={Grade} />
            </Switch>
          </div>
        </div>
      </div>
    </Router>
  );
}

const styles = {
  navBar: { height: '100%', borderRight: '1px solid lightgray' },
};

export default App;
