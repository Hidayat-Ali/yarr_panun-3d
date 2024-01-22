import {
  Flex,
  Heading,
  Grid,
  Image,
  Box,
  Tabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel,
  Text,
  Button,
  Tooltip,
} from '@chakra-ui/react';
import React from 'react';
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

      <Tabs isFitted variant="enclosed" colorScheme="teal">
        <TabList mb="1em">
          <Tab>
            <Box position="relative">
              <Tooltip label="Welcome">
                <Image src="assets/images/one.svg" />
              </Tooltip>
            </Box>
          </Tab>
          <Tab>
            <Box position="relative">
              <Tooltip label="3d Art">
                <Image src="assets/images/two.svg" />
              </Tooltip>
            </Box>
          </Tab>
          <Tab>
            <Box position="relative">
              <Tooltip label="3d Modeling">
                <Image src="assets/images/one.svg" />
              </Tooltip>
            </Box>
          </Tab>
        </TabList>
        <TabPanels>
          <TabPanel>
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
          </TabPanel>

          <TabPanel>
            <Heading as="h3" textAlign="center" mt="4">
              Drop Comments!
            </Heading>
            <Text textAlign="center" mt="4">
              Lorem ipsum dolor sit amet, his ea mollis fabellas principes. Quo
              mazim facilis tincidunt ut, utinam saperet facilisi an vim.
            </Text>
            <Box textAlign="center" mt="4">
              <Button colorScheme="teal" variant="outline" rounded="full">
                Start Using Bootsnipp
              </Button>
            </Box>
          </TabPanel>
          <TabPanel>
            <Box textAlign="center">
              <i className="img-intro icon-checkmark-circle"></i>
            </Box>
            <Heading as="h3" textAlign="center" mt="4">
              Thanks for Staying Tuned! <Text color="#f48260">♥</Text> Bootstrap
            </Heading>
            <Text textAlign="center" mt="4">
              Lorem ipsum dolor sit amet, his ea mollis fabellas principes. Quo
              mazim facilis tincidunt ut, utinam saperet facilisi an vim.
            </Text>
          </TabPanel>
        </TabPanels>
      </Tabs>
    </Flex>
  );
};

export default Work;
