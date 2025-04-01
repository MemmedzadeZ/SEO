'use client' // Bu komponentin client-side işləməsi üçün

import Link from 'next/link'
import { useTranslation } from 'react-i18next'

export default function ClientButtons({ lng }) {
  const { t } = useTranslation(lng, 'server-page') // `lng` avtomatik götürüləcək

  return (
    <div>
      <Link href={`/${lng}/server-page`}>
         <button type="button">
          {t('server-side')}
        </button>
      </Link>

      <Link href={`/${lng}/client-page`}>
        <button type="button">{t('client-side')}</button>
      </Link>
    </div>
  )
}
