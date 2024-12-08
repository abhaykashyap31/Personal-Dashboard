import React from "react";
import { Box, Container, Stack, Text, Link, IconButton } from "@chakra-ui/react";
import { FaLinkedin, FaGithub, FaEnvelope } from "react-icons/fa";

const Footer = () => {
  return (
    <Box as="footer" bg="gray.800" color="white" py={4}>
      <Container maxW="container.lg">
        <Stack
          direction={{ base: "column", md: "row" }}
          justify="space-between"
          align="center"
          spacing={4}
        >
          <Text>© {new Date().getFullYear()} Your Name. All rights reserved.</Text>

          <Stack direction="row" spacing={4}>
            <Link href="https://www.linkedin.com/in/yourprofile" isExternal>
              <IconButton
                icon={<FaLinkedin />}
                aria-label="LinkedIn"
                variant="ghost"
                colorScheme="whiteAlpha"
              />
            </Link>
            <Link href="https://github.com/yourprofile" isExternal>
              <IconButton
                icon={<FaGithub />}
                aria-label="GitHub"
                variant="ghost"
                colorScheme="whiteAlpha"
              />
            </Link>
            <Link href="mailto:youremail@example.com">
              <IconButton
                icon={<FaEnvelope />}
                aria-label="Email"
                variant="ghost"
                colorScheme="whiteAlpha"
              />
            </Link>
          </Stack>
        </Stack>
      </Container>
    </Box>
  );
};

export default Footer;
