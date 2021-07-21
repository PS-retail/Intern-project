import React, { useState, useCallback } from "react";
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch,
} from "react-router-dom";

import ProductList from "./components/stories/productList";
import ProductPage from "./components/stories/productPage";
import NavBar from "./components/navbar/navbar";
import Chat from "./components/chat/chat";
import LoginForm from "./components/chat/loginForm";
import { AuthContext } from "./components/general/auth-context";

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [username, setUsername] = useState(null);
  const [password, setPassword] = useState(null);

  const login = useCallback((username, password) => {
    setIsLoggedIn(true);
    setUsername(username);
    setPassword(password);
  }, []);

  const logout = useCallback(() => {
    setIsLoggedIn(false);
    setUsername(null);
    setPassword(null);
  }, []);
  return (
    <AuthContext.Provider
      value={{
        isLoggedIn: isLoggedIn,
        username: username,
        password: password,
        login: login,
        logout: logout,
      }}
    >
      <Router>
        <NavBar />
        <Switch>
          <Route path="/" exact>
            <ProductList />
          </Route>
          <Route path="/chat" exact>
            <Chat />
          </Route>
          <Route path="/login" exact>
            <LoginForm />
          </Route>
          <Route path="/:storyId">
            <ProductPage />
          </Route>
          <Redirect to="/" />
        </Switch>
      </Router>
    </AuthContext.Provider>
  );
};

export default App;
