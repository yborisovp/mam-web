import React from 'react';
import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import UserPage from "./Views/UserPage";
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
import { SearchView } from "./Views/Search/Search";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <BrowserRouter>
    <React.StrictMode>
      <Routes>
        <Route element={<HeaderLayout />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/me" element={<UserPage />} />
          <Route path="/item" element={<ItemView />} />
          <Route path="/create" element={<CreateEditView edit={false} />} />
          <Route path="/edit" element={<CreateEditView edit={true} />} />
          <Route path="/search" element={<SearchView />} />
        </Route>

        <Route path="/login" element={<AuthorizationPage isLogin={true} />} />
        <Route
          path="/registration"
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
