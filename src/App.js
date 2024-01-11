import React from 'react';
import { ChakraProvider, Box, theme } from '@chakra-ui/react';
import Home from './pages/Home.js';
import Header from './components/Header';

function App() {
  return (
    <ChakraProvider theme={theme}>
      <Box textAlign="center" fontSize="xl">
        <Header />
        <Home />
      </Box>
    </ChakraProvider>
  );
}

export default App;
