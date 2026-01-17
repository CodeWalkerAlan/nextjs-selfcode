/*
 * @Author: zuo
 * @Date: 2026-01-12 17:29:03
 */
'use client'

import { useEffect } from "react"

export default function Error({error, reset}: {error: Error & {digest?: string}, reset: () => void}) {
  useEffect(() => {
    console.error(error);
  },[error])
  return (
    <div className="p-8">
      <h2 className="font-bold mb-8 text-xl">加载文章失败了！</h2>
      <button className="bg-red-500 text-white p-1 rounded-md mt-4" onClick={() => reset()}>再试一次</button>
    </div>
  )
}