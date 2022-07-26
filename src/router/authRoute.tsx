import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "@screens/Home";
import RegisterUser from "@screens/RegisterUser";

const Stack = createNativeStackNavigator();

const AuthRoute = () => {
  return (
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="LoginRegister" component={RegisterUser} />
    </Stack.Navigator>
  );
};

export default AuthRoute;
