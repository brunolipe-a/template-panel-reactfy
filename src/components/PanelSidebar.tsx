import {
  Drawer,
  DrawerContent,
  DrawerOverlay,
  Flex,
  Text,
  useBreakpointValue,
  useColorModeValue
} from '@chakra-ui/react'

import Nav from '~/components/Nav'

import { useCollapse } from '~/contexts/collapse'

export default function PanelSidebar() {
  const { collapse, isOpen, onClose } = useCollapse()
  const isBreakpoint = useBreakpointValue({ base: false, lg: true })
  const bgColor = useColorModeValue('#fff', '#101924')
  const colorTextLogo = useColorModeValue('#506482', '#e6e6e6')
  const borderColor = useColorModeValue('gray.300', 'gray.700')

  return (
    <>
      {isBreakpoint ? (
        <Flex
          direction="column"
          position="fixed"
          w={'260px'}
          left={collapse ? '-260px' : '0'}
          minH="100vh"
          borderRight={collapse ? '0px' : '1px'}
          borderColor={borderColor}
          bg={bgColor}
          overflow="hidden"
          transition="left 600ms"
        >
          <Nav>
            <Flex
              alignItems="center"
              minH="55px"
              borderBottom="1px"
              borderColor={borderColor}
            >
              <Text
                ml={4}
                fontSize="22px"
                letterSpacing="0.15em"
                fontWeight="600"
                color={colorTextLogo}
              >
                React Logo
              </Text>
            </Flex>
          </Nav>
        </Flex>
      ) : (
        <Drawer placement="left" onClose={onClose} isOpen={isOpen}>
          <DrawerOverlay>
            <DrawerContent bg={bgColor}>
              <Nav>
                <Flex
                  alignItems="center"
                  minH="55px"
                  borderBottom="1px"
                  borderColor={borderColor}
                >
                  <Text
                    ml={4}
                    fontSize="22px"
                    letterSpacing="0.15em"
                    fontWeight="600"
                    color={colorTextLogo}
                  >
                    React Logo
                  </Text>
                </Flex>
              </Nav>
            </DrawerContent>
          </DrawerOverlay>
        </Drawer>
      )}
    </>
  )
}
