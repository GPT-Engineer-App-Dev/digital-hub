import { Box, Heading, Text, Button } from "@chakra-ui/react";

const Index = () => (
  <Box p={4} textAlign="center">
    <Heading>Welcome to My Personal Website</Heading>
    <Text fontSize="xl" mt={4}>Explore my projects, learn about my skills, or get in touch!</Text>
    <Button colorScheme="blue" mt={4}>Learn More</Button>
  </Box>
);

export default Index;