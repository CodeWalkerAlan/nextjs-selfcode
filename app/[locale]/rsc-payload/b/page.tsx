/*
 * @Author: zuo
 * @Date: 2026-01-13 17:28:08
 */
import Link from "next/link";
import { Suspense } from "react";

export default function B() {
  return(
    <main>
      <h1 className="text-2xl font-bold mb-4">B</h1>
      <Link href="/rsc-payload/a" className="hover:underline">回到A</Link>
      <Suspense fallback={<div>加载中。。。</div>}>
        <Slow />
      </Suspense>
    </main>
  )
}

async function Slow() {
  const res = await fetch('https://jsonplaceholder.typicode.com/posts', { cache: 'no-store' })
  const data = await res.json()
  return <pre>{JSON.stringify(data, null, 2)}</pre>
}