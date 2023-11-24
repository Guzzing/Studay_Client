import { atom } from 'jotai'
const toggleAtom = atom(false)

export const hamburgerToggle = atom(toggleAtom).init
