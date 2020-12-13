import React, { FC, useState, useEffect } from 'react';
import { getEntries, TPost } from 'api';
import logo from './logo.svg';
import './App.css';

const App: FC = () => {
  const [posts, setPosts] = useState<TPost[]>([
    { title: '', body: '', slug: '' },
  ]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    void (async () => {
      setIsLoading(true);
      const error = [
        {
          title: 'Sorry, something went wrong.',
          body: '',
          slug: '',
        },
      ];
      try {
        const fetchedPosts = await getEntries();
        setPosts(fetchedPosts ?? error);
      } catch (err) {
        throw new Error(err);
      } finally {
        setIsLoading(false);
      }
    })();
  }, []);

  return isLoading ? (
    <p>Loading...</p>
  ) : (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>{posts[0].title}</h1>
        <p>{posts[0].slug}</p>
        <p>{posts[0].body}</p>
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
  );
};

export default App;
