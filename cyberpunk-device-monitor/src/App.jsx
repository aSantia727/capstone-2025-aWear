import "react";
import { Provider } from "react-redux";
import store from "./store";
import GlobalStyle from "./GlobalStyles";
import AppRouter from "./AppRouter";
import PhoneFrame from "./components/PhoneFrame";

const App = () => {
  return (
    <Provider store={store}>
      <GlobalStyle />
      <PhoneFrame>
        <AppRouter />
      </PhoneFrame>
    </Provider>
  );
};

export default App;