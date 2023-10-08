import ReactDOM from 'react-dom/client';
import App from './App';

import { Provider } from 'react-redux'; // react-redux에서 Provider 가져오기
import store from './pages/store'; // Redux 스토어 가져오기

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <Provider store={store}> {/* Provider로 앱 감싸기 */}
    <App />
  </Provider>
);