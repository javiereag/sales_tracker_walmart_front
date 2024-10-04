import React from "react";
import { Provider } from "react-redux";
import store from "../redux/store";
import { Routes, Route } from "react-router-dom";
import Dashboard from "../pages/dashboard/dashboard";
import App from "../pages/App";
import SalesTracker from "../pages/sales-tracker/sales-tracker";

export const Navigation = () => {
  return (
    <React.Fragment>
      <Provider store={store}>
        <Routes>
          <Route element={<App />}>
            <Route index element={<Dashboard />} />
            <Route
              path={`${import.meta.env.BASE_URL}dashboards`}
              element={<Dashboard />}
            />
            <Route index element={<SalesTracker />} />
            <Route
              path={`${import.meta.env.BASE_URL}sales-tracker`}
              element={<SalesTracker />}
            />
          </Route>
        </Routes>
      </Provider>
    </React.Fragment>
  );
};
