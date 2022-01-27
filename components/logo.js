import Link from "next/link";
import Image from "next/image";
import { Text, useColorModeValue } from "@chakra-ui/react";
import styled from "@emotion/styled";
import { jsx, css, keyframes } from "@emotion/react";

const spin = keyframes`
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
`;

const LogoBox = styled.span`
  font-weight: bold;
  font-size: 18px;
  display: inline-flex;
  align-items: center;
  height: 75px;
  line-height: 20px;
  padding: 10px;

  &:hover img {
    animation: ${spin} 1s ease-in-out infinite;
  }
`;

const Logo = () => {
  const logo = `/images/logo-dark.png`;

  return (
    <Link href="/">
      <a>
        <LogoBox>
          <Image
            src={logo}
            width={256}
            height={75}
            alt="BatChris and Rupert Logo"
          />
          <Text
            color={useColorModeValue("gray.800", "whiteAlpha.900")}
            fontFamily="M PLUS Rounded 1c"
            fontWeight="bold"
            ml={3}
          >
            Chris Richardson, PhD
          </Text>
        </LogoBox>
      </a>
    </Link>
  );
};

export default Logo;
