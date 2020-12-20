import React from 'react'

import {
  Box,
  Drawer,
  DrawerContent,
  DrawerOverlay,
  Text,
  useBreakpointValue,
  useColorModeValue
} from '@chakra-ui/react'

import { AnimatePresence } from 'framer-motion'

import Nav from '~/components/Nav'

import { useCollapse } from '~/contexts/collapse'

export default function PanelSidebar() {
  const { collapse, isOpen, onClose } = useCollapse()
  const isBreakpoint = useBreakpointValue({ base: false, lg: true })

  const bg = useColorModeValue('#fff', '#101924')
  const colorTextLogo = useColorModeValue('#506482', '#e6e6e6')

  return (
    <>
      <AnimatePresence>
        {isBreakpoint ? (
          <Box
            display="flex"
            flexDirection="column"
            position="fixed"
            w={collapse ? '0px' : '300px'}
            minH="100vh"
            borderRight={collapse ? '0px' : '1px'}
            bg={bg}
            overflow="hidden"
            transition="width 400ms"
          >
            <Box
              display="flex"
              alignItems="center"
              minH="60px"
              borderBottom="1px"
            >
              <Text
                marginLeft="20px"
                fontSize="22px"
                letterSpacing="0.15em"
                fontWeight="600"
                color={colorTextLogo}
              >
                ReactSky
              </Text>
            </Box>
            <Box h="calc(100vh - 55px)" w="100%"></Box>
          </Box>
        ) : (
          <Drawer placement="left" onClose={onClose} isOpen={isOpen}>
            <DrawerOverlay>
              <DrawerContent bg={bg}>
                <Box
                  display="flex"
                  alignItems="center"
                  minH="60px"
                  borderBottom="1px"
                >
                  <Text
                    marginLeft="20px"
                    fontSize="22px"
                    letterSpacing="0.15em"
                    fontWeight="600"
                    color={colorTextLogo}
                  >
                    ReactSky
                  </Text>
                </Box>
                <Box h="calc(100vh - 55px)" w="100%"></Box>
              </DrawerContent>
            </DrawerOverlay>
          </Drawer>
        )}
      </AnimatePresence>
    </>
  )
}
