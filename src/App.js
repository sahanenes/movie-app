import React from "react";

import AppRouter from "./router/AppRouter";

import AuthContextProvider from "./context/AuthContextProvider";

const App = () => {
  return (
    <AuthContextProvider>
      <AppRouter></AppRouter>
    </AuthContextProvider>
  );
};

export default App;
