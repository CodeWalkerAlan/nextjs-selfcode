/*
 * @Author: zuo
 * @Date: 2026-01-14 12:03:44
 */
import ClientChartLazy from '@/components/ClientChartLazy'
// import ClientChartLazy from '@/components/ChartClient'


export default function ClientDemo() {
  return (
    <main className="p-8">
      <h1 className="text-2xl font-bold mb-2">客户端组件示例</h1>
      <p className="mb-4">这个图表组件在客户端渲染，避免了不必要的 SSR 负担。</p>
      <ClientChartLazy />
    </main>
  )
}