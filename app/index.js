import React from 'react';
import { render } from 'react-dom';
import { List, Map } from 'immutable';
import initialization from './store/initialization';
import Application from './containers/application';

const state = {
  slides: List(['Slide Un', 'Slide Deux', 'Slide Trois', 'Slide Quatre']),
  indexes: Map({
    current: 0,
    previous: null
  })
}

const store = initialization(state);

render(
  <Application store={store} />,
  document.getElementById('container')
);
