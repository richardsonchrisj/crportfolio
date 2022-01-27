import NextLink from "next/link";
import {
  Container,
  Button,
  Box,
  Heading,
  Image,
  useColorModeValue,
  Link,
} from "@chakra-ui/react";
import Section from "../components/section";
import Paragraph from "../components/paragraph";
import { BioSection, BioYear } from "../components/bio";
import { ChevronRightIcon } from "@chakra-ui/icons";

const Home = () => {
  return (
    <Container>
      <Box
        borderRadius="lg"
        bg={useColorModeValue("whiteAlpha.500", "whiteAlpha.200")}
        mb={6}
        mt={10}
        p={3}
        align="center"
      >
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
        <Box
          flexShrink={0}
          mt={{ base: 4, md: 0 }}
          ml={{ md: 6 }}
          align="center"
        >
          <Image
            borderColor="whiteAlpha.800"
            borderWidth={2}
            borderStyle="solid"
            maxWidth="100px"
            display="inline-block"
            borderRadius="full"
            src="/images/logo.jpg"
            alt="Profile image"
          />
        </Box>
      </Box>
      <Section delay={0.1}>
        <Heading as="h3" variant="section-title">
          Work
        </Heading>
        <Paragraph>
          Hi, I'm Chris. I'm a Senior Instructional Designer and Web Developer.
          For a decade, I taught Media and Cultural Studies at a small liberal
          arts college outside Atlanta. Now, I'm based in San Diego, where I
          help professionals learn and collaborate more effectively through
          innovative, evidence-based design.
          <NextLink href="/works/inkdrop">
            <Link>InkDrop</Link>
          </NextLink>
        </Paragraph>
        <Box align="center" my={4}>
          <NextLink href="/works">
            <Button rightIcon={<ChevronRightIcon />} colorScheme="teal">
              My Portfolio
            </Button>
          </NextLink>
        </Box>

        <Section delay={0.2}>
          <Heading as="h3" variant="section-title">
            Bio
          </Heading>
          <BioSection>
            <BioYear>1985</BioYear>
            Born in Toronto
          </BioSection>
          <BioSection>
            <BioYear>2007</BioYear>
            Completed Bachelor of Journalism, Ryerson University
          </BioSection>
          <BioSection>
            <BioYear>2008</BioYear>
            Completed Master of Arts, Brock University
          </BioSection>
          <BioSection>
            <BioYear>2012</BioYear>
            Completed PhD, Western University
          </BioSection>
          <BioSection>
            <BioYear>2012</BioYear>
            Hired as Assistant Professor, Young Harris College
          </BioSection>
          <BioSection>
            <BioYear>2015</BioYear>
            Promoted to Department Chair, Young Harris College
          </BioSection>
          <BioSection>
            <BioYear>2019</BioYear>
            Promoted to Associate Professor, Young Harris College
          </BioSection>
          <BioSection>
            <BioYear>2021</BioYear>
            Hired as Senior Instructional Designer, Pragmatic Institute
          </BioSection>
          <BioSection>
            <BioYear>2021</BioYear>
            Completed Google Data Analytics Certificate
          </BioSection>
          <BioSection>
            <BioYear>2021</BioYear>
            Completed Professional Certificate in Coding, MIT
          </BioSection>
        </Section>
        <Section delay={0.3}>
          <Heading as="h3" variant="section-title">
            I ❤️
          </Heading>
          <Paragraph>Art, Music</Paragraph>
        </Section>
      </Section>
    </Container>
  );
};
export default Home;
