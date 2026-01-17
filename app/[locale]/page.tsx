import {getTranslations, setRequestLocale} from 'next-intl/server';
import NavBar from '@/components/NavBar2';
import LanguageSwitcher from '@/components/LanguageSwitcher';
import {NextIntlClientProvider} from 'next-intl';
import {getMessages} from 'next-intl/server';
import {pickMessages} from '../../i18n/pick';

export default async function HomePage({
  params
}: {
  params: Promise<{locale: string}>;
}) {
  // 获取路由参数中的 locale
  const {locale} = await params;
  setRequestLocale(locale);
   const messages = await getMessages();
    const pageMessages = pickMessages(messages, ['HomePage', 'Navigation', 'LanguageSwitcher']);

  // 获取翻译函数，用于根据 locale 翻译文本
  // https://next-intl.dev/docs/getting-started/app-router#using-translations-in-server-components
  const t = await getTranslations({locale, namespace: 'HomePage'});

  return (
    <NextIntlClientProvider messages={pageMessages}>
      <main style={{padding: 24}}>
        <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
          <NavBar />
          <LanguageSwitcher />
        </div>
        <h1 style={{fontSize: 32, marginTop: 24}}>{t('title')}</h1>
        <p style={{fontSize: 18, marginTop: 8}}>{t('subtitle')}</p>
      </main>
    </NextIntlClientProvider>
  );
}