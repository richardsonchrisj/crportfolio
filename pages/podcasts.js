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

import datachats from "../public/images/posts/datachats.jpg"

// youtube
import intro from "../public/images/posts/intro.jpg"
import fyf from "../public/images/posts/fyf.jpg"
import grm from "../public/images/posts/grm.jpg"
import pcul from "../public/images/posts/pcul.jpg"
import pcul2 from "../public/images/posts/pcul2.jpg"
import capstone from "../public/images/posts/capstone.jpg"

const Podcasts = () => (
  <Layout title="Posts">
    <Container maxW="container.lg">
      <Section>
        <Heading as="h2" variant="page-title">
          Podcasts
        </Heading>
      </Section>

      <Section delay={0.2}>
        <Heading as="h3" fontSize={20} mb={4}>
          <Divider my={6} />
          Data Chats
        </Heading>
        <SimpleGrid columns={[1, 2, 2]} gap={6}>
          <GridItem
            title="Data Storytelling: Ensure Your Insights Make an Impact"
            thumbnail={datachats}
            href="https://medium.com/@crichardsondev/college-professor-the-game-ddfd6f560c9c"
          />
          <GridItem
            title="The Communication Skills Needed to Improve Data Projects"
            thumbnail={datachats}
            href="https://www.pragmaticinstitute.com/resources/podcasts/data/the-communication-skills-needed-to-improve-data-projects/"
          />

          <GridItem
            title="Filling Skill Gaps Crucial to Success in Data Roles"
            thumbnail={datachats}
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
        <Section delay={0.4}>
          <Divider my={6} />
          <Heading as="h3" fontSize={20} mb={10} mt={100}>
            Video
          </Heading>
        </Section>
      </Section>
      <Section delay={0.3}>
        <Heading as="h3" fontSize={20} mb={4}>
          Data Chats{" "}
        </Heading>
        <SimpleGrid columns={[1, 2, 2]} gap={6}>
          <GridItem
            title="Data Storytelling: Ensure Your Insights Make an Impact"
            thumbnail={datachats}
            href="https://medium.com/@crichardsondev/college-professor-the-game-ddfd6f560c9c"
          />
          <GridItem
            title="The Communication Skills Needed to Improve Data Projects"
            thumbnail={datachats}
            href="https://www.pragmaticinstitute.com/resources/podcasts/data/the-communication-skills-needed-to-improve-data-projects/"
          />
          <GridItem
            title="How to be Proactive in Implementing Data Standards
            "
            thumbnail={datachats}
            href="https://medium.com/@crichardsondev/7-habits-of-highly-effective-and-ineffective-academics-3dc85edc80f8"
          />
          <GridItem
            title="Filling Skill Gaps Crucial to Success in Data Roles"
            thumbnail={datachats}
            href="https://medium.com/@crichardsondev/college-professor-the-game-ddfd6f560c9c"
          />
          <GridItem
            title="Data Storytelling: Ensure Your Insights Make an Impact"
            thumbnail={datachats}
            href="https://medium.com/@crichardsondev/college-professor-the-game-ddfd6f560c9c"
          />{" "}
        </SimpleGrid>
      </Section>
      <Section delay={0.4}>
        <Heading as="h3" fontSize={20} mb={4}>
          YouTube
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
            title="Introduction to First-Year Foundations"
            thumbnail={fyf}
            href="https://www.youtube.com/watch?v=gFG-2o00iWM&list=PLiFEmj68GMDI0PzkK9906_GO82cwZ1qU5"
          />
          <GridItem
            title="Communication Studies Capstone"
            thumbnail={capstone}
            href="https://www.youtube.com/watch?v=Cg88Tx39sRE&list=PLiFEmj68GMDJEPcWly7MWphoSqf-0rhOg"
          />
          <GridItem
            title="Popping Culture: Research Methods for Studying the Popular"
            thumbnail={pcul2}
            href="https://www.youtube.com/watch?v=Jvt8JXSBnS0&list=PLiFEmj68GMDLZPzY4o3PJSDUoiePgM04O"
          />
          <GridItem
            title="Gender, Race, and Media"
            thumbnail={grm}
            href="https://www.youtube.com/watch?v=swZ19tE2emk&list=PLiFEmj68GMDIixzAKdRyFzxVVFDI5cFj2"
          />
        </SimpleGrid>
      </Section>
    </Container>
  </Layout>
)

export default Podcasts
export { getServerSideProps } from "../components/chakra"
