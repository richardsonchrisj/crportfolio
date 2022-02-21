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

import datachats from "../public/images/podcasts/datachats.jpg"
import tinap from "../public/images/podcasts/tinap.jpg"

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
                See More
              </Link>
            </Text>
          </Center>
        </SimpleGrid>
      </Section>
      <Section delay={0.4}>
        <Heading as="h3" fontSize={20} mb={4}>
          <Divider my={6} />
          This is not a pipe podcast{" "}
        </Heading>
        <SimpleGrid columns={[1, 2, 2]} gap={6}>
          <GridItem
            title="Pulitzer Prize-winning author Heather Ann Thompson on Blood in the Water"
            thumbnail={tinap}
            href="https://www.tinapp.org/episodes/bloodinthewater"
          />
          <GridItem
            title="The Communication Skills Needed to Improve Data Projects"
            thumbnail={tinap}
            href="https://www.pragmaticinstitute.com/resources/podcasts/data/the-communication-skills-needed-to-improve-data-projects/"
          />

          <GridItem
            title="Filling Skill Gaps Crucial to Success in Data Roles"
            thumbnail={tinap}
            href="https://medium.com/@crichardsondev/college-professor-the-game-ddfd6f560c9c"
          />

          <Center>
            <Text fontSize="4xl">
              <Link href="https://tinapp.org" isExternal variant={"more"}>
                See More
              </Link>
            </Text>
          </Center>
        </SimpleGrid>
      </Section>
    </Container>
  </Layout>
)

export default Podcasts
export { getServerSideProps } from "../components/chakra"
