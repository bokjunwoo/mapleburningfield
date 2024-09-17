import { AppRouterCacheProvider } from '@mui/material-nextjs/v13-appRouter';
import { SpeedInsights } from '@vercel/speed-insights/next';
import Script from 'next/script';
import Footer from './_component/Layout/Footer';
import Header from './_component/Layout/Header';
import Nav from './_component/Layout/Nav';
import ClientRoot from './ClientRoot';
import './globals.css';

export const metadata = {
  metadataBase: new URL('https://mapleburningfield.com/'),
  title: '버닝필드 - 사냥터 정보 & 메할일',
  description:
    '메이플스토리의 사냥 컨텐츠로 획득 가능한 경험치의 효율 계산 서비스. 폴로, 프리토, VIP 쿠폰, 이벤트 스킬등의 정보를 제공합니다.',
  keywords: [
    '버닝필드, 메이플스토리, 메이플, 메이플 사냥터, 메이플 버닝필드, 큐브사용내역, 폴로, 프리토, VIP 쿠폰, 재획, 메할일, 일퀘, 주간퀘, 몬스터파크, 잠수맵, 에픽던전',
  ],
  openGraph: {
    type: 'website',
    site_name: '버닝필드 - 메이플 사냥터 효율',
    locale: 'ko_KR',
    url: 'https://mapleburningfield.com',
    title: '버닝필드 - 사냥터 정보 & 메할일',
    description:
      '메이플스토리의 사냥 컨텐츠로 획득 가능한 경험치의 효율 계산 서비스. 폴로, 프리토, VIP 쿠폰, 이벤트 스킬등의 정보를 제공합니다.',
    images: [
      {
        url: '/images/og_image.png',
        alt: '버닝필드 로고',
      },
    ],
  },
  verification: {
    google: 'uwYM47hSy2R9GV_YUZwCZ5BOxDEnWG2hhwZEsFBNC8A',
  },
};

// eslint-disable-next-line react/function-component-definition
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <link rel="icon" href="/images/favicon.ico" sizes="any" />
      <Script
        async
        src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-2888163582859915"
        crossOrigin="anonymous"
        strategy="afterInteractive"
      />

      <body>
        <SpeedInsights />
        <AppRouterCacheProvider>
          <ClientRoot>
            <Header />
            <Nav />
            {children}
          </ClientRoot>
          <Footer />
        </AppRouterCacheProvider>
      </body>
    </html>
  );
}
