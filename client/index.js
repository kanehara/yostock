import render from 'react-dom';
import AppContainer from 'react-hot-loader';
import App from './modules/App';

const rootDomEl = document.getElementById('root');

function renderPage() {
  render(
      <AppContainer>
        <App world="world"></App>
      </AppContainer>,
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