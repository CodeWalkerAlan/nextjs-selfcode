/*
 * @Author: zuo
 * @Date: 2026-01-13 17:24:04
 */
import Link from "next/link"

export default async function A() {
  const res = await fetch('https://jsonplaceholder.typicode.com/posts', { next: { revalidate: 60 } })
  const data = await res.json()
  return(
    <div>
      <h1 className="text-2xl font-bold mb-4">A</h1>
      <Link href="/rsc-payload/b" className="hover:underline">前往B</Link>
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </div>
  )
}