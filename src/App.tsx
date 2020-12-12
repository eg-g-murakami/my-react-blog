import React, { FC, useState, useEffect } from 'react';
import { getEntries, TPost } from 'api';
import logo from './logo.svg';
import './App.css';

const App: FC = () => {
  const [page, setPage] = useState<TPost>({ title: '', body: '', slug: '' });

  useEffect(() => {
    void (async () => {
      const posts = await getEntries();
      setPage(posts[0]);
    })();
  }, []);

  return page ? (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>{page.title}</h1>
        <p>{page.slug}</p>
        <p>{page.body}</p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  ) : (
    <p>Loading...</p>
  );
};

export default App;
