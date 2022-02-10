import NextLink from "next/link"
import { Box, Button, Container, Heading, Image, Link } from "@chakra-ui/react"
import { BioSection, BioYear } from "../components/bio"
import { ChevronRightIcon } from "@chakra-ui/icons"
import Layout from "../components/layouts/article"
import Paragraph from "../components/paragraph"
import Section from "../components/section"

const Home = () => {
  return (
    <Layout>
      <Container my={10}>
        <Box display={{ md: "flex" }}>
          <Box flexGrow={1}>
            <Heading as="h2" variant="page-title">
              Chris Richardson, PhD
            </Heading>
          </Box>
        </Box>

        <Section delay={0.1}>
          <Paragraph>
            Hi, I&apos;m Chris. I&apos;m an Instructional Designer and Web
            Developer. For a decade, I taught Media and Cultural Studies at a
            small liberal arts college outside Atlanta. Now, I&apos;m based in
            San Diego, where I help professionals learn and collaborate more
            effectively through innovative, evidence-based design.
            <NextLink href="/portfolio/fiveReasons">
              <Link>Five Reasons to Write an Essay.</Link>
            </NextLink>
          </Paragraph>
          <Box align="center" my={4}>
            <NextLink href="/portfolio">
              <Button rightIcon={<ChevronRightIcon />} colorScheme="blue">
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
        </Section>
      </Container>
    </Layout>
  )
}
export default Home
export { getServerSideProps } from "../components/chakra"
