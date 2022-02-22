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
import NextLink from "next/link"
import second from "../public/images/posts/2.png"

const Home = () => {
  return (
    <Layout>
      <Container maxW="container.lg">
        <Section>
          <Heading as="h2" variant="page-title">
            Intro
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
            Skills
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
                Curriculum Development{" "}
              </Button>
              <Button
                variant="ghost"
                colorScheme="pink"
                leftIcon={<Icon as={ChevronRightIcon} />}
              >
                Data Analysis
              </Button>
              <Button
                variant="ghost"
                colorScheme="pink"
                leftIcon={<Icon as={ChevronRightIcon} />}
              >
                Data Visualization
              </Button>
              <Button
                variant="ghost"
                colorScheme="pink"
                leftIcon={<Icon as={ChevronRightIcon} />}
              >
                Design Thinking
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
                Web Design
              </Button>
            </span>
          </List>
        </Section>{" "}
        <Section delay={0.1}>
          <Heading as="h3" variant="section-title">
            Posts
          </Heading>{" "}
          <SimpleGrid columns={[1, 2, 2]} gap={6}>
            <GridItem
              title="7 Habits of Highly Effective—and Ineffective—Academics"
              thumbnail={second}
              href="https://medium.com/@crichardsondev/7-habits-of-highly-effective-and-ineffective-academics-3dc85edc80f8"
            />

            <Section delay={0.4}>
              <Heading as="h3" fontSize={20} mb={10} mt={100}>
                <NextLink href="/articles" passHref>
                  See More...
                </NextLink>
              </Heading>
            </Section>
          </SimpleGrid>
        </Section>
      </Container>
    </Layout>
  )
}
export default Home
export { getServerSideProps } from "../components/chakra"
