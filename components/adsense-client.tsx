"use client";
import Script from "next/script";

export default function AdSense() {
  return (
    <Script
      async
      id=google-adsense
      strategy=afterInteractive
      src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-2319020819990035"
      crossOrigin="anonymous"
    />
  );
}