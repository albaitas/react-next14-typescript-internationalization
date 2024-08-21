'use client';
import { useLocale } from 'next-intl';
import { useRouter } from 'next/navigation';
import { ChangeEvent, useTransition } from 'react';

export default function Switcher() {
  const [isPending, startTransition] = useTransition();
  const router = useRouter();
  const localActive = useLocale();

  const onSelectChange = (e: ChangeEvent<HTMLSelectElement>) => {
    const nextLocale = e.target.value;
    startTransition(() => {
      router.replace(`/${nextLocale}`);
    });
  };
  return (
    <select defaultValue={localActive} className='select' onChange={onSelectChange} disabled={isPending}>
      <option value='lt'>Lithuanian</option>
      <option value='en'>English</option>
    </select>
  );
}
