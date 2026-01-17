/*
 * @Author: zuo
 * @Date: 2026-01-12 11:50:04
 */
import { useEffect, useState } from "react";

export default function EffectDemoPage() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    document.title = `你点击了${count}次`;
  }, [count])

  return (
    <div>
      <button className="bg-red-500 p-1 text-white rounded-md cursor-pointer" onClick={() => setCount(count + 1)}>addCount</button>
    </div>
  )
}