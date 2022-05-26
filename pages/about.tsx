import * as React from 'react'
import {
  Box,
  Stack,
  VStack,
  Heading,
  Flex,
  Link,
  LinkProps,
  Text,
  Image,
  UnorderedList,
  useColorMode,
  useColorModeValue,
} from '@chakra-ui/react'
import {
  PageSlideFade,
  StaggerChildren,
  CardTransition,
} from 'components/shared/animations/page-transitions'

import {
  FiHome,
} from 'react-icons/fi'
import {
  FaReact,
  FaNodeJs,
  FaHtml5,
  FaPython,
  FaGoogle
} from "react-icons/fa";
import {
  SiGooglecloud,
} from "react-icons/si";

import { MotionBox } from 'components/shared/animations/motion'
import { companies, institutes } from 'data/data'
import { TimelineItem } from 'components/achievements/Timeline'
import Header from 'components/shared/header'
import PageLayout from 'components/layouts/pageLayout'
import { Tags } from 'components/shared/Tags'
import NextLink from 'next/link'
import { useLinkColor } from 'components/theme'

interface CardProps {
  title: string
  role: string
  skills: string[]
  period: string
  logo: string
  colorMode: string
  alt?: string
}


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

const InternalLink: React.FC<ExternalLinkProps> = ({
  url,
  linkProps,
  text,
  ...props
}) => {
  return (
    <Link as={NextLink} to={url} {...linkProps} {...props}>
      {text}
    </Link>
  );
};

const ANIMATION_DURATION = 0.5;

const TURQUOISE = '#06b6d4'

const Card = (props: CardProps) => {
  const { title, role, skills, period, logo, colorMode, alt } = props
  return (
    <CardTransition>
      <Box
        px={4}
        py={5}
        borderWidth="1px"
        _hover={{ shadow: 'lg' }}
        bg={useColorModeValue('white', 'gray.800')}
        position="relative"
        rounded="md"
      >
        <Flex justifyContent="space-between">
          <Flex>
            <Image
              rounded="full"
              w={16}
              h={16}
              objectFit="cover"
              fallbackSrc={'/assets/images/placeholder.png'}
              src={logo}
              alt={alt}
            />
            <Stack spacing={2} pl={3} align="left">
              <Heading
                align="left"
                fontSize="xl"
                color={`mode.${colorMode}.career.text`}
              >
                {title}
              </Heading>
              <Heading
                align="left"
                fontSize="sm"
                color={`mode.${colorMode}.career.subtext`}
              >
                {role}
              </Heading>
              <Stack
                spacing={1}
                mt={3}
                isInline
                alignItems="center"
                display={['none', 'none', 'flex', 'flex']}
              >
                <Tags
                  tags={skills}
                  interactive={false}
                  tagProps={{
                    colorScheme: 'gray',
                    padding: '0 3px',
                    size: 'sm',
                  }}
                />
              </Stack>
            </Stack>
          </Flex>
          <Stack display={['none', 'none', 'flex', 'flex']}>
            <Text fontSize={14} color={`mode.${colorMode}.career.subtext`}>
              {period}
            </Text>
          </Stack>
        </Flex>
        <Stack
          spacing={1}
          mt={3}
          isInline
          alignItems="center"
          display={['flex', 'flex', 'none', 'none']}
        >
          <Tags
            tags={skills}
            interactive={false}
            tagProps={{
              colorScheme: 'gray',
              padding: '0 3px',
              size: 'sm',
            }}
          />
        </Stack>
      </Box>
    </CardTransition>
  )
}

