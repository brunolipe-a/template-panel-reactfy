import { useCallback, useEffect, useState } from 'react'
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa'

import {
  Box,
  Flex,
  Icon,
  Spacer,
  Text,
  useColorModeValue
} from '@chakra-ui/react'

import { useRouter } from 'next/router'

import { AnimatePresence, motion } from 'framer-motion'

import { useCollapse } from '~/contexts/collapse'

interface NavItemProps extends WithChildren {
  title: string
  href: string
  hasNavOnRoute?: boolean
}

export default function NavItem({
  children,
  hasNavOnRoute = false,
  href = '',
  title = ''
}: NavItemProps) {
  const [open, setOpen] = useState(false)
  const [isCurrentRoute, setCurrentRoute] = useState(false)
  const { onClose } = useCollapse()
  const router = useRouter()

  const handleClick = useCallback(() => {
    if (children) {
      if (!hasNavOnRoute) setOpen(!open)
    } else {
      if (href !== router.route) {
        onClose()
        router.push(href)
      }
    }
  }, [children, open, hasNavOnRoute, router, href, onClose])

  useEffect(() => {
    const isRouteCurrent = href === router.route
    setCurrentRoute(isRouteCurrent)
    setOpen(isRouteCurrent)
  }, [href, router])

  const color = useColorModeValue('#506482', '#a0aec0')
  const colorHover = useColorModeValue('primary.500', 'primary.200')
  const bgColor = useColorModeValue('#dfdff0', 'gray.700')

  return (
    <>
      <Flex
        alignItems="center"
        px={3}
        my={1}
        h="40px"
        borderRadius={8}
        cursor="pointer"
        bg={isCurrentRoute ? bgColor : ''}
        color={isCurrentRoute || hasNavOnRoute ? colorHover : color}
        _hover={{
          color: colorHover,
          bg: useColorModeValue('#e3e3ef', '#182536'),
          transform: hasNavOnRoute || isCurrentRoute ? '' : 'translateX(4px)'
        }}
        transition="transform 400ms, color 400ms"
        onClick={handleClick}
      >
        <Icon fontSize="18px">
          <FaChevronRight />
        </Icon>
        <Text
          marginLeft="12px"
          d="flex"
          alignItems="center"
          h="100%"
          fontWeight="600"
          fontSize="15px"
          lineHeight="1.25rem"
          textOverflow="ellipsis"
          whiteSpace="nowrap"
          overflow="hidden"
        >
          {title}
        </Text>
        {!!children && (
          <>
            <Spacer />
            <Icon
              fontSize="18px"
              h="100%"
              transform={open ? 'rotate(-90deg)' : 'rotate(0deg)'}
              transition="transform 400ms"
            >
              <FaChevronLeft />
            </Icon>
          </>
        )}
      </Flex>
      <AnimatePresence>
        {!!children && (open || hasNavOnRoute) && (
          <motion.nav
            initial={{ opacity: 0, x: -30, height: 0 }}
            animate={{ opacity: 1, x: 0, height: 'auto' }}
            transition={{ duration: 0.4 }}
            exit={{ opacity: 0, x: -30, height: 0 }}
          >
            <Box ml={3}>{children}</Box>
          </motion.nav>
        )}
      </AnimatePresence>
    </>
  )
}
