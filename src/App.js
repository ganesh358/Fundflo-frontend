import React from 'react';
import {
  ChakraProvider,
 
  theme,
} from '@chakra-ui/react';

import Allroutes from './Routes/Allroutes';


function App() {
  return (
    <ChakraProvider theme={theme}>
       <Allroutes/>
     
    </ChakraProvider>
  );
}

export default App;
