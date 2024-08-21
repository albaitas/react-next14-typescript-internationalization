'use client';
import React, { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useTranslations, useLocale } from 'next-intl';
import Image from 'next/image';
import Switcher from './switcher';
import { FaBars } from 'react-icons/fa';
import { NavigationItem } from '../../types';

const Header = () => {
  const [menuOpen, setMenuOpen] = useState<boolean>(false);
  const t = useTranslations('Navigation');
  const pathname = usePathname();
  const locale = useLocale();

  const navigation: NavigationItem[] = [
    { id: 1, title: t('home'), path: `/${locale}` },
    { id: 2, title: t('rooms'), path: `/${locale}/rooms` },
    { id: 3, title: t('contact'), path: `/${locale}/contact` }
  ];

  return (
    <div className='header'>
      <div className='container'>
        <div className='navbar'>
          <div className='logo'>
            <Image src='/images/logo.jpg' width={275} height={58} alt='logo' priority={true} />
          </div>
          <div className='menu-icon' onClick={() => setMenuOpen(!menuOpen)}>
            <FaBars />
          </div>

          <div className={menuOpen ? 'navbar_links active' : 'navbar_links'}>
            {navigation.map((item) => (
              <Link key={item.id} href={item.path} className={pathname === item.path ? 'active' : ''}>
                {item.title}
              </Link>
            ))}
            <div className='switcher'>
              <Switcher />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
