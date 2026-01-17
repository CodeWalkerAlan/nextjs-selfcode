/*
 * @Author: zuo
 * @Date: 2026-01-15 12:46:46
 */
"use client"

import * as React from "react"
import { 
  ThemeProvider as NextThemesProvider,
  type ThemeProviderProps,
 } from "next-themes"


export function ThemeProvider({ children, ...props }: ThemeProviderProps) {
  return <NextThemesProvider {...props}>{children}</NextThemesProvider>
}