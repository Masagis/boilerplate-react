import React from 'react';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import Login from './pages/Login/index';

const loading = (
  <div className="pt-3 text-center">
    <div className="sk-spinner sk-spinner-pulse" />
  </div>
);

const App = () => {
  return (
    <BrowserRouter>
      <React.Suspense fallback={loading}>
        <Routes>
          <Route
            key="home"
            path="/"
            exact
            render={() => <Navigate to="/login" />}
          />
          <Route
            key="login"
            path="/login"
            exact
            render={(props) => <Login {...props} />}
          />
        </Routes>
      </React.Suspense>
    </BrowserRouter>
  );
};

export default App;
