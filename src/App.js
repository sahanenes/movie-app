import React, { useEffect } from "react";
import Register from "./pages/Register";
import AppRouter from "./router/AppRouter";
import { userObserver } from "./auth/firebase";

const App = () => {
  useEffect(() => {
    userObserver();
  }, []);

  return (
    <AppRouter>
      <Register />
    </AppRouter>
  );
};

export default App;
