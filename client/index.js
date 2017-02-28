import ReactDom from 'react-dom';
import { App } from './modules/App';
import React from 'react';

const rootDomEl = document.getElementById('root');

function renderPage() {
  ReactDom.render(
      <App world="world"></App>,
      rootDomEl
  );
}
renderPage();

// TODO: implement hot reloading
// if (module.hot) {
//   module.hot.accept('./modules/App', () => {
//     renderPage();
//   })
// }