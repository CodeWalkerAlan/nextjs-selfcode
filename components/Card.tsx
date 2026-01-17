/*
 * @Author: zuo
 * @Date: 2026-01-12 11:58:03
 */
type CardProp = {
  children: React.ReactNode
}

export default function Card({ children }: CardProp) {
  return (
    <div>
      <p>我是一个卡片</p>
      { children }
    </div>
  )
}