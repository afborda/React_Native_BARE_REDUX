import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Login from "@screens/Login";
import Home from "@screens/Home";
import LoginRegister from "@screens/LoginRegister";

const Stack = createNativeStackNavigator();

const OpenRoute = () => {
  return (
    <Stack.Navigator
      initialRouteName="login"
      screenOptions={{ headerShown: false }}
    >
      <Stack.Screen name="login" component={Login} />
      <Stack.Screen
        name="LoginRegister"
        options={{ headerShown: true }}
        component={LoginRegister}
      />
    </Stack.Navigator>
  );
};

export default OpenRoute;
