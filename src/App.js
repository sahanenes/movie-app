import React from "react";

import AppRouter from "./router/AppRouter";

import AuthContextProvider from "./context/AuthContextProvider";

const App = () => {
  return (
    <div className="bg-grey-100  dark:bg-[#23242a]">
      <AuthContextProvider>
        <AppRouter></AppRouter>
      </AuthContextProvider>
    </div>
  );
};

export default App;
