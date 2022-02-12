import NextLink from "next/link"
import {
  Box,
  Button,
  Container,
  Heading,
  Image,
  Link,
  List,
  ListItem,
  Icon,
  useColorModeValue,
  SimpleGrid,
} from "@chakra-ui/react"
import { BioSection, BioYear } from "../components/bio"
import { ChevronRightIcon } from "@chakra-ui/icons"
import Layout from "../components/layouts/article"
import Paragraph from "../components/paragraph"
import Section from "../components/section"

const Home = () => {
  return (
    <Layout>
      <Container my={10}>
        <Box display={{ lg: "flex" }}>
          <Box flexGrow={1}>
            <Heading as="h2" variant="page-title">
              Chris Richardson, PhD
            </Heading>
          </Box>
        </Box>

        <Section delay={0.1}>
          <Paragraph>
            Hi, I&apos;m Chris. I&apos;m an award-winning instructional designer
            with more than a decade of professional experience. I focus on
            fostering meaningful collaboration and effective learning through
            cutting-edge technologies and digital innovation. I&aps;ve created
            many online, hybrid, and in-person courses that promote engagement
            and retention. I&apos;m ane expert in evidence-based adult learning
            principles, learning theories, instructional design methodologies,
            and development models such as ADDIE, SAM, and Kirkpatrick&apos;s
            Levels of Education.
          </Paragraph>
          <Box align="center" my={4}>
            <NextLink href="/portfolio">
              <Button rightIcon={<ChevronRightIcon />} colorScheme="blue">
                My Portfolio
              </Button>
            </NextLink>
            <NextLink href="/connect">
              <Button rightIcon={<ChevronRightIcon />} colorScheme="blue">
                Connect
              </Button>
            </NextLink>
          </Box>
        </Section>

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
            On the web
          </Heading>
          <List>
            <ListItem>
              <Link href="https://github.com/craftzdog" target="_blank">
                <Button
                  variant="ghost"
                  colorScheme="pink"
                  leftIcon={<Icon as={ChevronRightIcon} />}
                >
                  @craftzdog
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
