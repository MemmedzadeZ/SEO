'use client'
import Navbar from 'components/navbar/Navbar'

import * as React from 'react'
import Link from 'next/link'
import { useTranslation } from 'lib/i18n/client'


export default function Page({ params }) {
  const { lng } = React.use(params)
  const { t } = useTranslation(lng, 'client-page')

  return (
    <main>
  
      <Link href={`/${lng}`}>
        <button type="button">
          {t('back-to-home')}
        </button>
        <h1>{t('h1')}</h1>
   
      </Link>
    </main>
  )
}