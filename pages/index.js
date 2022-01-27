import NextLink from "next/link";
import { Container, Box, Heading } from "@chakra-ui/react";

const Home = () => {
  return (
    <Container>
      <Box borderRadius="lg" bg="red" mb={6} p={3} align="center">
        Hello, I&apos;m an Instructional Designer and full-stack developer based
        in San Diego!
      </Box>
      <Box display={{ md: "flex" }}>
        <Box flexGrow={1}>
          <Heading as="h2" variant="page-title">
            Chris Richardson, PhD
          </Heading>
          <p>
            Instructional designer. Web developer. Writer. Recovering academic.
          </p>
        </Box>
      </Box>
    </Container>
  );
};
export default Home;
