/*
 * @Author: zuo
 * @Date: 2026-01-13 15:10:40
 */
'use client'
import { useState } from "react"

export default function PostLayout({children}: {children: React.ReactNode}) {
  const [like, setLike] = useState(0);
  return (
    <div className="flex h-screen gap-24">
      <aside>
        <button className="bg-blue-400 px-3 py-1 text-white rounded-md" onClick={() => setLike((n) => n+1)}>like</button>
        <p>当前喜欢数：{ like }</p>
      </aside>
      <main className="flex-1">
        {children}
      </main>
    </div>
  )
}