
/*
 * @Author: zuo
 * @Date: 2026-01-12 16:05:32
 */
// const sleep = (ms: number) => new Promise<void>((resolve) => setTimeout(() => {
//   resolve();
// }, ms)) 

import Link from "next/link";


function sleep(ms:number): Promise<void> {
  return new Promise<void>((resolve) => {
    setTimeout(() => {
      resolve();
    }, ms);
  });
}

export default async function BlogPostPage({ params }: { params: { slug: string } }) {
  await sleep(2000);
  const { slug } = await params;
  if(slug === "error") {
    throw new Error('this is a error')
  }
  return (
    <div>
      <h1>当前访问的是： { slug }</h1>
            <p>
        切换文章：
        <Link href="/posts/next">下一篇</Link>
        {' '}
        ·
        {' '}
        <Link href="/posts/prev">上一篇</Link>
      </p>
    </div>
  )
}