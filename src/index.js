import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

// 라우터를 바로 여기에 할수도 있음
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

// 리덕스 상태관리
import { StoreProvider } from 'easy-peasy';
import store from './store/store'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <StoreProvider store={store}>
      <Router>
        <Routes>
          <Route path='/*' element={<App/>} />
        </Routes>
      </Router>
    </StoreProvider>
  </React.StrictMode>
);

