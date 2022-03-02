import { Container, Badge, Link, List, ListItem } from "@chakra-ui/react"
import { Title, WorkImage, Meta } from "../../components/work"
import Layout from "../../components/layouts/article"

const Work = () => (
  <Layout title="Language Quiz with helpful hints">
    <Container maxW="container.lg" p={10}>
      <Title>
        Language Quiz with helpful hints <Badge>2020</Badge>
      </Title>

      <List ml={4} my={4}>
        {" "}
        <Link href="/quizzes/french/index.html" target="_blank">
          <WorkImage
            src="../../images/works/frenchQuiz.png"
            alt="Click to Start"
          />
        </Link>
        <ListItem>
          <Meta>Activity</Meta>A quiz application that provides a helping hand
          with a friendly tail wag.
          <br />
        </ListItem>
        <ListItem>
          <Meta>Learning Strategy</Meta>
          <span>
            This quiz provide learners with a self-paced tool for formative
            assessment. It can be used with any content by hardcoding answers or
            connecting to a database. It is best used for revisiting content
            that has already been introduced to learners and will appear in a
            later summative assessment. Hints appear with a faster tail wag when
            hovering over or focusing on the correct answer.
          </span>
        </ListItem>
        <ListItem>
          <Meta>Creative Tools</Meta>
          <span>Bootstrap, CSS, JavaScript, HTML, MongoDB</span>
        </ListItem>
      </List>
    </Container>
  </Layout>
)

export default Work
export { getServerSideProps } from "../../components/chakra"
