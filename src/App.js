import React from "react";

import AppRouter from "./router/AppRouter";

import AuthContextProvider from "./context/AuthContextProvider";

const App = () => {
  return (
    <div className="bg-[#23242a]">
      <AuthContextProvider>
        <AppRouter></AppRouter>
      </AuthContextProvider>
    </div>
  );
};

export default App;
