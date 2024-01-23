import {
  Box,
  Step,
  StepIndicator,
  StepStatus,
  StepIcon,
  StepNumber,
  StepTitle,
  StepDescription,
  StepSeparator,
  Stepper,
  Flex,
  Text,
  Image,
} from '@chakra-ui/react';
import { useSteps } from '@chakra-ui/stepper';
const steps = [
  {
    title: 'Profile',
    description:
      'As a 3D artist, I graduated with a perfect 10 CGPA, showcasing my mastery in computer graphics and animation. Proficient in tools like Autodesk Maya and Blender, I bring a blend of technical expertise and artistic vision to create visually stunning 3D artworks. Eager to contribute my skills to innovative projects in the realm of 3D animation and visual effects.',
  },
  {
    title: 'Experience',
    description:
      "As a 3D artist, I graduated with a stellar 10 CGPA, showcasing my expertise in computer graphics and animation. With hands-on experience in Autodesk Maya and Blender, I've excelled in producing visually striking 3D artworks. My commitment to innovation and accolades in art exhibitions highlight my dedication to pushing creative boundaries.",
  },
  { title: 'Awards', description: 'Select Rooms' },
];
const Portfollio = () => {
  const { activeStep } = useSteps({
    index: 1,
    count: steps.length,
  });
  return (
    <Flex
      minH="100vh"
      align="left"
      justify="left"
      direction={{
        base: 'column-reverse',
        lg: 'row',
        md: 'row',
        sm: 'column-reverse',
      }}
      p={10}
    >
      <Stepper index={activeStep} orientation="vertical" height="400px" gap="0">
        {steps.map((step, index) => (
          <Step key={index}>
            <StepIndicator>
              <StepStatus
                complete={<StepIcon />}
                incomplete={<StepNumber />}
                active={<StepNumber />}
              />
            </StepIndicator>

            <Box flexShrink="0" display="flex" flexDirection="column">
              <StepTitle width="100%" textAlign="left">
                {step.title}
              </StepTitle>
              <StepDescription flex="1" width={{ base: '60vw' }}>
                <Text textAlign={'justify'}> {step.description}</Text>
              </StepDescription>
            </Box>

            <StepSeparator />
          </Step>
        ))}
      </Stepper>
      <Box
        height={'300px'}
        width={{ base: '100%', md: '50%' }}
        marginLeft={'auto'}
        p={3}
        alignContent={'center'}
      >
        <Image src="assets/images/bg.jpeg" width={'fit-content'} />
      </Box>
    </Flex>
  );
};
export default Portfollio;
