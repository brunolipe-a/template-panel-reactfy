import React from 'react'

import { Box } from '@chakra-ui/react'

import { useCollapse } from '~/contexts/collapse'

export default function PanelContent({ children }: WithChildren) {
  const { collapse } = useCollapse()
  return <Box paddingLeft={collapse ? 0 : '300px'}>{children}</Box>
}
