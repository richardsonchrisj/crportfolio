import { Container, Badge, Link, List, ListItem } from "@chakra-ui/react"
import { Title, WorkImage, Meta } from "../../components/work"
import Layout from "../../components/layouts/article"

const Work = () => (
  <Layout title="Three Questions">
    <Container maxW="container.lg" p={10}>
      <Title>
        Somewhere Shakespeare <Badge>2021</Badge>
      </Title>

      <List ml={4} my={4}>
        {" "}
        <Link href="/quizzes/shakespeare/index.html" target="_blank">
          <WorkImage
            src="../../images/works/shakespeareQuiz.png"
            alt="Click to Start"
          />
        </Link>
        <ListItem>
          <Meta>Activity</Meta>In this quiz, you&apos;ll need to answer where
          the Bard is located. Think <em>Where&apos;s Waldo</em>, but more
          highbrow! Answer questions about the location of the Bard&apos;s plays
          and see them come alive with Google Maps. Don&apos;t know much about
          Elizabethan literature? There&apos;s also a cheat function!
          <br />
        </ListItem>
        <ListItem>
          <Meta>Learning Strategy</Meta>
          <span>
            The activity captures answers from each question as well as how long
            they took to complete and other data. It allows for a summative
            assessment and provides context and sources for the activity.
          </span>
        </ListItem>
        <ListItem>
          <Meta>Creative Tools</Meta>
          <span>Bootstrap, CSS, JavaScript, Google Maps API, HTML</span>
        </ListItem>
      </List>
    </Container>
  </Layout>
)

export default Work
export { getServerSideProps } from "../../components/chakra"
