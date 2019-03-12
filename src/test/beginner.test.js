import React from 'react';
import App from '../components/App';

import ReactDOM from 'react-dom';

/* global  it expect :true */
/* eslint no-undef: "error" */


it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});
