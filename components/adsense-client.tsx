"use client";
import { useEffect, useRef, useState } from "react";

declare global {
  interface Window {
    adsbygoogle?: any;
  }
}

export default function AdSense() {
  const adRef = useRef(null);
  const [adsLoaded, setAdsLoaded] = useState(false);

  useEffect(() => {
    const fundingScript = document.createElement("script");
    fundingScript.async = true;
    fundingScript.src = "https://fundingchoicesmessages.google.com/i/pub-2319020819990035?ers=1";
    document.head.appendChild(fundingScript);

    const signalScript = document.createElement("script");
    signalScript.innerHTML = `
      (function() {
        function signalGooglefcPresent() {
          if (!window.frames['googlefcPresent']) {
            if (document.body) {
              const iframe = document.createElement('iframe');
              iframe.style = 'width: 0; height: 0; border: none; z-index: -1000; left: -1000px; top: -1000px;';
              iframe.style.display = 'none';
              iframe.name = 'googlefcPresent';
              document.body.appendChild(iframe);
            } else {
              setTimeout(signalGooglefcPresent, 0);
            }
          }
        }
        signalGooglefcPresent();
      })();
    `;
    document.head.appendChild(signalScript);

    function loadAd() {
      if (typeof window !== "undefined" && window.adsbygoogle && adRef.current) {
        if (!adsLoaded) {
          try {
            (window.adsbygoogle = window.adsbygoogle || []).push({});
            setAdsLoaded(true);
          } catch (e) {
            console.error("AdSense push error:", e);
          }
        }
      }
    }

    window.addEventListener("resize", loadAd);
    loadAd();

    return () => window.removeEventListener("resize", loadAd);
  }, [adsLoaded]);

  return (
    <>
      <script
        dangerouslySetInnerHTML={{
          __html: `
            (adsbygoogle = window.adsbygoogle || []).push({});
          `,
        }}
      />

      <ins
        ref={adRef}
        className="adsbygoogle"
        style={{ display: "block", minHeight: "100px" }}
        data-ad-client="ca-pub-2319020819990035"
        data-ad-slot="3426596344"
        data-ad-format="auto"
        data-full-width-responsive="true"
      />
    </>
  );
}