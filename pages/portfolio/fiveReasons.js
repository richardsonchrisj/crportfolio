import { Container, Badge, Link, List, ListItem } from "@chakra-ui/react"
import { ExternalLinkIcon } from "@chakra-ui/icons"
import { Title, WorkImage, Meta } from "../../components/work"
import P from "../../components/paragraph"
import Layout from "../../components/layouts/article"

const Work = () => (
  <Layout title="fiveReasons">
    <Container>
      <Title>
        Five Reasons to Write an Essay <Badge>2021</Badge>
      </Title>
      <P>
        A video essay or written during COVID-19 to encourage critical thinking
        among and instrinsict motivation for college students.
      </P>
      <List ml={4} my={4}>
        <ListItem>
          <Meta>Website</Meta>
          <Link href="https://www.inkdrop.app/">
            https://www.inkdrop.app/ <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
        <ListItem>
          <Meta>Tools</Meta>
          <span>Adobe AfterEffects</span>
        </ListItem>
      </List>

      <WorkImage src="/images/works/fiveReasons.jpg" alt="Inkdrop" />
    </Container>
  </Layout>
)

export default Work
export { getServerSideProps } from "../../components/chakra"
