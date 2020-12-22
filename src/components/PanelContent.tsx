import { useCallback, useEffect, useState } from 'react'
import { FiChevronRight, FiHome } from 'react-icons/fi'

import {
  Box,
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink
} from '@chakra-ui/react'

import { useRouter } from 'next/dist/client/router'

import { useCollapse } from '~/contexts/collapse'

export default function PanelContent({ children }: WithChildren) {
  const [routes, setRoutes] = useState([])
  const { collapse } = useCollapse()
  const router = useRouter()

  useEffect(() => {
    const routeSplited = router.route.split('/').filter(r => r)
    const routesBreadcrumb = routeSplited.map((name, index) => {
      let route = ''
      for (let i = 0; i <= index; i++) {
        route += '/' + routeSplited[i]
      }
      const isCurrentPage = route === router.route

      return { route, name, isCurrentPage }
    })
    setRoutes(routesBreadcrumb)
  }, [router])

  const handleToRoute = useCallback((route = '/') => router.push(route), [
    router
  ])

  return (
    <Box pt="55px" ml={collapse ? 0 : '260px'} transition="margin 600ms">
      {!!routes.length && (
        <Box px={6} pt={4}>
          <Breadcrumb
            spacing="8px"
            separator={<FiChevronRight />}
            borderRadius={8}
            px={3}
            py={1}
            borderWidth={1}
            borderStyle="solid"
            borderColor="gray.600"
          >
            <BreadcrumbItem>
              <BreadcrumbLink onClick={() => handleToRoute()}>
                <FiHome size={16} />
              </BreadcrumbLink>
            </BreadcrumbItem>

            {routes.map((r, i) => (
              <BreadcrumbItem key={i} isCurrentPage={r.isCurrentPage}>
                <BreadcrumbLink
                  textTransform="capitalize"
                  onClick={() => !r.isCurrentPage && handleToRoute(r.route)}
                >
                  {r.name}
                </BreadcrumbLink>
              </BreadcrumbItem>
            ))}
          </Breadcrumb>
        </Box>
      )}
      <Box px={6} py={4}>
        {children}
      </Box>
    </Box>
  )
}
