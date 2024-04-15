import { Provider } from "react-redux";
import { GlobalStyle } from "./styles/global";
import { store } from "./store";
import Router from "./routes";
import { BrowserRouter } from "react-router-dom";

export default function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <GlobalStyle />
        <Router />
      </BrowserRouter>
    </Provider>
  );
}
