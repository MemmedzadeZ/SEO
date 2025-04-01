import Link from 'next/link'
import { useTranslation } from 'lib/i18n'


export default async function Page({ params }) {
  const { lng } = await params
  const { t } = await useTranslation(lng, 'server-page')

  return (
    <main>
      <Link href={`/${lng}`}>
         <button type="button">
          {t('back-to-home')}
        </button>
         <h1>{t('title')}</h1>
      </Link>
    </main>
  )
}


