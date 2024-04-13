import { Provider } from "react-redux";
import { GlobalStyle } from "./styles/global";
import { store } from "./store";

export default function App() {
  return (
    <Provider store={store}>
      <div>olá</div>
      <GlobalStyle />
    </Provider>
  )
}