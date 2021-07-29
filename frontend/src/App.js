import React, { useState, useCallback } from "react";
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch,
} from "react-router-dom";

import ProductList from "./components/products/productList";
import ProductPage from "./components/products/productPage";
import NavBar from "./components/navbar/navbar";
import Chat from "./components/chat/chat";
import LoginForm from "./components/chat/loginForm";
import { AuthContext } from "./components/general/auth-context";
import MeetingPage from "./components/meeting/meetingPage";
import MainPage from "./components/mainPage/mainPage";
import MainCustomerPage from "./components/customerService/mainCustomerPage";
import VideoChatPage from "./components/videoChat/videoChatPage";


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
            <MainPage />
          </Route>
          <Route path="/products" exact>
            <ProductList />
          </Route>
          <Route path="/chat" exact>
            <Chat />
          </Route>
          <Route path="/login" exact>
            <LoginForm />
          </Route>
          <Route path="/meeting" exact>
            <MeetingPage/>
          </Route>
          <Route path="/customer" exact>
            <MainCustomerPage/>
          </Route>
          <Route path="/videoChat/:mId">
            <VideoChatPage/>
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
