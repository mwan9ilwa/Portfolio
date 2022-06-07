import { useEffect, useState } from 'react'
import {
  Flex,
  Avatar,
  Image,
  Box,
  Text,
  Badge,
  Stack,
  Link,
  UnorderedList,
  ListItem,
  useColorModeValue,
} from '@chakra-ui/react'
import { MotionBox, MotionFlex } from 'components/shared/animations/motion'
import Header from 'components/shared/header'
import NextLink from 'next/link'
import { useLinkColor } from 'components/theme'

import PopularArticles from './PopularArticles'
import { BlogPostProps } from 'interfaces/interface'
import { newContent } from 'data/data'

const ANIMATION_DURATION = 0.5
const ORANGE = '#ff9400'
const emojis = ['👋', '👍', '🖐']

const Home: React.FC<BlogPostProps> = (props) => {
  const { posts } = props
  const linkColor = useLinkColor()
  const [showEmogi, setShowEmoji] = useState(false)
  const [emojiCounter, setEmojiCounter] = useState(-1)

  useEffect(() => {
    const interval = setInterval(() => {
      if (emojiCounter >= 3) setEmojiCounter(0)
    }, 500)
    return () => clearInterval(interval)
  }, [emojiCounter])

  return (
    <Flex direction="column" align="center">
      <Flex direction={['column', 'column', 'row']}>
        <MotionBox
          opacity="0"
          initial={{
            translateX: -150,
            opacity: 0,
          }}
          animate={{
            translateX: 0,
            opacity: 1,
            transition: {
              duration: ANIMATION_DURATION,
            },
          }}
          m="auto"
          mb={[16, 16, 'auto']}
        >
          <Stack position="relative">
            <Image
              align="left"
              borderRadius='8'
              boxSize='135px'
              src='/assets/images/main.jpeg'
            />
          </Stack>
        </MotionBox>
        <MotionFlex
          position="relative"
          ml={['auto', 'auto', 16]}
          m={['auto', 'initial']}
          w={['90%', '85%', '80%']}
          maxW="800px"
          opacity="0"
          justify="center"
          direction="column"
          initial={{
            opacity: 0,
            translateX: 150,
          }}
          animate={{
            opacity: 1,
            translateX: 0,
            transition: {
              duration: ANIMATION_DURATION,
            },
          }}
        >
          <Box position="relative">
            <Box
              position="absolute"
              width="full"
              fontSize="2xl"
              textAlign="center"
            >
              {emojis.map((item, index) => {
                return (
                  <MotionBox
                    key={index}
                    position="absolute"
                    right="80%"
                    animate={
                      showEmogi && emojiCounter === index ? 'show' : 'hide'
                    }
                    variants={{
                      hide: { translateY: -80, opacity: 0 },
                      show: {
                        translateY: [0, -40, -60],
                        opacity: [0, 1, 0],
                      },
                    }}
                    initial="hide"
                  >
                    {item}
                  </MotionBox>
                )
              })}
            </Box>
            <MotionBox whileHover={{ translateY: -5 }} width="max-content">
              <Header
                underlineColor={ORANGE}
                emoji=""
                mt={0}
                cursor="pointer"
                width="max-content"
                onClick={() => {
                  setEmojiCounter((prevCounter) => prevCounter + 1)
                  setShowEmoji(true)
                }}
              >
                Hey, I'm Mwangilwa!
              </Header>
            </MotionBox>
          </Box>
          <Box as="h2" fontSize="18" fontWeight="500" textAlign="left">
            I'm a {' '}
            <Box as="strong" fontWeight="600">
              Software Engineer
            </Box>{''}
            ,{' '}
            <Box as="span" whiteSpace="nowrap">
            Google Cloud Developer, and
            </Box>{' '}
            <Box as="span" whiteSpace="nowrap">
            Google Workspace: Deployment Specialist&nbsp;
            </Box>
            and Tech Enthusiast {' '}
            <Box as="span" whiteSpace="nowrap">
            from Lusaka. Welcome to my digital nest.
            </Box>
          </Box>
          
        </MotionFlex>
      </Flex>

      
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
        zIndex={1}
      >
        <Box mt={10}>
          <ContentBox linkColor={linkColor} />

          <PopularArticles posts={posts} />
          
        </Box>
      </MotionBox>
    </Flex>
  )
}

const ContentBox = ({ linkColor }) => {
  return (
    <Stack
      mb={10}
      mx={[0, 0, 10]}
      padding={4}
      align="start"
      borderLeft="10px solid"
      borderColor={linkColor}
      color={'whatsapp'}
      _hover={{ shadow: 'lg' }}
      backgroundColor={useColorModeValue('gray.100', '#202226')}
      rounded="md"
      fontSize="md"
    >
      <Text
        textAlign="center"
        color="#53c8c4"
        fontWeight="bold"
        fontSize={['md', 'lg']}
        variant="solid"
        fromcolor="blue.400"
        tocolor="red.500"
      >
        Contents
      </Text>
      <UnorderedList textAlign="left" paddingLeft={5} m={5}>
        {newContent.map((content, index) => (
          <ListItem key={index}>
            <NextLink href={content.link} passHref>
              <Link color={linkColor}>
                {content.text}
                {content.showNewTag && (
                  <Badge ml="1" colorScheme="green">
                    New
                  </Badge>
                )}
              </Link>
            </NextLink>
          </ListItem>
        ))}
      </UnorderedList>
    </Stack>
  )
}

export default Home
