import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { LoadProvider } from 'components/loadcontext/LoadContext';
import { App } from 'components/App'; // Upewnij się, że ścieżka do komponentu App jest poprawna
import './index.css';

// ReactDOM.render(
//   <React.StrictMode>
//     <BrowserRouter basename="/goit-react-hw-05-movies/">
//       <App />
//     </BrowserRouter>
//   </React.StrictMode>,
//   document.getElementById('root')
// );
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <LoadProvider>
      <BrowserRouter basename="/goit-react-hw-05-movies/">
        <App />
      </BrowserRouter>
    </LoadProvider>
  </React.StrictMode>
);
