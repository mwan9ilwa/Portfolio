import * as React from 'react'
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

import { VStack, Heading, Box, Link, LinkProps } from '@chakra-ui/react'
import { TimelineItem } from './Timeline'
import { PageSlideFade } from 'components/shared/animations/page-transitions'
import Header from 'components/shared/header'
import NextLink from 'next/link'
import { useLinkColor } from 'components/theme'

interface ExternalLinkProps extends LinkProps {
  url: string
  linkProps?: LinkProps
  text: string
}

const ExternalLink: React.FC<ExternalLinkProps> = ({
  url,
  linkProps,
  text,
  ...props
}) => {
  return (
    <NextLink href={url} passHref>
      <Link {...linkProps} {...props}>
        {text}
      </Link>
    </NextLink>
  )
}

const InternalLink: React.FC<ExternalLinkProps> = ({
  url,
  linkProps,
  text,
  ...props
}) => {
  return (
    <NextLink href={url} passHref>
      <Link {...linkProps} {...props}>
        {text}
      </Link>
    </NextLink>
  )
}
const Achievements = () => {
  const linkColor = useLinkColor()

  return (
    <PageSlideFade>
      <Box align="start" mb={6}>
        <Header mt={0} mb={0}>
          Timeline
        </Header>
      </Box>
      <VStack textAlign="start" align="start" mb={5}>
        <Box zIndex={5}>
          <Heading fontSize="2xl" fontWeight="600" my={5}>
            2022
          </Heading>
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

        <Box zIndex={5}>
          <Heading fontSize="2xl" fontWeight="600" my={5}>
            2021
          </Heading>
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

        <Box>
          <Heading fontSize="2xl" fontWeight="600" my={5}>
            2020
          </Heading>
          <Box>
            <TimelineItem icon={FiHome}>
              Computer Studies Tutor Internship
            </TimelineItem>
            
            <TimelineItem icon={FaPython} skipTrail>
              Kept on Learn Python 3
            </TimelineItem>
          </Box>
        </Box>
        
        <Box>
          <Heading fontSize="2xl" fontWeight="600" my={5}>
            2019
          </Heading>
          <Box>
            <TimelineItem icon={FaPython} skipTrail>
              Learnt Python 3
            </TimelineItem>
          </Box>
        </Box>
        
        <Box>
          <Heading fontSize="2xl" fontWeight="600" my={5}>
            2018
          </Heading>
          <Box>
          <TimelineItem icon={FaHtml5} skipTrail>
              Learnt HTML 5 and Web Development
            </TimelineItem>
          </Box>
        </Box>

      </VStack>
    </PageSlideFade>
  )
}

export default Achievements
