import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Login from "@screens/Login";
import Home from "@screens/Home";
import LoginRegister from "@screens/LoginRegister";
import { LOGIN, LOGIN_REGISTER } from "./typeRoutes";

const Stack = createNativeStackNavigator();

const OpenRoute = () => {
  return (
    <Stack.Navigator
      initialRouteName={LOGIN}
      screenOptions={{ headerShown: false }}
    >
      <Stack.Screen name={LOGIN} component={Login} />
      <Stack.Screen name={LOGIN_REGISTER} component={LoginRegister} />
    </Stack.Navigator>
  );
};

export default OpenRoute;
