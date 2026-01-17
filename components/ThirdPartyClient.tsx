/*
 * @Author: zuo
 * @Date: 2026-01-14 12:11:55
 */
'use client'

import Script from "next/script"

export default function ThirdPartyClient() {
  return(
    <div>
      <Script src="https://example.com/sdk.js" strategy="lazyOnload"></Script>
      <div id="widget" />
    </div>
  )
}