import { useCallback } from 'react'

import { Box } from '@chakra-ui/react'

import { useRouter } from 'next/router'

import NavItem from '~/components/NavItem'

interface NavDataType {
  title: string
  href?: string
  items?: NavDataType[]
}

const navData: NavDataType[] = [
  { title: 'Item 1', href: '/test/item1' },
  {
    title: 'Item 2',
    items: [
      { title: 'Item 3', href: '/test/item3' },
      { title: 'Item 4', href: '/test/item4' }
    ]
  },
  { title: 'Item 5', href: '/test/item5' },
  { title: 'Item 6', href: '/test/item6' },
  {
    title: 'Item 7',
    items: [
      { title: 'Item 8', href: '/test/item8' },
      { title: 'Item 9', href: '/test/item9' },
      { title: 'Item 10', href: '/test/item10' },
      { title: 'Item 11', href: '/test/item11' }
    ]
  },
  { title: 'Item 12', href: '/test/item12' },
  { title: 'Item 13', href: '/test/item13' }
]

export default function Nav({ children }: WithChildren) {
  const router = useRouter()

  const navItemMap = useCallback(
    (items: NavDataType[]) =>
      items.map((n, i) => (
        <NavItem
          key={i}
          title={n.title}
          href={n.href}
          hasNavOnRoute={!!n.items?.filter(i => i.href === router.route).length}
        >
          {n.items && navItemMap(n.items)}
        </NavItem>
      )),
    [router]
  )

  return (
    <Box h="100vh" w="100%">
      <Box minH="55px">{children}</Box>
      <Box pl={2} pr={4} py={2}>
        {navItemMap(navData)}
      </Box>
    </Box>
  )
}
