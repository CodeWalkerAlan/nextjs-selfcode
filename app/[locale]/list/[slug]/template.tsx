/*
 * @Author: zuo
 * @Date: 2026-01-13 14:50:41
 */
import "./template.css"

export default function Template({children}: {children: React.ReactNode}) {

  return(
    <div className="fade-in">
      {children}
    </div>
  )
}