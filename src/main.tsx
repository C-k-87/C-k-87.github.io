import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import "@radix-ui/themes/styles.css";
import { Theme } from '@radix-ui/themes'

import App from './App'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Theme
      appearance='dark'
      accentColor='iris'
      grayColor='gray'
      panelBackground='translucent'
      scaling='100%'
      radius='large'
    >
      <App />
    </Theme>
  </StrictMode>,
)
