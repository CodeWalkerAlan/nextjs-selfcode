/*
 * @Author: zuo
 * @Date: 2026-01-14 11:59:02
 */
'use client'

import dynamic from "next/dynamic"

const ChartLazy = dynamic(() => import('@/components/ChartClient'), {
  ssr: false,
  loading: () => (<div>图表加载中…</div>)
} )

export default function ClientChartLazy() {
  return <ChartLazy />
}