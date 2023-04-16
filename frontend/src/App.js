// App.js
import React from 'react';
import 'flowbite/dist/flowbite.min.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import { Article } from './components/Article';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/articles/:article_id/:article_slug" element={<Article />} />
      </Routes>
    </Router>
  );
}

export default App;
