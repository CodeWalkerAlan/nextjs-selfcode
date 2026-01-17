/*
 * @Author: zuo
 * @Date: 2026-01-12 11:25:58
 */

type GreetingProps = {
  name: string
}

export default function Greeting( { name }: GreetingProps) {
  return(
    <div>
      <span>你好啊，{ name }</span>
    </div>
  )
}