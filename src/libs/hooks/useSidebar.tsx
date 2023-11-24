import { useCallback } from 'react'
import { useAtom } from 'jotai'
import { hamburgerToggle } from '../store/hamburgerToggleAtom'
import SettingPage from '@/pages/setting/SettingPage'

const useSidebar = () => {
  const [toggleOpen, setToggleOpen] = useAtom(hamburgerToggle)
  const toggleSidebar = useCallback(() => {
    setToggleOpen((prev) => !prev)
  }, [])

  return {
    toggleOpen,
    toggleSidebar,
    settingPage: toggleOpen ? <SettingPage isOpen={toggleOpen} /> : null
  }
}

export default useSidebar
