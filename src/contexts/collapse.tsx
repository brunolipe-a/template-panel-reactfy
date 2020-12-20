import React, {
  createContext,
  useState,
  useContext,
  useEffect,
  useCallback
} from 'react'

import { useDisclosure } from '@chakra-ui/react'

interface CollapseContextData {
  collapse: boolean
  toggleCollapse(): void
  isOpen: boolean
  onOpen(): void
  onClose(): void
}

const CollapseContext = createContext<CollapseContextData>(
  {} as CollapseContextData
)

export const CollapseProvider: React.FC = ({ children }) => {
  const [collapse, setCollapse] = useState(false)
  const { isOpen, onOpen, onClose } = useDisclosure()

  useEffect(() => {
    const handleResize = () => {
      const inner = window.innerWidth < 992
      if (inner) onClose()
      setCollapse(inner)
    }
    window.addEventListener('resize', handleResize)
    handleResize()
    return () => window.removeEventListener('resize', handleResize)
  }, [onClose])

  const toggleCollapse = useCallback(() => {
    setCollapse(!collapse)
  }, [collapse, setCollapse])

  return (
    <CollapseContext.Provider
      value={{ collapse, toggleCollapse, isOpen, onOpen, onClose }}
    >
      {children}
    </CollapseContext.Provider>
  )
}

export const useCollapse = (): CollapseContextData => {
  const context = useContext(CollapseContext)
  return context
}
