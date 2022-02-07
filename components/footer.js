import { Box, Button, Icon, Link } from "@chakra-ui/react"
import {
  IoLogoTwitter,
  IoLogoInstagram,
  IoLogoGithub,
  IoLogoYoutube,
  IoLogoLinkedin,
} from "react-icons/io5"

const Footer = () => {
  return (
    <Box align="center" opacity={0.9} fontSize="sm">
      <Link
        href="https://www.linkedin.com/in/richardsonchrisj/"
        target="_blank"
      >
        <Button
          variant="ghost"
          colorScheme="teal"
          leftIcon={<Icon w={8} h={8} as={IoLogoLinkedin} />}
        ></Button>
      </Link>
      <Link href="https://github.com/richardsonchrisj" target="_blank">
        <Button
          variant="ghost"
          colorScheme="teal"
          leftIcon={<Icon w={8} h={8} as={IoLogoGithub} />}
        ></Button>
      </Link>
      <Link
        href="https://www.youtube.com/channel/UCGUR7iPQLwTb-dqv4HxAS9A"
        target="_blank"
      >
        <Button
          variant="ghost"
          colorScheme="teal"
          leftIcon={<Icon w={8} h={8} as={IoLogoYoutube} />}
        ></Button>
      </Link>
      <Link href="https://twitter.com/CRichardsonDev" target="_blank">
        <Button
          variant="ghost"
          colorScheme="teal"
          leftIcon={<Icon w={8} h={8} as={IoLogoTwitter} />}
        ></Button>
      </Link>
      <Link href="https://instagram.com/ChrisRichardson.Dev" target="_blank">
        <Button
          variant="ghost"
          colorScheme="teal"
          leftIcon={<Icon w={8} h={8} as={IoLogoInstagram} />}
        ></Button>
      </Link>
      <br />
      &copy; {new Date().getFullYear()} Chris Richardson. All Rights Reserved.
    </Box>
  )
}

export default Footer
