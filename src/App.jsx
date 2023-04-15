import { useState } from "react";
import { GlobalStyles } from "./styles/GlobalStyles";
import { Login } from "./pages/Login";
import { RoutesMain } from "./routes";
import { UserProvider } from "./components/providers/UserContext";

export const App = () => {
  return (
    <div className="App">
      <GlobalStyles />
      <UserProvider>
        <RoutesMain />
      </UserProvider>
    </div>
  );
};
