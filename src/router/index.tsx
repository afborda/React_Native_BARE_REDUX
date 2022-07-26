import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import OpenRoute from "./openRoute";
import AuthRoute from "./authRoute";

const RouteBase = () => {
  const user = false;
  return (
    <NavigationContainer>
      {user ? <AuthRoute /> : <OpenRoute />}
    </NavigationContainer>
  );
};

export default RouteBase;
