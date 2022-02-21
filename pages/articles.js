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
import datachats from "../public/images/posts/datachats.jpg"

// youtube
import intro from "../public/images/posts/intro.jpg"
import fyf from "../public/images/posts/fyf.jpg"
import grm from "../public/images/posts/grm.jpg"
import pcul from "../public/images/posts/pcul.jpg"
import pcul2 from "../public/images/posts/pcul2.jpg"
import capstone from "../public/images/posts/capstone.jpg"

const Articles = () => (
  <Layout title="Posts">
    <Container maxW="container.lg">
      <Section>
        <Heading as="h2" variant="page-title">
          Articles
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
    </Container>
  </Layout>
)

export default Articles
export { getServerSideProps } from "../components/chakra"
