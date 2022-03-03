import { Container, Badge, Link, List, ListItem } from "@chakra-ui/react"
import { Title, WorkImage, Meta } from "../../components/work"
import Layout from "../../components/layouts/article"

const FiveReasons = () => (
  <Layout title="Five Reasons">
    <Container maxW="container.lg" p={10}>
      <Title>
        Five Reasons to Write an Essay <Badge>2021</Badge>
      </Title>

      <List ml={4} my={4}>
        {" "}
        <Link
          href="https://www.youtube.com/watch?v=QWYv-y0K0W0"
          target="_blank"
        >
          <WorkImage
            src="../../images/works/fiveReasons.jpg"
            alt="Five Reasons to Write an Essay Cover"
          />
        </Link>
        <ListItem>
          <Meta>Activity</Meta>
          <span>A short video to inspire writing during stressful times.</span>
        </ListItem>
        <ListItem>
          <Meta>Learning Strategy</Meta>
          <span>
            The video seeks to help viewers 1) identify the origins of essay
            writing; 2) Articulate key benefits of writing essays; and 3) Find
            intrinsic motivation to write an essay of one&apos;s own. It first
            appeared with a capstone course that included a summative assessment
            in the form of an essay. Earlier formative assessments occurred
            throughout the course and included analytics that confirmed having
            watched and commented on ideas from the video.
          </span>
        </ListItem>
        <ListItem>
          <Meta>Creative Tools</Meta>
          <span>
            Adobe AfterEffects, Adobe Audition, Adobe PhotoShop, Adobe Premiere
            Pro
          </span>
        </ListItem>
      </List>
    </Container>
  </Layout>
)

export default FiveReasons
export { getServerSideProps } from "../../components/chakra"
