/*
 * @Author: zuo
 * @Date: 2026-01-12 11:30:52
 */
import { useState } from "react"

export default function ConditionalRenderPage() {
  const [visable, setVisable] = useState(true);
  return(
    <div>
      <button className="bg-red-500 text-white p-1 rounded-md cursor-pointer" onClick={() => setVisable(!visable)}>change statu</button>
      { visable ? <p>这是个秘密</p> : null }
    </div>
  )
}