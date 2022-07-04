import Home from "./pages/home/Home";
import React, { useContext } from "react";
import Login from "./pages/login/Login";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Single from "./pages/single/Single";
import New from "./pages/new/New";
import List from "./pages/list/List";
import "./style/darkmode.scss";
import "./style/style.scss";
import { DarkModeContext } from "./context/darkModeContext";
import { AuthContext } from "./context/AuthContext";
import { userInputs } from "./formSource";
import SpotifyApi from "./SpotifyApi";
import { matchRoutes, useLocation } from "react-router-dom";

function App() {
  const { darkMode } = useContext(DarkModeContext);
  const { currentUser } = useContext(AuthContext);
  const RequireAuth = ({ children }) => {
    return currentUser ? children : <Navigate to="/login" />;
  };

  const routes = [{ path: "/members/:id" }];

  const useCurrentPath = () => {
    const location = useLocation();
    const [{ route }] = matchRoutes(routes, location);

    return route.path;
  };

  let routeinfo = useCurrentPath

  return (
    <div className={darkMode ? "app dark" : "app"}>
      <BrowserRouter>
        <Routes>
          <Route path="/">
            <Route path="login" element={<Login />} />
            <Route path="new" element={<New inputs={userInputs} />} />
            <Route
              index
              element={
                <RequireAuth>
                  <Home currentUser={currentUser} />
                </RequireAuth>
              }
            />

            <Route path="users">
              <Route
                index
                element={
                  <RequireAuth>
                    <List />
                  </RequireAuth>
                }
              />
              <Route
                path=":userId"
                element={
                  <RequireAuth>
                    <Single />
                  </RequireAuth>
                }
              />
            </Route>

            <Route path="products">
              <Route
                index
                element={
                  <RequireAuth>
                    <List />
                  </RequireAuth>
                }
              />
              <Route
                path=":productId"
                element={
                  <RequireAuth>
                    <Single />
                  </RequireAuth>
                }
              />
              <Route
                path="new"
                element={
                  <RequireAuth>
                    <New />
                  </RequireAuth>
                }
              />
            </Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
