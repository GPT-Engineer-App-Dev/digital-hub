import { Box, Heading, VStack, Input, Textarea, Button } from "@chakra-ui/react";

const Contact = () => (
  <Box p={4}>
    <VStack spacing={4} align="stretch">
      <Heading>Contact Me</Heading>
      <Input placeholder="Your Name" />
      <Input placeholder="Your Email" />
      <Textarea placeholder="Your Message" />
      <Button colorScheme="blue">Send Message</Button>
    </VStack>
  </Box>
);

export default Contact;