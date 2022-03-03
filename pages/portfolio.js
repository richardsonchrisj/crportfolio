import { Container, Heading, SimpleGrid, Divider, Link } from "@chakra-ui/react"
import Section from "../components/section"
import Layout from "../components/layouts/article"
import { WorkGridItem } from "../components/grid-item"
import fiveReasons from "../public/images/works/fiveReasons.jpg"
import threeQuestions from "../public/images/works/threeQuestions.png"
import quizwithhints from "../public/images/works/frenchQuiz.png"
import shakespeare from "../public/images/works/shakespeareQuiz.png"

const Portfolio = () => {
  return (
    <Layout>
      <Container maxW="container.lg">
        <Section>
          <Heading as="h2" variant="page-title">
            Portfolio
          </Heading>
        </Section>

        <SimpleGrid columns={[1, 1, 2]} gap={6}>
          <Section delay={0.2}>
            <Divider my={6} />
            <Heading as="h3" fontSize={20} mb={10} mt={100}>
              Interactive Media
            </Heading>
          </Section>
          <Section>
            <WorkGridItem
              id="threeQuestions"
              title="Three Questions: An Articulate Storyline project"
              thumbnail={threeQuestions}
            ></WorkGridItem>
          </Section>
          <Section>
            <WorkGridItem
              id="somewhereShakespeare"
              title="Somewhere Shakespeare: A JavaScript text-based web app with Google Maps API"
              thumbnail={shakespeare}
            ></WorkGridItem>
          </Section>
          <Section>
            <WorkGridItem
              id="quizwithhints"
              title="French Quiz: A JavaScript multiple-choice web app that provides a helpful tail
              wag."
              thumbnail={quizwithhints}
            ></WorkGridItem>
          </Section>
          <Section delay={0.4}>
            <Divider my={6} />
            <Heading as="h3" fontSize={20} mb={10} mt={100}>
              Video
            </Heading>
          </Section>
          <Section>
            <WorkGridItem
              id="fiveReasons"
              title="Five Reasons to Write an Essay: A Video made with Adobe AfterEffects"
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
export { getServerSideProps } from "../components/chakra"
