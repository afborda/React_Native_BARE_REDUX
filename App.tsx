import RouteBase from "@router/index";
import { ThemeProvider } from "react-native-magnus";
import { Provider } from "react-redux";

import store from "./src/store";

const App = () => {
  return (
    <Provider store={store}>
      <RouteBase />
    </Provider>
  );
};

export default App;
