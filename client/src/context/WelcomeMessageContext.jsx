import { createContext, useState } from "react";

export const messageContext = createContext();

export const WelcomeMessageContext = ({ children }) => {
  const [welcomePageContent, setWelcomePageContent] = useState(null);

  return (
    <messageContext.Provider
      value={{ welcomePageContent, setWelcomePageContent }}
    >
      {children}
    </messageContext.Provider>
  );
};
