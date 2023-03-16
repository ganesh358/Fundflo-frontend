import React from 'react';
import {
  ChakraProvider,
 
  theme,
} from '@chakra-ui/react';

import Allroutes from './Routes/Allroutes';
import Order from './Pages/Order';

function App() {
  return (
    <ChakraProvider theme={theme}>
       <Allroutes/>
     
    </ChakraProvider>
  );
}

export default App;
