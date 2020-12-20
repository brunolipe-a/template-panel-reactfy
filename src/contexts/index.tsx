import React from 'react'

import { CollapseProvider } from './collapse'

export default function AppProvider({ children }: WithChildren) {
  return <CollapseProvider>{children}</CollapseProvider>
}
