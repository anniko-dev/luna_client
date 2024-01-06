import React from 'react'
import RootFooter from '@root/root/RootFooter/RootFooter'
import RootHeader from '@root/root/RootHeader/RootHeader'

import { Montserrat } from 'next/font/google'
import '../src/index.scss'

const inter = Montserrat({ subsets: ['latin'] })

export default ({ children }: { children: React.ReactNode }) => (
  <html lang='ru'>
    <body className={inter.className}>
      <RootHeader />
      {children}
      <RootFooter />
    </body>
  </html>
)
