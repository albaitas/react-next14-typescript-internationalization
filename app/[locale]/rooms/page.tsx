import { Metadata } from 'next';
import { useTranslations } from 'next-intl';
import { GenerateProps } from '../../../types';

export async function generateMetadata({ params }: GenerateProps): Promise<Metadata> {
  const { locale } = params;

  return {
    title: locale === 'lt' ? 'Kambariai - Next.js App' : 'Rooms - Next.js App',
    description: locale === 'lt' ? 'Naršykite mūsų siūlomus kambarius ir užsisakykite jau šiandien!' : 'Browse our available rooms and book your stay today!',
    openGraph: {
      title: locale === 'lt' ? 'Kambariai - Next.js App' : 'Rooms - Next.js App',
      description: locale === 'lt' ? 'Naršykite mūsų siūlomus kambarius ir užsisakykite jau šiandien!' : 'Browse our available rooms and book your stay today!',
      url: locale === 'lt' ? `${process.env.BASE_URL}/lt/rooms` : `${process.env.BASE_URL}/en/rooms`
    }
  };
}

export default function Rooms() {
  const t = useTranslations('RoomsPage');

  return (
    <div className='container text'>
      <h1>{t('title')}</h1>
      <p>{t('description')}</p>
    </div>
  );
}
