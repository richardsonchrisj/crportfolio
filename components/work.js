import NextLink from "next/link"
import { Heading, Box, Image, Link, Badge } from "@chakra-ui/react"
import { ChevronRightIcon } from "@chakra-ui/icons"

export const Title = ({ children }) => (
  <Box>
    <NextLink href="/works">
      <Link>Works</Link>
    </NextLink>

    <Span>
      &nbsp;
      <ChevronRightIcon />
      &nbsp;
    </Span>
    <Heading display="inline-block" as="h3" fontSize={20} mb={4}>
      {Children}
    </Heading>
  </Box>
)
export const WorkImage = ({ src, alt }) => (
  <Image borderRadius="lg" w="full" src={src} alt={alt} mb={4} />
)
export const meta = ({ children }) => (
  <Badge colorScheme="green" mr={2}>
    {children}
  </Badge>
)
