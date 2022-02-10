import { Box, Button, Icon, Link } from "@chakra-ui/react"
import {
  IoLogoTwitter,
  IoLogoInstagram,
  IoLogoGithub,
  IoLogoYoutube,
  IoLogoLinkedin,
  IoLogoMedium,
} from "react-icons/io5"

const Footer = () => {
  return (
    <Box align="center" p="3" m="3" opacity={0.7}>
      <Link
        href="https://www.linkedin.com/in/richardsonchrisj/"
        target="_blank"
      >
        <Button
          variant="ghost"
          colorScheme="pink"
          aria-label="LinkedIn Profile"
          leftIcon={<Icon w={8} h={8} as={IoLogoLinkedin} />}
        >
          LinkedIn
        </Button>
      </Link>
      <Link href="https://medium.com/@crichardsondev" target="_blank">
        <Button
          variant="ghost"
          colorScheme="pink"
          leftIcon={<Icon w={8} h={8} as={IoLogoMedium} />}
        >
          Medium
        </Button>
      </Link>
      <Link href="https://github.com/richardsonchrisj" target="_blank">
        <Button
          variant="ghost"
          colorScheme="pink"
          leftIcon={<Icon w={8} h={8} as={IoLogoGithub} />}
        >
          GitHub
        </Button>
      </Link>
      <Link
        href="https://www.youtube.com/channel/UCGUR7iPQLwTb-dqv4HxAS9A"
        target="_blank"
      >
        <Button
          variant="ghost"
          colorScheme="pink"
          leftIcon={<Icon w={8} h={8} as={IoLogoYoutube} />}
        >
          YouTube
        </Button>
      </Link>
      <Link href="https://twitter.com/CRichardsonDev" target="_blank">
        <Button
          variant="ghost"
          colorScheme="pink"
          leftIcon={<Icon w={8} h={8} as={IoLogoTwitter} />}
        >
          Twitter
        </Button>
      </Link>
      <Link href="https://instagram.com/ChrisRichardson.Dev" target="_blank">
        <Button
          variant="ghost"
          colorScheme="pink"
          leftIcon={<Icon w={8} h={8} as={IoLogoInstagram} />}
        >
          Instagram
        </Button>
      </Link>
      <Box align="center" p="3" m="3" opacity={0.7}>
        &copy; {new Date().getFullYear()} Chris Richardson. All Rights Reserved.
      </Box>
    </Box>
  )
}

export default Footer
