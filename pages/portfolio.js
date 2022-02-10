import { Container, Heading, SimpleGrid, Divider } from "@chakra-ui/react"
import Section from "../components/section"
import Layout from "../components/layouts/article"
import { WorkGridItem } from "../components/grid-item"
import fiveReasons from "../public/images/works/fiveReasons.jpg"

const Portfolio = () => {
  return (
    <Layout>
      <Container>
        <Heading as="h3" fontSize={20} mb={10} mt={100}>
          Portfolio
        </Heading>

        <SimpleGrid columns={[1, 1, 2]} gap={6}>
          <Section delay={0.4}>
            <Divider my={6} />
            <Heading as="h3" fontSize={20} mb={10} mt={100}>
              Video
            </Heading>
          </Section>
          <Section>
            <WorkGridItem
              id="fiveReasons"
              title="Five Reasons to Write an Essay"
              thumbnail={fiveReasons}
            ></WorkGridItem>
          </Section>
          <Section delay={0.4}>
            <Divider my={6} />
            <Heading as="h3" fontSize={20} mb={10} mt={100}>
              Other Works
            </Heading>
          </Section>
        </SimpleGrid>
      </Container>
    </Layout>
  )
}

export default Portfolio
