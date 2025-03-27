
import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { Homes,Stats,Upgrade, Post, Error } from './pages';

const App = () => {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Homes />}>
            {' '}
          </Route>
          <Route path="/stats" element={<Stats/>}>
            {' '}
          </Route>
          <Route path="/upgrade" element={<Upgrade />}>
            {' '}
          </Route>
          <Route path="/post" element={<Post />}>
            {' '}
          </Route>
          <Route path="/error" element={<Error />}>
            {' '}
          </Route>
        </Routes>
      </Router>
    </>
  );
}

export default App