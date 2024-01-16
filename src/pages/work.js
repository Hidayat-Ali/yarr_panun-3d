import { Flex, Box, Heading, Grid, Image } from '@chakra-ui/react';

const Work = () => {
  return (
    <Flex
      justifyContent="center"
      flexDirection="column"
      alignItems="center"
      textAlign={'center'}
    >
      <Box mb={8}>
        <Heading as="h1" color="red">
          VISUAL{' '}
          <Heading as="span" color="green">
            EXPECTATIONS
          </Heading>
        </Heading>
      </Box>

      <Grid
        templateColumns={{ base: '1fr', md: 'repeat(3, 1fr)' }}
        gap={4}
        justifyContent="center"
        alignItems="center"
      >
        <Box>
          <Image
            src="assets/images/model1.jpeg"
            alt="Image 1"
            width="100%"
            mx="auto"
          />
        </Box>
        <Box>
          <Image
            src="assets/images/model1.jpeg"
            alt="Image 1"
            width="100%"
            mx="auto"
          />
        </Box>
        <Box>
          <Image
            src="assets/images/model1.jpeg"
            alt="Image 1"
            width="100%"
            mx="auto"
          />
        </Box>
        <Box>
          <Image
            src="assets/images/model1.jpeg"
            alt="Image 1"
            width="100%"
            mx="auto"
          />
        </Box>
        <Box>
          <Image
            src="assets/images/model1.jpeg"
            alt="Image 1"
            width="100%"
            mx="auto"
          />
        </Box>{' '}
        <Box>
          <Image
            src="assets/images/model1.jpeg"
            alt="Image 1"
            width="100%"
            mx="auto"
          />
        </Box>{' '}
        <Box>
          <Image
            src="assets/images/model1.jpeg"
            alt="Image 1"
            width="100%"
            mx="auto"
          />
        </Box>
        <Box>
          <Image
            src="assets/images/model2.jpeg"
            alt="Image 2"
            width="100%"
            mx="auto"
          />
        </Box>
        <Box>
          <Image
            src="assets/images/model4.avif"
            alt="Image 3"
            width="100%"
            mx="auto"
          />
        </Box>
      </Grid>
    </Flex>
  );
};

export default Work;
