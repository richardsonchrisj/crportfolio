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
            href="https://www.pragmaticinstitute.com/resources/podcasts/data-storytelling-ensure-your-insights-make-an-impact/"
          />
          <GridItem
            title="The Communication Skills Needed to Improve Data Projects"
            thumbnail={datachats}
            href="https://www.pragmaticinstitute.com/resources/podcasts/data/the-communication-skills-needed-to-improve-data-projects/"
          />

          <GridItem
            title="Filling Skill Gaps Crucial to Success in Data Roles"
            thumbnail={datachats}
            href="https://www.pragmaticinstitute.com/resources/podcasts/data/filling-skill-gaps-crucial-to-success-in-data-roles/"
          />

          <Center>
            <Text fontSize="4xl">
              <Link
                href="https://podcasts.apple.com/us/podcast/data-chats-podcast/id1507005455"
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
            title="Heather Ann Thompson discusses her Pulitzer Prize-winning book Blood in the Water: The Attica Prison Uprising of 1971 and its Legacy "
            thumbnail={tinap}
            href="https://www.tinapp.org/episodes/bloodinthewater"
          />
          <GridItem
            title="Scott Newstok discusses his book How to Think Like Shakespeare: Lessons from A Renaissance Education "
            thumbnail={tinap}
            href="https://www.tinapp.org/episodes/howtothink"
          />

          <GridItem
            title="Arthur I. Miller discusses his book The Artist in the Machine: The World of AI-Powered Creativity"
            thumbnail={tinap}
            href="https://www.tinapp.org/episodes/artistinthemachine"
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
