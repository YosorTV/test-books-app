import React, { Suspense } from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { BrowserRouter as Router } from 'react-router-dom'
import { BooksProvider } from './HOC';
import { Loader } from './components/UI';

ReactDOM.render(
  <BooksProvider>
    <Router>
      <Suspense fallback={<Loader />}>
        <App />
      </Suspense>
    </Router>
  </BooksProvider>,
  document.getElementById('root')
);

