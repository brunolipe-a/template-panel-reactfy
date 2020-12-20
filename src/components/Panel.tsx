import { Box, useColorModeValue } from '@chakra-ui/react'

import PanelContent from './PanelContent'
import PanelFooter from './PanelFooter'
import PanelHeader from './PanelHeader'
import PanelSidebar from './PanelSidebar'

export default function Panel({ children }: WithChildren) {
  return (
    <Box bg={useColorModeValue('#f0f0f0', '#101924')} maxW="100vw" h="100vh">
      <PanelSidebar />
      <Box>
        <PanelHeader />
        <PanelContent>{children}</PanelContent>
        <PanelFooter />
      </Box>
    </Box>
  )
}
