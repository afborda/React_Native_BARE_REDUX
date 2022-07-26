import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "@screens/Home";
import RegisterUser from "@screens/RegisterUser";
import { HOME, REGISTER_USER } from "./typeRoutes";

const Stack = createNativeStackNavigator();

const AuthRoute = () => {
  return (
    <Stack.Navigator initialRouteName={HOME}>
      <Stack.Screen name={HOME} component={Home} />
      <Stack.Screen name={REGISTER_USER} component={RegisterUser} />
    </Stack.Navigator>
  );
};

export default AuthRoute;
