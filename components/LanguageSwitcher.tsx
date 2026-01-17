'use client';

import {useTranslations, useLocale} from 'next-intl';
import {usePathname, useRouter} from '@/i18n/navigation';

export default function LanguageSwitcher() {
  const t = useTranslations('LanguageSwitcher');
  const router = useRouter();
  const pathname = usePathname();
  const locale = useLocale();

  return (
    <label style={{display: 'flex', gap: 8, alignItems: 'center'}}>
      <span>{t('label')}</span>
      <select
        onChange={(e) => router.replace(pathname, {locale: e.target.value})}
        defaultValue={locale}
      >
        <option value="zh">{t('zh')}</option>
        <option value="en">{t('en')}</option>
        <option value="jp">{t('jp')}</option>
      </select>
    </label>
  );
}