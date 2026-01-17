/*
 * @Author: zuo
 * @Date: 2026-01-12 11:12:03
 */
// 'use client'
import { useState } from "react"

export function Homepage() {
  const [count, setCount] = useState(0);
  function addCount() {
    setCount(count+1);
  }
  return (
    <div>
      <div>{count}</div>
      <button className="bg-red-500 text-white p-2 rounded-md cursor-pointer" onClick={addCount}>add</button>
    </div>
    
  )
}



