import NextLink from "next/link"
import {
  Box,
  Button,
  Container,
  Heading,
  Icon,
  Image,
  Link,
  List,
  ListItem,
  SimpleGrid,
  useColorModeValue,
} from "@chakra-ui/react"
import { BioSection, BioYear } from "../components/bio"
import { ChevronRightIcon } from "@chakra-ui/icons"
import { GridItem } from "../components/grid-item"
import { IoLogoTwitter, IoLogoInstagram, IoLogoGithub } from "react-icons/io5"
import Layout from "../components/layouts/article"
import Paragraph from "../components/paragraph"
import Section from "../components/section"

const Home = () => {
  return (
    <Layout>
      <Container>
        <Box display={{ md: "flex" }}>
          <Box flexGrow={1}>
            <Heading as="h2" variant="page-title">
              Chris Richardson, PhD
            </Heading>
            <p>
              Instructional designer. Web developer. Writer. Recovering
              academic.
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
            Hi, I'm Chris. I'm a Senior Instructional Designer and Web
            Developer. For a decade, I taught Media and Cultural Studies at a
            small liberal arts college outside Atlanta. Now, I'm based in San
            Diego, where I help professionals learn and collaborate more
            effectively through innovative, evidence-based design.
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
        <Section delay={0.3}>
          <Heading as="h3" variant="section-title">
            On the web
          </Heading>
          <List>
            <ListItem>
              <Link href="https://github.com/richardsonchrisj" target="_blank">
                <Button
                  variant="ghost"
                  colorScheme="teal"
                  leftIcon={<Icon as={IoLogoGithub} />}
                >
                  @richardsonchrisj
                </Button>
              </Link>
            </ListItem>
            <ListItem>
              <Link href="https://twitter.com/inkdrop_app" target="_blank">
                <Button
                  variant="ghost"
                  colorScheme="teal"
                  leftIcon={<Icon as={IoLogoTwitter} />}
                >
                  @inkdrop_app (English)
                </Button>
              </Link>
            </ListItem>

            <ListItem>
              <Link
                href="https://instagram.com/ChrisRichardson.Dev"
                target="_blank"
              >
                <Button
                  variant="ghost"
                  colorScheme="teal"
                  leftIcon={<Icon as={IoLogoInstagram} />}
                >
                  @ChrisRichardson.Dev
                </Button>
              </Link>
            </ListItem>
          </List>
        </Section>
      </Container>
    </Layout>
  )
}
export default Home
export { getServerSideProps } from "../components/chakra"
