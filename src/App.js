import React, { Component } from 'react';
// import CompanyStore from "./stores/CompanyStore";
// import * as CompanyActions from "./actions/CompanyAction.js";
// import CompanyEditForm from './container/Users/CompanyEditForm.js';
import Recommendations from './container/Recommend/RecommendLayout';

class App extends Component {
  constructor() {
    super();
  }

  

  render() {
    return (
      <div className="App">
        <Recommendations/>
      </div>
    );
  }
}

export default App;
