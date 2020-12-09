import React, { FC, useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';

const query = `
{
  postCollection {
    items {
      title
      body
      slug
    }
  }
}`;

const App: FC = () => {
  const [page, setPage] = useState({ title: '', body: '', slug: '' });

  useEffect(() => {
    // eslint-disable-next-line @typescript-eslint/no-floating-promises
    window
      .fetch(
        `https://graphql.contentful.com/content/v1/spaces/${
          process?.env?.REACT_APP_CONTENTFUL_SPACE_ID ?? ''
        }/`,
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            // Authenticate the request
            Authorization: `Bearer ${
              process?.env?.REACT_APP_CONTENTFUL_DELIVERY_API_TOKEN ?? ''
            }`,
          },
          // send the GraphQL query
          body: JSON.stringify({ query }),
        },
      )
      .then((response) => response.json())
      .then(({ data, errors }) => {
        if (errors) {
          // eslint-disable-next-line no-console
          console.error(errors);
        }

        // rerender the entire component with new data
        // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
        setPage(data.postCollection.items[0]);
      });
  }, []);

  if (!page) {
    return <p>Loading...</p>;
  }

  return (
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
  );
};

export default App;
