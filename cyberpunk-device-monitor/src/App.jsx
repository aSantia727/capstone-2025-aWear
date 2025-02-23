// App.jsx
import GlobalStyle from "./GlobalStyles";
import AppRouter from "./AppRouter";
import PhoneFrame from "./components/PhoneFrame.jsx";

const App = () => {
  return (
    <>
      <GlobalStyle />
      <PhoneFrame>
        <AppRouter />
      </PhoneFrame>
    </>
  );
};

export default App;