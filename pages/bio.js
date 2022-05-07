import { BioSection, BioYear } from "../components/bio"
import Layout from "../components/layouts/article"
import { Container, Heading, SimpleGrid, Link, Button } from "@chakra-ui/react"
import Section from "../components/section"
import { ChevronRightIcon } from "@chakra-ui/icons"

const Bio = () => {
  return (
    <Layout>
      <Container maxW={"container.lg"}>
        <SimpleGrid columns={[1, 2, 2]} spacing={10} gap={6}>
          <Link
            href="https://docs.google.com/document/d/1ohe4pXmRszgo4cuJO4zymv_qS7PedOwkGwcNsdhLGTU/export?format=pdf"
            target="_blank"
          >
            <Button rightIcon={<ChevronRightIcon />} colorScheme="blue">
              Download Resume
            </Button>
          </Link>
        </SimpleGrid>
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
            Bachelor of Journalism, Ryerson University
          </BioSection>
          <BioSection>
            <BioYear>2008</BioYear>
            Master of Arts in Popular Culture, Brock University
          </BioSection>
          <BioSection>
            <BioYear>2012</BioYear>
            PhD in Media Studies, Western University
          </BioSection>
          <BioSection>
            <BioYear>2012</BioYear>
            Assistant Professor, Young Harris College
          </BioSection>
          <BioSection>
            <BioYear>2015</BioYear>
            Department Chair, Young Harris College
          </BioSection>
          <BioSection>
            <BioYear>2019</BioYear>
            Associate Professor, Young Harris College
          </BioSection>
          <BioSection>
            <BioYear>2021</BioYear>
            Senior Instructional Designer, Pragmatic Institute
          </BioSection>
          <BioSection>
            <BioYear>2021</BioYear>
            Google Data Analytics Certificate
          </BioSection>
          <BioSection>
            <BioYear>2021</BioYear>
            Professional Certificate in Coding, MIT
          </BioSection>
          <BioSection>
            <BioYear>2022</BioYear>
            Instructional Designer, Thorn
          </BioSection>
        </Section>
      </Container>
    </Layout>
  )
}
export default Bio
export { getServerSideProps } from "../components/chakra"
