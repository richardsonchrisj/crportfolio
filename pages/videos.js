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

// youtube
import intro from "../public/images/posts/intro.jpg"
import pcul from "../public/images/posts/pcul.jpg"
import capstone from "../public/images/posts/capstone.jpg"

const Videos = () => (
  <Layout title="Posts">
    <Container maxW="container.lg">
      <Section>
        <Heading as="h2" variant="page-title">
          Videos
        </Heading>
      </Section>

      <Section delay={0.2}>
        <Heading as="h3" fontSize={20} mb={4}>
          <Divider my={6} />
          YHC Communication Studies
        </Heading>
        <SimpleGrid columns={[1, 2, 2]} gap={6}>
          <GridItem
            title="Introduction to Cultural Theory and Popular Culture"
            thumbnail={pcul}
            href="https://www.youtube.com/watch?v=QxF5srggLnA&list=PLiFEmj68GMDJB5s7_m93CeSGflBJ2JEEH"
          />{" "}
          <GridItem
            title="Introduction to Media Communication"
            thumbnail={intro}
            href="https://www.youtube.com/watch?v=2aUFo3MiWjk&list=PLiFEmj68GMDIBcQfsSxdfLtzhvJuEokk-"
          />
          <GridItem
            title="Communication Studies Capstone"
            thumbnail={capstone}
            href="https://www.youtube.com/watch?v=Cg88Tx39sRE&list=PLiFEmj68GMDJEPcWly7MWphoSqf-0rhOg"
          />
          <Center>
            <Text fontSize="4xl">
              <Link
                href="https://www.youtube.com/channel/UCGUR7iPQLwTb-dqv4HxAS9A/playlists"
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

export default Videos
export { getServerSideProps } from "../components/chakra"
