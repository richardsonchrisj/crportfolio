import { Container, Badge, Link, List, ListItem } from "@chakra-ui/react"
import { Title, WorkImage, Meta } from "../../components/work"
import Layout from "../../components/layouts/article"
import fiveReasons from "../../public/images/works/fiveReasons.jpg"

const Work = () => (
  <Layout title="fiveReasons">
    <Container>
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
          <Meta>Description</Meta>A video essay written during COVID-19 to
          encourage critical thinking among and instrinsict motivation for
          college students.
          <br />
        </ListItem>
        <ListItem>
          <Meta>Tools</Meta>
          <span>Adobe AfterEffects</span>
        </ListItem>
      </List>
    </Container>
  </Layout>
)

export default Work
export { getServerSideProps } from "../../components/chakra"
