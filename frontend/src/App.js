import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch,
} from "react-router-dom";

import StoryList from "./components/stories/storyList";
import StoryPage from "./components/stories/storyPage";

const App = () => {
  return (
    <Router>
      <Switch>
        <Route path="/" exact>
          <StoryList />
        </Route>
        <Route path="/:storyId">
          <StoryPage />
        </Route>
        <Redirect to="/" />
      </Switch>
    </Router>
  );
};

export default App;
