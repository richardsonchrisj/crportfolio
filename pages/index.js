import {
  Button,
  Container,
  Heading,
  List,
  Icon,
  SimpleGrid,
} from "@chakra-ui/react"

import { ChevronRightIcon } from "@chakra-ui/icons"
import Layout from "../components/layouts/article"
import Paragraph from "../components/paragraph"
import Section from "../components/section"
import { GridItem } from "../components/grid-item"
import thumbFiveReasons from "../public/images/posts/fiveReasons.jpg"

const Home = () => {
  return (
    <Layout>
      <Container maxW="container.lg">
        <Section>
          <Heading as="h2" variant="page-title">
            Chris Richardson, PhD
          </Heading>
        </Section>
        <Section delay={0.1}>
          <Paragraph>
            Hi, I&apos;m Chris. I&apos;m an award-winning instructional designer
            with more than a decade of professional experience. I&apos;m
            passionate about fostering meaningful collaboration and effective
            learning through cutting-edge technologies and digital innovation.
            I&apos;ve created many online, hybrid, and in-person courses that
            promote engagement and retention. They&apos;re also hella fun.
            I&apos;m an expert in evidence-based adult learning principles,
            learning theories, instructional design methodologies, and
            development models such as ADDIE, SAM, and Kirkpatrick&apos;s Levels
            of Education.
          </Paragraph>
        </Section>
        <Section delay={0.3}>
          <Heading as="h3" variant="section-title">
            Key skills
          </Heading>
          <List>
            <span>
              <Button
                variant="ghost"
                colorScheme="pink"
                leftIcon={<Icon as={ChevronRightIcon} />}
              >
                Adult Learning Theory
              </Button>
              <Button
                variant="ghost"
                colorScheme="pink"
                leftIcon={<Icon as={ChevronRightIcon} />}
              >
                Communication
              </Button>
              <Button
                variant="ghost"
                colorScheme="pink"
                leftIcon={<Icon as={ChevronRightIcon} />}
              >
                Data Analyis
              </Button>
              <Button
                variant="ghost"
                colorScheme="pink"
                leftIcon={<Icon as={ChevronRightIcon} />}
              >
                Digital Storytelling
              </Button>

              <Button
                variant="ghost"
                colorScheme="pink"
                leftIcon={<Icon as={ChevronRightIcon} />}
              >
                Educational Technologies
              </Button>

              <Button
                variant="ghost"
                colorScheme="pink"
                leftIcon={<Icon as={ChevronRightIcon} />}
              >
                Design for Deeper Learning
              </Button>

              <Button
                variant="ghost"
                colorScheme="pink"
                leftIcon={<Icon as={ChevronRightIcon} />}
              >
                Web Design
              </Button>
            </span>
          </List>
        </Section>{" "}
        <Section delay={0.1}>
          <Heading as="h3" variant="section-title">
            Top posts
          </Heading>{" "}
          <SimpleGrid columns={[1, 2, 2]} gap={6}>
            <GridItem
              title="Five Reasons to Write an Essay"
              thumbnail={thumbFiveReasons}
              href="https://www.youtube.com/watch?v=KKxhf50FIPI"
            />{" "}
            <GridItem
              title="Five Reasons to Write an Essay"
              thumbnail={thumbFiveReasons}
              href="https://www.youtube.com/watch?v=KKxhf50FIPI"
            />{" "}
            <GridItem
              title="Five Reasons to Write an Essay"
              thumbnail={thumbFiveReasons}
              href="https://www.youtube.com/watch?v=KKxhf50FIPI"
            />
          </SimpleGrid>
        </Section>
      </Container>
    </Layout>
  )
}
export default Home
export { getServerSideProps } from "../components/chakra"
