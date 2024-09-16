import { Provider } from 'react-redux';
import store from './store';
import { ChakraProvider } from "@chakra-ui/react";
import { Router } from './routes/Router';
import { GlobalStyle } from './GlobalStyle';

function App() {
  return (
    <Provider store={store}>
      <ChakraProvider>
        <GlobalStyle />
        <Router />
      </ChakraProvider>
    </Provider>
  );
}

export default App;
