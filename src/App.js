import React from 'react';
import { ChakraProvider, Box, theme } from '@chakra-ui/react';
import Home from './pages/Home.js';
import Header from './components/Header';
import Work from './pages/work.js';
import Footer from './components/Footer.js';

function App() {
  return (
    <ChakraProvider theme={theme}>
      <Box textAlign="-webkit-center" fontSize="xl">
        <Header />
        <Home />
        <Work />
        <Footer />
      </Box>
    </ChakraProvider>
  );
}

export default App;
