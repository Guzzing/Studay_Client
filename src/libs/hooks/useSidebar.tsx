import { useCallback, useEffect } from 'react'
import { useAtom } from 'jotai'
import { hamburgerToggle } from '../store/hamburgerToggleAtom'

const useSidebar = () => {
  const [toggleOpen, setToggleOpen] = useAtom(hamburgerToggle)
  const toggleSidebar = useCallback(() => {
    setToggleOpen((prev) => !prev)
  }, [])

  useEffect(() => {
    setToggleOpen(false)
  }, [])
  return {
    toggleOpen,
    toggleSidebar
  }
}

export default useSidebar
