import { Container, Heading, SimpleGrid, Divider } from "@chakra-ui/react"
import Section from "../components/section"
import Layout from "../components/layouts/article"
import { WorkGridItem } from "../components/grid-item"

import logo from "../public/images/works/logo.jpg"

const Works = () => {
  return (
    <Layout>
      <Container>
        <Heading as="h3" fontSize={20} mb={10} mt={100}>
          Works
        </Heading>
        <SimpleGrid columns={[1, 1, 2]} gap={6}>
          <Section>
            <WorkGridItem id="inkDrop" title="InkDrop" thumbnail={logo}>
              test stuff
            </WorkGridItem>
          </Section>
          <Section>
            <WorkGridItem id="inkDrop" title="InkDrop" thumbnail={logo}>
              test stuff
            </WorkGridItem>
          </Section>
          <Section>
            <WorkGridItem id="inkDrop" title="InkDrop" thumbnail={logo}>
              test stuff
            </WorkGridItem>
          </Section>
          <Section delay={0.4}>
            <Divider my={6} />
            <Heading as="h3" fontSize={20} mb={10} mt={100}>
              Other Works
            </Heading>
          </Section>
          <Section>
            <WorkGridItem id="inkDrop" title="InkDrop" thumbnail={logo}>
              test stuff
            </WorkGridItem>
          </Section>
          <Section>
            <WorkGridItem id="inkDrop" title="InkDrop" thumbnail={logo}>
              test stuff
            </WorkGridItem>
          </Section>
          <Section>
            <WorkGridItem id="inkDrop" title="InkDrop" thumbnail={logo}>
              test stuff
            </WorkGridItem>
          </Section>
          <Section>
            <WorkGridItem id="inkDrop" title="InkDrop" thumbnail={logo}>
              test stuff
            </WorkGridItem>
          </Section>
        </SimpleGrid>
      </Container>
    </Layout>
  )
}

export default Works
