import { Box, Heading, Text, VStack, Flex } from "@chakra-ui/react";

const About = () => (
  <Box p={4}>
    <Flex direction="column" align="center" justify="center" p={10}>
      <Heading mb={4}>About Me</Heading>
      <Text fontSize="lg" mb={6}>I am a passionate web developer with a knack for creating visually appealing and user-friendly websites.</Text>
    </Flex>
    <Box bg="gray.100" p={10}>
      <Heading size="lg" textAlign="center" mb={4}>Skills</Heading>
      <VStack spacing={5}>
        <Text>HTML, CSS, JavaScript</Text>
        <Text>React, Vue, Angular</Text>
        <Text>Node.js, Express</Text>
      </VStack>
    </Box>
  </Box>
);

export default About;