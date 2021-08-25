import { ThemeProvider } from "styled-components";
import { Provider } from "react-redux";
import Header from "../common/components/Header";
import Routes from "../routes";
import theme from "../styles/global-theme-variable";
import { store } from "./store";

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <Provider store={store}>
        <Header />
        <Routes />
      </Provider>
    </ThemeProvider>
  );
}
