import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { AuthContextProvider } from "./context/AuthContext";
import { GoogleOAuthProvider } from '@react-oauth/google';

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <AuthContextProvider>
    <GoogleOAuthProvider clientId="332111237577-stqc164mlbo4u2chv13j8pajkjobegg2.apps.googleusercontent.com"> 
      <App />
      </GoogleOAuthProvider> 
    </AuthContextProvider>
    
  </React.StrictMode>
);
