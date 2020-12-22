import { useCallback } from 'react'
import { AiOutlineMenu } from 'react-icons/ai'
import { BiSun } from 'react-icons/bi'
import { FaMoon } from 'react-icons/fa'

import {
  Flex,
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
  const borderColor = useColorModeValue('gray.300', 'gray.700')

  const handleCollapse = useCallback(() => {
    isBreakpoint ? toggleCollapse() : onOpen()
  }, [isBreakpoint, toggleCollapse, onOpen])

  return (
    <Flex
      position="fixed"
      alignItems="center"
      borderBottom="1px"
      borderColor={borderColor}
      bg={useColorModeValue('#fff', '#101924')}
      top="0"
      right="0"
      left={collapse ? '0' : '260px'}
      h="55px"
      transition="left 600ms"
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
    </Flex>
  )
}
