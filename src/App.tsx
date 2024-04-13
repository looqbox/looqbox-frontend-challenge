import { Provider } from "react-redux";
import { GlobalStyle } from "./styles/global";
import { store } from "./store";
import Home from "./pages/Home";

export default function App() {
  return (
    <Provider store={store}>
      <GlobalStyle />

      <Home />
    </Provider>
  );
}
