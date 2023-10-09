import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './main.css';

import { ContextProvider } from './context/ContextProvider';

ReactDOM.createRoot(document.getElementById('root')).render(
  <ContextProvider>
    <App />
  </ContextProvider>
);