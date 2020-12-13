import React, { FC } from 'react';
import { Route, Switch } from 'react-router';
import Home from './containers/pages/Home';
import Post from './containers/pages/Post';

const App: FC = () => {
  return (
    <>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/post/:postId">
          <Post />
        </Route>
        <Route>
          <p>Not Found</p>
        </Route>
      </Switch>
    </>
  );
};

export default App;
