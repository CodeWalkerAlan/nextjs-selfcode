/*
 * @Author: zuo
 * @Date: 2026-01-13 11:27:59
 */
import { AppProps } from "next/app";
import Link from "next/link";
import "./globals.css";

type NextPageWithLayout = AppProps['Component'] & {
  getLayout ? : (page: React.ReactElement) => React.ReactNode
}

export default function MyApp({Component, pageProps}: AppProps) {
  const Page = Component as NextPageWithLayout;
  const getLayout = Page.getLayout ?? ((page) => page);
  return(
    <div className="min-h-screen flex flex-col">
      <header className="border-b p-4 gap-4">
        <Link className="pr-4" href="/">首页</Link>
        <Link className="pr-4" href="/about">关于</Link>
        <Link href="/post">文章</Link>
      </header>
      <main className="flex-1 p-6">
        {/* <Component {...pageProps}/> */}
        {
          getLayout(<Page {...pageProps}/>)
        }
      </main>
      <footer className="border-t text-center p-4">© 2025 My Blog</footer>
    </div>
  )
}



// export default function MyApp({Component, pageProps}: AppProps) {
//   const Page = Component as NextPageWithLayout;
//   const getLayout = Page.getLayout ?? ((page) => page);
//   return(
//     getLayout(<Page {...pageProps}/>)
//   )
// }