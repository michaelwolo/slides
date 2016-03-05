import React from 'react';
import { render } from 'react-dom';
import { state } from './store/base';
import initialization from './store/initialization';
import Application from './containers/application';
import Prism from 'prismjs';

const store = initialization(state);

render(
  <Application store={store} />,
  document.getElementById('container')
);
