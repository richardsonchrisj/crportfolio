import { Container, Badge, Link, List, ListItem } from "@chakra-ui/react"
import { Title, WorkImage, Meta } from "../../components/work"
import Layout from "../../components/layouts/article"

const Work = () => (
  <Layout title="Three Questions">
    <Container maxW="container.lg" p={10}>
      <Title>
        Three Questions <Badge>2021</Badge>
      </Title>

      <List ml={4} my={4}>
        {" "}
        <Link href="/quizzes/threequestions/index.html" target="_blank">
          <WorkImage
            src="../../images/works/threeQuestions.png"
            alt="Click to Start"
          />
        </Link>
        <ListItem>
          <Meta>Activity</Meta>A short quiz based on reasearch from{" "}
          <Link
            href="https://www2.psych.ubc.ca/~ara/Manuscripts/Science-2012-Gervais-493-6.pdf"
            target="_blank"
          >
            <em>Science</em>
          </Link>{" "}
          that suggests these three questions correlate with one&apos;s
          inclination toward analytical or intuitive approaches to reasoning and
          religious believe. Are you willing to take the test?
          <br />
        </ListItem>
        <ListItem>
          <Meta>Learning Objectives</Meta>
          <span>
            1. Identify one&apos;s tendency toward analytical or intuitive
            thinking; 2. Assess how one&apos;s tendency could affect
            communication with others.
          </span>
        </ListItem>
        <ListItem>
          <Meta>Assessment Strategy</Meta>
          <span>
            The activity captures answers from each question as well as how long
            they took to complete and other data. It provides a summative
            assessment and provides context and sources for the activity.
          </span>
        </ListItem>
        <ListItem>
          <Meta>Creative Tools</Meta>
          <span>
            Articulate Storyline, Adobe Premiere Pro, CSS, JavaScript, HTML
          </span>
        </ListItem>
      </List>
    </Container>
  </Layout>
)

export default Work
export { getServerSideProps } from "../../components/chakra"
