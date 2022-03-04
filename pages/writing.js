import {
  Container,
  Heading,
  SimpleGrid,
  Divider,
  Center,
  Text,
  Link,
} from "@chakra-ui/react"
import Layout from "../components/layouts/article"
import Section from "../components/section"
import { GridItem } from "../components/grid-item"

// Medium
import third from "../public/images/posts/3.png"
import second from "../public/images/posts/2.png"
import first from "../public/images/posts/1.png"

//Books
import batman from "../public/images/works/batman.jpg"
import crime from "../public/images/works/crime.jpg"
import violence from "../public/images/works/violence.jpg"

const Writing = () => (
  <Layout title="Posts">
    <Container maxW="container.lg">
      <Section>
        <Heading as="h2" variant="page-title">
          Writing
        </Heading>
      </Section>

      <Section delay={0.2}>
        <Heading as="h3" fontSize={20} mb={4}>
          <Divider my={6} />
          Medium
        </Heading>
        <SimpleGrid columns={[1, 2, 2]} gap={6}>
          <GridItem
            title="Free and Essential Tools for Academic Escape Artists"
            thumbnail={third}
            href="https://medium.com/@crichardsondev/free-and-essential-tools-for-academic-escape-artists-bb3c2468aa54"
          />
          <GridItem
            title="7 Habits of Highly Effective — and Ineffective — Academics"
            thumbnail={second}
            href="https://medium.com/@crichardsondev/7-habits-of-highly-effective-and-ineffective-academics-3dc85edc80f8"
          />
          <GridItem
            title="College Professor: The Game"
            thumbnail={first}
            href="https://medium.com/@crichardsondev/college-professor-the-game-ddfd6f560c9c"
          />
          <Center>
            <Text fontSize="4xl">
              <Link
                href="https://medium.com/@crichardsondev"
                isExternal
                variant={"more"}
              >
                Read More
              </Link>
            </Text>
          </Center>
        </SimpleGrid>
      </Section>
      <Section>
        <Heading as="h2" variant="page-title">
          Books
        </Heading>
      </Section>

      <Section delay={0.2}>
        <SimpleGrid columns={[1, 2, 2]} gap={6}>
          <GridItem
            title="Batman and the Joker: Contested Sexuality in Popular Culture"
            thumbnail={batman}
            href="https://amzn.to/3vD4vXB"
          />
          <GridItem
            title="Violence in American Society: An Encyclopedia of Trends, Problems, and Perspectives"
            thumbnail={violence}
            href="https://amzn.to/370SWPX"
          />
          <GridItem
            title="Covering Canadian Crime: What Journalists Should Know and the Public Should Question"
            thumbnail={crime}
            href="https://amzn.to/3KgqSXa"
          />
          <Center>
            <Text fontSize="4xl">
              <Link
                href="https://www.amazon.com/Chris-Richardson/e/B07R6V8S4M/ref=dp_byline_cont_pop_book_1?tag=breakwindo-20"
                isExternal
                variant={"more"}
              >
                Read More
              </Link>
            </Text>
          </Center>
        </SimpleGrid>
      </Section>
    </Container>
  </Layout>
)

export default Writing
export { getServerSideProps } from "../components/chakra"
