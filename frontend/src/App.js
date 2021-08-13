import React, { useState, useCallback } from "react";
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch,
} from "react-router-dom";

import EditCard from "./components/meeting/editCard";
import ProductList from "./components/products/productList";
import ProductPage from "./components/products/productPage";
import NavBar from "./components/navbar/navbar";
import Chat from "./components/chat/chat";
import LoginForm from "./components/login/loginForm";
import { AuthContext } from "./components/general/auth-context";
import MeetingPage from "./components/meeting/meetingPage";
import MainPage from "./components/mainPage/mainPage";
import MainCustomerPage from "./components/customerService/mainCustomerPage";
import VideoChatPage from "./components/videoChat/videoChatPage";
import PlayGroundPage from "./components/playGround/playGroundPage";
import StoryList from "./components/stories/storyList/StoryList";
import StoryPage from "./components/stories/storyPage/StoryPage";


const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [username, setUsername] = useState(null);
  const [password, setPassword] = useState(null);
  const [isAdmin, setIsAdmin] = useState(false);

  const login = useCallback((username, password, admin) => {
    setIsLoggedIn(true);
    setUsername(username);
    setPassword(password);
    if (admin) {
      setIsAdmin(true)
    }
  }, []);

  const logout = useCallback(() => {
    setIsLoggedIn(false);
    setUsername(null);
    setPassword(null);
    setIsAdmin(false);
  }, []);
  return (
    <AuthContext.Provider
      value={{
        isLoggedIn: isLoggedIn,
        username: username,
        password: password,
        isAdmin: isAdmin,
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

          <Route path="/stories" exact>
            <StoryList />
          </Route>
          <Route path="/story1" exact>
            <StoryPage />
          </Route>
          <Route path="/edit/:id" exact>
            <EditCard/>
          </Route>
          <Route path="/videoChat/:mId">
            <VideoChatPage/>
          </Route>
          <Route path="/playGround">
            <PlayGroundPage/>
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
