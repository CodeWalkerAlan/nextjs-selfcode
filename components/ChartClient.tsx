'use client'

import { useEffect, useRef } from "react"
import type { Chart as ChartJS } from "chart.js"

export default function ChartClient() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null)
  const chartRef = useRef<ChartJS | null>(null)

  useEffect(() => {
    let cancelled = false

    async function render() {
      if (!canvasRef.current) return

      const { Chart } = await import("chart.js/auto")
      if (cancelled) return

      const ctx = canvasRef.current.getContext("2d")
      if (!ctx) return

      // ⭐ 关键：先销毁旧的
      if (chartRef.current) {
        chartRef.current.destroy()
        chartRef.current = null
      }

      chartRef.current = new Chart(ctx, {
        type: "bar",
        data: {
          labels: ["A", "B", "C"],
          datasets: [
            {
              label: "示例数据",
              data: [3, 5, 2],
              backgroundColor: "#60a5fa",
            },
          ],
        },
      })
    }

    render()

    return () => {
      cancelled = true
      chartRef.current?.destroy()
      chartRef.current = null
    }
  }, [])

  return <canvas ref={canvasRef} width={300} height={160} />
}
