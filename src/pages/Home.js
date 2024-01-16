import React, { useEffect, useRef } from 'react';
import { Flex, Box, Text, Image, Button, useColorMode } from '@chakra-ui/react';
import { SplitText } from '../helpers/splitText';
import gsap from 'gsap';

const Home = () => {
  const { colorMode } = useColorMode();
  const salam = useRef(false);

  useEffect(() => {
    const split = new SplitText(salam.current, { type: 'chars' });
    const chars = split.chars;

    gsap.set(chars, { opacity: 0, y: 20 });

    const animation = gsap.timeline();

    chars.forEach((char, index) => {
      animation.to(char, {
        opacity: 1,
        y: 0,
        duration: 0.1,
        ease: 'power3.inOut',
      });
    });
  }, []);

  return (
    <Flex
      flexDirection={{ base: 'column', md: 'row' }}
      alignItems={{ base: 'center', md: 'flex-start' }}
      position="relative"
    >
      {/* Background Video */}
      <video
        autoPlay
        loop
        muted
        style={{
          position: 'absolute',
          width: '100%',
          height: '100%',
          objectFit: 'cover',
          zIndex: -1,
        }}
      >
        <source src="assets/images/vr.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      <Box>
        <Box mt={6}>
          <Text
            fontSize="50px"
            fontWeight="bold"
            ref={salam}
            color={colorMode === 'light' ? 'pink.400' : 'pink.200'}
            textAlign={{ base: 'left', sm: 'center' }}
          >
            Hey there i am Aamir Mehmood
          </Text>
        </Box>
        <Box justifyContent={'center'} maxW={{ base: '100%', md: '70%' }}>
          <Text
            fontSize="25px"
            textAlign={{ base: 'justify', md: 'justify', sm: 'justify' }}
            p={{ base: 5, md: 3, sm: 2 }}
            letterSpacing={'0.2px'}
            color={colorMode === 'light' ? 'green.500' : 'green.300'}
            ml={'auto'}
          >
            Your text content goes here. You can add multiple paragraphs or any
            other text elements.
          </Text>
          <Button colorScheme="pink" mt={5}>
            Email Me
          </Button>
        </Box>
      </Box>

      <Box flex={{ base: '1', md: '1' }} mx={'auto'} p={5}>
        <Image
          src="assets/images/mylinkeIn.png"
          alt="Your Image Alt Text"
          height={{ base: '100%', md: '100%', searchm: '100%' }}
          mx="auto"
          borderRadius={{ base: '50%', md: '50%', sm: '0%' }}
        />
      </Box>
    </Flex>
  );
};

export default Home;
