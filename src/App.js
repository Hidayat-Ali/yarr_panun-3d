import React from 'react';
import { ChakraProvider, Box, theme } from '@chakra-ui/react';
import Home from './pages/Home.js';
import Header from './components/Header';
import Footer from './components/Footer.js';
import Portfollio from './pages/portfolio.js';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
function App() {
  return (
    <ChakraProvider theme={theme}>
      <Box textAlign="-webkit-center" fontSize="xl">
        <Router>
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/portfolio" element={<Portfollio />} />
          </Routes>
          <Footer />
        </Router>
      </Box>
    </ChakraProvider>
  );
}

export default App;
