import { useTranslations } from 'next-intl';

export default function Footer() {
  const t = useTranslations('Footer');

  return (
    <div className='container footer'>
      <p>{t('copyright')}</p>
    </div>
  );
}
