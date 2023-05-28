import React from 'react';
import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import HomePage from "./Views/Home/HomePage";
import reportWebVitals from "./reportWebVitals";
import { AuthorizationPage } from "./Views/Authorization/Authorization";
import HeaderLayout from "./Views/HeaderLayout";

import "./scss/bootstrap-custom.scss";
import "./scss/custom-bootstrap-buttons.scss";
import "./scss/default.scss";
import "./css/reset.css";
import "./index.scss";
import { ItemView } from "./Views/Item/ItemView";
import { CreateEditView } from "./Views/CreateEditView/CreateEditView";
import { UserPageView } from './Views/UserPage/UserPageView';
import { SearchView } from './Views/SearchView/SearchView';
import { ChatView } from './Views/Chat/ChatView';
import { ApplicationRoutes } from './RoutesConstants';

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <BrowserRouter>
    <React.StrictMode>
      <Routes>
        <Route element={<HeaderLayout />}>
          <Route path={ApplicationRoutes.HomePage} element={<HomePage />} />
          <Route path={ApplicationRoutes.ItemRoute}  element={<ItemView />} />
          <Route path={ApplicationRoutes.CreateRoute}  element={<CreateEditView edit={false} />} />
          <Route path={ApplicationRoutes.EditRoute}  element={<CreateEditView edit={true} />} />
          <Route path={ApplicationRoutes.SearchRoute}  element={<SearchView />} />
          <Route path={ApplicationRoutes.ChatRoute}  element={<ChatView/>}/>
          <Route path={ApplicationRoutes.MePage}  element={<UserPageView/>}/>
        </Route>

        <Route path={ApplicationRoutes.LoginPage} element={<AuthorizationPage isLogin={true} />} />
        <Route
          path={ApplicationRoutes.RegisterPage}
          element={<AuthorizationPage isLogin={false} />}
        />
      </Routes>
    </React.StrictMode>
  </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
