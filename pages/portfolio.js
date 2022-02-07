import { Container, Heading, SimpleGrid, Divider } from "@chakra-ui/react"
import Section from "../components/section"
import Layout from "../components/layouts/article"
import { WorkGridItem } from "../components/grid-item"
import logo from "../public/images/works/logo.jpg"

const Portfolio = () => {
  return (
    <Layout>
      <Container>
        <Heading as="h3" fontSize={20} mb={10} mt={100}>
          Portfolio
        </Heading>
        <SimpleGrid columns={[1, 1, 2]} gap={6}>
          <Section>
            <WorkGridItem id="fiveReasons" title="fiveReasons" thumbnail={logo}>
              Five Reasons to Write an Essay
            </WorkGridItem>
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
