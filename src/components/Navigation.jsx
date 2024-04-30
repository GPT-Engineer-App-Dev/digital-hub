import { Box, Flex, Link } from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";

const Navigation = () => (
  <Flex as="nav" bg="gray.200" p={3} justify="space-between">
    <Box>
      <Link as={RouterLink} to="/" p={2}>
        Home
      </Link>
      <Link as={RouterLink} to="/about" p={2}>
        About
      </Link>
      <Link as={RouterLink} to="/contact" p={2}>
        Contact
      </Link>
    </Box>
  </Flex>
);

export default Navigation;