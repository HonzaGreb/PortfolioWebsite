import { createContext } from 'react'

// Global variables

export const MINIMALISM = 'Minimalism'
export const DARK = 'Dark'
export const MEMOZRNNOST = 'Memozrnnost'
export const CLASSIC = 'Classic'

export const WORKS = 'Mé práce'
export const ABOUT_ME = 'O mně'
export const GAME = 'Hra'
export const CONTACT = 'Kontakt'
export const SETTINGS = 'Nastavení'

// Contexts

const startContextDefault = {
  startIsShown: false,
  openStart: () => {},
  closeStart: () => {},
}

export const StartContext = createContext(startContextDefault)

const windowsContextDefault = {
  openWindows: [],
  minimizedWindows: [],
  openWindow: (id) => {},
  minimizeWindow: (id) => {},
  maximizeWindow: (id) => {},
  closeWindow: (id) => {},
  focusWindow: (id) => {},
}

export const WindowContext = createContext(windowsContextDefault)

const colorContextDefault = {
  colorTheme: '',
  changeColorTheme: (id) => {},
}

export const ColorContext = createContext(colorContextDefault)
