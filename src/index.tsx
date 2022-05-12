import ReactDOM from 'react-dom';
import { ChakraProvider } from '@chakra-ui/react';
import './style/index.css';

import App from './App';

ReactDOM.render(
  <ChakraProvider>
    <App />
  </ChakraProvider>,
  document.getElementById('root'),
);
