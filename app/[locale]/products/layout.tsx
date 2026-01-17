/*
 * @Author: zuo
 * @Date: 2026-01-14 16:07:35
 */
'use client'
import { ThemeProvider, useTheme } from "@/components/ThemeProvider";

export default function ProductLayout({children}: {children: React.ReactNode}) {
  const { theme, toggle } =  useTheme();
  return(
    <div>
      <ThemeProvider>
        {children}
        <button onClick={toggle}>
          当前主题: {theme}，点击切换
        </button>
      </ThemeProvider>
    </div>
  )
}