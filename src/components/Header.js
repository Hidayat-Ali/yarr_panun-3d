import {
  Flex,
  Box,
  Text,
  IconButton,
  Link,
  useColorMode,
  useColorModeValue,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
} from '@chakra-ui/react';
import { useState } from 'react';
import { FaMoon, FaSun, FaBars } from 'react-icons/fa';

const Header = () => {
  const { toggleColorMode } = useColorMode();
  const text = useColorModeValue('dark', 'light');
  const SwitchIcon = useColorModeValue(FaMoon, FaSun);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const handleToggleMenu = () => {
    setIsModalOpen(!isModalOpen);
  };

  return (
    <Flex
      as="nav"
      align="center"
      justify="space-between"
      wrap="wrap"
      padding="1.5rem"
      bg={useColorModeValue('gray.100', 'gray.800')}
      color={useColorModeValue('gray.800', 'white')}
      borderBottom="1px solid"
      borderColor={useColorModeValue('gray.200', 'gray.700')}
    >
      <Box display={{ base: 'none', md: 'block' }}>
        <Text fontSize="2xl" fontWeight="bold">
          AaMiR
        </Text>
      </Box>

      <Box
        display={{ base: 'none', md: 'flex' }}
        width={{ base: '100%', md: 'auto' }}
        alignItems={'flex-end'}
        justifyContent={'flex-end'}
        flexGrow={1}
      >
        <Link href="/" marginRight={4}>
          Home
        </Link>
        <Link href="/portfolio" marginRight={4}>
          Portfollio
        </Link>
      </Box>
      <Box display={{ base: 'block', md: 'none' }}>
        <IconButton
          aria-label="Toggle menu"
          variant="ghost"
          color="current"
          icon={<FaBars />}
          onClick={handleToggleMenu}
        />

        <Modal isOpen={isModalOpen} onClose={handleToggleMenu} size={'full'}>
          <ModalOverlay />
          <ModalContent>
            <ModalHeader>AaMiR</ModalHeader>
            <ModalCloseButton />
            <ModalBody>
              <Link href="#" display="block" py="1">
                Home
              </Link>

              <Link href="#" display="block" py="1">
                Portfolio
              </Link>
            </ModalBody>
          </ModalContent>
        </Modal>
      </Box>

      <Box onClick={toggleColorMode} cursor="pointer">
        <IconButton
          aria-label={`Switch to ${text} mode`}
          variant="ghost"
          color="current"
          icon={<SwitchIcon />}
        />
      </Box>
    </Flex>
  );
};

export default Header;
