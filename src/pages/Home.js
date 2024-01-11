import React from 'react';
import { Flex, Box, Text, Image } from '@chakra-ui/react';
const Home = () => {
  return (
    <Flex>
      <Box flex="1" p="4">
        <Text fontSize="xl" fontWeight="bold" mb="4">
          Hey there i am Aamir Mehmood !
        </Text>
        <Text>
          Your text content goes here. You can add multiple paragraphs or any
          other text elements.
        </Text>
      </Box>

      <Box flex="1">
        <Image
          src="https://images.pexels.com/photos/14921244/pexels-photo-14921244.jpeg?auto=compress&cs=tinysrgb&w=800&lazy=load"
          alt="Your Image Alt Text"
          w="100%"
          h="100%"
          objectFit="cover"
          borderRadius="50%"
        />
      </Box>
    </Flex>
  );
};
export default Home;
