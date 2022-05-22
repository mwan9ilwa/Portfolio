import {
  Stack,
  IconButton,
  Link,
  Box,
  Text,
  useColorModeValue,
  Flex
} from "@chakra-ui/react";
import siteConfig from "../../configs/site-config";

interface ExternalLinkProps extends LinkProps {
  url: string;
  linkProps?: LinkProps;
  text: string;
}

const ExternalLink: React.FC<ExternalLinkProps> = ({
  url,
  linkProps,
  text,
  ...props
}) => {
  return (
    <Link href={url} {...linkProps} {...props}>
      {text}
    </Link>
  );
};

const iconProps = {
  variant: "ghost",
  size: "lg",
  isRound: true
};

const Footer = () => {
  return (
    <Stack
      as="footer"
      isInline
      spacing={[1, 2]}
      p={4}
      justifyContent="space-between"
      alignItems="center"
      w={["100%", "85%", "80%"]}
      maxW={800}
      mx="auto"
    >
      <Flex
        flexDirection={["column", "column", "row"]}
        flexFlow={["column-reverse", "column-reverse"]}
        justifyContent={["center", "space-between"]}
        alignItems="center"
        w="100%"
      >
        {/* <HStack> */}
        <Text
          textAlign="center"
          fontSize="sm"
          color={useColorModeValue("gray.500", "gray.200")}
        >
          © {new Date().getFullYear()} Mwangilwa Zimba{" "}
        </Text>
        {<Text color="gray.500" fontSize="sm" textAlign="left">
          Built on

          <ExternalLink
            color={useColorModeValue("gray.500", "gray.200")}
            url="https://cloud.google.com"
            text={" Google Cloud "}
            target="_blank"
          />
          {"  "}

        </Text>}
        {/* </HStack> */}
        <Box textAlign="center">
          {siteConfig.author.accounts.map((sc, index) => (
            <IconButton
              key={index}
              as={Link}
              isExternal
              href={sc.url}
              aria-label={sc.label}
              size="lg"
              colorScheme={sc.type}
              icon={sc.icon}
              {...iconProps}
            />
          ))}
        </Box>
      </Flex>
    </Stack>
  );
};

export default Footer;