const About = ({ companies, institutes }) => {
  const { colorMode } = useColorMode()
  const linkColor = useLinkColor()

  return (
    <PageLayout
      title="About"
      description="My educational and professional journey so far"
    >

      <PageSlideFade>
        <Box align="center" fontSize="30" fontWeight="800" mb={5}>
          <Text>About Me</Text>

          <br></br>
          <Text align="left" fontSize="16" fontWeight="400" my={3} color={"grey.600"}>
            Hey, I'm Mwangilwa! I'm a software engineer working in Lusaka. Welcome
            to my nest on the web for projects I've created, and anything else I
            want to show the world.
          </Text>
        </Box>

        <VStack textAlign="start" align="start" mb={5}>
          <Box>
            <Text fontSize="20" fontWeight="600" my={5} color={linkColor}>
              What I'm doing now
            </Text>
            <Text
              textAlign="start"
              align="start"
              fontSize="16"
              fontWeight="400"
            >
              <li>
                Building my {" "}
                <ExternalLink
                  color={linkColor}
                  url="https://github.com/mwan9ilwa/mwangi.com"
                  text={"portolio "}
                  target="_blank"
                />
                webapp with React, ChakraUI and Firebase.
              </li>

              <li>
                Working fulltime.
              </li>
            </Text>
          </Box>

          <Box>
            <Text fontSize="20" fontWeight="600" my={5} color={linkColor}>
              Let's Connect
            </Text>
            <Text
              textAlign="start"
              align="start"
              fontSize="16"
              fontWeight="400"
            >
              <li>
                {" "}
                <ExternalLink
                  color={linkColor}
                  url="mailto://mwangilwa23@gmail.com"
                  text={"Email"}
                  target="_blank"
                />

              </li>

              <li>
                {" "}
                <ExternalLink
                  color={linkColor}
                  url="https://github.com/mwan9ilwa/"
                  text={"Github "}
                  target="_blank"
                />

              </li>

              <li>
                {" "}
                <ExternalLink
                  color={linkColor}
                  url="https://twitter.com/mwan9ilwa_"
                  text={"Twitter "}
                  target="_blank"
                />

              </li>
            </Text>
          </Box>


          <Box>
            <Text fontSize="20" fontWeight="600" my={5} color={linkColor}>
              Quotes
            </Text>
          </Box>
        </VStack>

        <Flex direction="column" align="left">
          <MotionBox
            w="100%"
            opacity="0"
            initial={{
              translateY: 80,
            }}
            animate={{
              translateY: 0,
              opacity: 1,
              transition: {
                delay: ANIMATION_DURATION - 0.1,
                duration: ANIMATION_DURATION,
              },
            }}
          >
            <Box mt={10}>
              <Stack
                mb={10}
                mx={[0, 0, 10]}
                padding={4}
                align="left"
                borderLeft="10px solid"
                borderColor={linkColor}
                color={"whatsapp"}
                _hover={{ shadow: "lg" }}
                backgroundColor={useColorModeValue("gray.100", "#202226")}
                rounded="md"
                fontSize="md"
              >
                <Text fontSize="20" textAlign="left" color={linkColor} fontWeight="bold">
                  Sam Mbale
                  <Text fontSize="sm" textAlign="left" color={linkColor} fontWeight="medium">
                    Chief Community Officer Mpelembe Network
                  </Text>
                </Text>

                <UnorderedList textAlign="left" paddingLeft={5} m={0}>
                  <Text>

                    Mwangilwa takes his work very seriously and regularly enrolled in courses to stay abreast of the newest
                    developments in Google Cloud Application Development. He also attends conferences for this purpose.
                    His ongoing professional development courses helped him to easily learn new techniques and perform complex
                    tasks the first time around. Although Mwangilwa is a fast-learner, he is very careful and cautious about his work.
                    That means he repeatedly runs checks on his applications (and others) to ensure there aren't any security vulnerabilities.
                    His quick thinking and cautious personality has helped Mpelembe Network build a community
                    of developers working on innovative solutions.

                  </Text>
                </UnorderedList>
              </Stack>
            </Box>
          </MotionBox>
        </Flex>

        <VStack textAlign="start" align="start" mb={5}>


          <Box>
            <Text fontSize="20" fontWeight="600" my={5} color={linkColor}>
              Technical Gear
            </Text>
            <Text
              textAlign="start"
              align="start"
              fontSize="16"
              fontWeight="400"
            >
              Software
              <li>
                Music: {" "}
                <ExternalLink
                  color={linkColor}
                  url="https://spotify.com"
                  text={"Spotify "}
                  target="_blank"
                />
              </li>

              <li>
                Coding: {" "}
                <ExternalLink
                  color={linkColor}
                  url="https://code.visualstudio.com/"
                  text={"Visual Studio Code "}
                  target="_blank"
                />
              </li>

              <li>
                Notes: {" "}
                <ExternalLink
                  color={linkColor}
                  url="https://keep.google.com"
                  text={"Google Keep "}
                  target="_blank"
                />
              </li>

              <li>
                Terminal: {" "}
                <ExternalLink
                  color={linkColor}
                  url="https://apps.microsoft.com/store/detail/windows-terminal/9N0DX20HK701?hl=en-us&gl=US"
                  text={"Windows Terminal "}
                  target="_blank"
                />
              </li>

              <li>
                Hosting: {" "}
                <ExternalLink
                  color={linkColor}
                  url="https://firebase.google.com"
                  text={"Firebase "}
                  target="_blank"
                />
              </li>

              <li>
                Cloud: {" "}
                <ExternalLink
                  color={linkColor}
                  url="https://cloud.google.com"
                  text={"Google Cloud Platform "}
                  target="_blank"
                />
              </li>

              <li>
                Version Control: {" "}
                <ExternalLink
                  color={linkColor}
                  url="https://github.com"
                  text={"Git & Github "}
                  target="_blank"
                />
              </li>
              Hardware
              <li>
                Laptop: {" "}
                <ExternalLink
                  color={linkColor}
                  url="https://hp.com"
                  text={"HP 15 Pavilion "}
                  target="_blank"
                />
              </li>

              <li>
                Work: {" "}
                <ExternalLink
                  color={linkColor}
                  url="https://apple.com/"
                  text={"iMac Late 2015 "}
                  target="_blank"
                />
              </li>

              <li>
                Mobile: {" "}
                <ExternalLink
                  color={linkColor}
                  url="https://pixel.google.com"
                  text={"Google Pixel 3 "}
                  target="_blank"
                />
              </li>

              <li>
                Gaming PC: {" "}
                <ExternalLink
                  color={linkColor}
                  url="https://apps.microsoft.com/store/detail/windows-terminal/9N0DX20HK701?hl=en-us&gl=US"
                  text={"Windows Terminal "}
                  target="_blank"
                />
              </li>
            </Text>
          </Box>
        </VStack>
      </PageSlideFade>
      
      <PageSlideFade>
        <Box align="start"  mt={10} mb={0}>
          <Text fontSize="20" fontWeight="600" my={5} color={linkColor} mt={0} mb={0}>
            Timeline
          </Text>
        </Box>
        <VStack textAlign="start" align="start" mb={5}>
          <Box fontSize="16" fontWeight="600" zIndex={5}>
            <Text my={5}>
              2022
            </Text>
            <Box>
              <TimelineItem icon={FaReact}>
              Built my  {' '}
                <ExternalLink
                  color={linkColor}
                  url="https://github.com/mwan9ilwa/mwangi.com"
                  text={'portfolio '  }
                  target="_blank"
                />
              webapp with React.js, Next.js and Firebase.
              </TimelineItem>
            
              <TimelineItem icon={FaNodeJs}>
                Learnt {" "}
                <ExternalLink
                  color={linkColor}
                  url="https://nodejs.org"
                  text={"Node.js "}
                  target="_blank"
                /> 
                for serverside development.
              </TimelineItem>
              <TimelineItem icon={FaReact} skipTrail>
                Learnt ReactJS through {" "}
                <ExternalLink
                  color={linkColor}
                  url="https://www.taniarascia.com/getting-started-with-react/"
                  text={"Tania Rascia's "} 
                  target="_blank"
                />
                Tutorial. I highly recommend her Overview and Walkthrough if you are new to learn React.
              </TimelineItem>
            </Box>
          </Box>

          <Box fontSize="16" fontWeight="600" zIndex={5}>
            <Text my={5}>
              2021
            </Text>
            <Box>
            <TimelineItem icon={FaHtml5}>
                Built my portfolio website with HTML5 and Bootstrap,{" "}
                <ExternalLink
                  color={linkColor}
                  url="https://github.com/mwan9ilwa/mwangilwa.com"
                  text={"source on Github"}
                  target="_blank"
                />
              </TimelineItem>
            
              <TimelineItem icon={FaGoogle}>
                Became a {" "}
                <ExternalLink
                  color={linkColor}
                  url="https://g.dev/mwan9ilwa"
                  text={"Google Developer"}
                  target="_blank"
                />
              </TimelineItem>
              
              <TimelineItem icon={SiGooglecloud}>
                Became a Google Cloud Professional{" "}
                <ExternalLink
                  color={linkColor}
                  url="https://mpelembe.net"
                  text={"Mpelembe Network"}
                  target="_blank"
                />
              </TimelineItem>
            
              <TimelineItem icon={SiGooglecloud} skipTrail>I was Introduced to Google Cloud Partner Advantage</TimelineItem>
            </Box>
          </Box>

          <Box fontSize="16" fontWeight="600">
            <Text>
              2020
            </Text>
            <Box>
              <TimelineItem icon={FiHome}>
                Computer Studies Tutor Internship
              </TimelineItem>
            
              <TimelineItem icon={FaPython} skipTrail>
                Kept on Learn Python 3
              </TimelineItem>
            </Box>
          </Box>
        
          <Box fontSize="16" fontWeight="600">
            <Text my={5}>
              2019
            </Text>
            <Box>
              <TimelineItem icon={FaPython} skipTrail>
                Learnt Python 3
              </TimelineItem>
            </Box>
          </Box>
        
          <Box fontSize="16" fontWeight="600">
            <Text my={5}>
              2018
            </Text>
            <Box>
            <TimelineItem icon={FaHtml5} skipTrail>
                Learnt HTML 5 and Web Development
              </TimelineItem>
            </Box>
          </Box>

        </VStack>
      </PageSlideFade>
    </PageLayout>
  )
}

export function getStaticProps() {
  return {
    props: {
      companies,
      institutes,
    },
  }
}


export default About
