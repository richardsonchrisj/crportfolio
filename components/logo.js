import Link from "next/link"
import Image from "next/image"
import { Text, useColorModeValue } from "@chakra-ui/react"
import styled from "@emotion/styled"
import { keyframes } from "@emotion/react"

const bounce = keyframes`
  from, 20%, 53%, 80%, to {
    transform: translate3d(0,0,0);
  }
  40%, 43% {
    transform: translate3d(0, -30px, 0);
  }
  70% {
    transform: translate3d(0, -15px, 0);
  }
  90% {
    transform: translate3d(0,-4px,0);
  }
`

const LogoBox = styled.span`
  font-weight: bold;
  font-size: 20px;
  display: inline-flex;
  align-items: center;
  height: 75px;
  line-height: 20px;
  padding: 10px;

  &:hover img {
    animation: ${bounce} 2s ease-in-out 1;
  }
`

const Logo = () => {
  const logo = `/images/square.png`

  return (
    <Link href="/">
      <a>
        <LogoBox>
          <Image
            src={logo}
            width={70}
            height={70}
            alt="ChrisRichardson.Dev Logo"
          />
          <Text
            color={useColorModeValue("gray.800", "whiteAlpha.900")}
            fontFamily="Lato"
            fontWeight="bold"
            ml={3}
            fontSize={{ base: "24px", md: "40px", lg: "50px" }}
          >
            ChrisRichardson.Dev
          </Text>
        </LogoBox>
      </a>
    </Link>
  )
}

export default Logo
