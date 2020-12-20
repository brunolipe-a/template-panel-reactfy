import React, { useCallback } from 'react'
import { AiOutlineMenu } from 'react-icons/ai'
import { BiSun } from 'react-icons/bi'
import { FaMoon } from 'react-icons/fa'

import {
  Box,
  IconButton,
  useBreakpointValue,
  useColorMode,
  useColorModeValue
} from '@chakra-ui/react'

import { useCollapse } from '~/contexts/collapse'

export default function PageHeader() {
  const { collapse, toggleCollapse, onOpen } = useCollapse()
  const { colorMode, toggleColorMode } = useColorMode()
  const isBreakpoint = useBreakpointValue({ base: false, lg: true })

  const handleCollapse = useCallback(() => {
    isBreakpoint ? toggleCollapse() : onOpen()
  }, [isBreakpoint, toggleCollapse, onOpen])

  return (
    <Box
      d="flex"
      alignItems="center"
      maxW="100vw"
      h="60px"
      borderBottom="1px"
      paddingLeft={collapse ? 0 : '300px'}
      bg={useColorModeValue('#fff', '#101924')}
      transition="padding 400ms"
    >
      <IconButton
        aria-label="Toggle Collapse"
        icon={<AiOutlineMenu />}
        onClick={handleCollapse}
        marginLeft="20px"
        borderRadius="50%"
        _focus={{ boxShadow: 'rgb(150, 100, 250) 0px 0px 4px 0px' }}
      />

      <IconButton
        aria-label="Toggle Color Theme"
        icon={colorMode === 'dark' ? <BiSun /> : <FaMoon />}
        onClick={toggleColorMode}
        marginLeft="20px"
        borderRadius="50%"
        _focus={{ boxShadow: 'rgb(150, 100, 250) 0px 0px 4px 0px' }}
      />
    </Box>
  )
}
