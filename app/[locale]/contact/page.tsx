import { Metadata } from 'next';
import { useTranslations } from 'next-intl';
import { GenerateProps } from '../../../types';

export async function generateMetadata({ params }: GenerateProps): Promise<Metadata> {
  const { locale } = params;

  return {
    title: locale === 'lt' ? 'Kontaktai - Next.js App' : 'Contact - Next.js App',
    description: locale === 'lt' ? 'Susisiekite su mumis!' : 'Get in touch with us!',
    openGraph: {
      title: locale === 'lt' ? 'Kontaktai - Next.js App' : 'Contact - Next.js App',
      description: locale === 'lt' ? 'Susisiekite su mumis!' : 'Get in touch with us!',
      url: locale === 'lt' ? `${process.env.BASE_URL}/lt/rooms` : `${process.env.BASE_URL}/en/rooms`
    }
  };
}

export default function Contact() {
  const t = useTranslations('ContactPage');

  return (
    <div className='container text'>
      <h1>{t('title')}</h1>
      <p>{t('description')}</p>
    </div>
  );
}
