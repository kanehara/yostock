import ReactDom from 'react-dom';
import { App } from './components/App';
import React from 'react';

const rootDomEl = document.getElementById('root');

function renderPage() {
  ReactDom.render(
      <App></App>,
      rootDomEl
  );
}
renderPage();

// TODO: implement hot reloading
// if (module.hot) {
//   module.hot.accept('./components/app', () => {
//     renderPage();
//   })
// }