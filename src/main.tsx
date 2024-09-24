import React, { Suspense } from 'react'
import ReactDOM from 'react-dom/client'
import './css/reset.css';
import './css/style.scss';
import { BrowserRouter as Router } from 'react-router-dom'
import { QueryClientProvider } from 'react-query';
import Routing from './Routing';
import { queryClient } from './util/query-client';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Suspense fallback={<>Now Loading...</>}>
      <Router>
        <QueryClientProvider client={queryClient}>
          <Routing />
        </QueryClientProvider>
      </Router>
    </Suspense>
  </React.StrictMode>,
)
