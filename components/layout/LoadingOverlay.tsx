"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

export default function LoadingOverlay() {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    function handleLoad() {
      setTimeout(() => setIsVisible(false), 150);
    }

    if (document.readyState === "complete") {
      handleLoad();
    } else {
      window.addEventListener("load", handleLoad);
    }
    return () => window.removeEventListener("load", handleLoad);
  }, []);

  return (
    <div
      aria-hidden={!isVisible}
      className={`fixed inset-0 z-[60] flex items-center justify-center bg-green-50/60 dark:bg-green-950/60 backdrop-blur-sm transition-opacity duration-500 ${
        isVisible ? "opacity-100" : "opacity-0 pointer-events-none"
      }`}
    >
      <div className="flex flex-col items-center gap-4">
        <div className="h-12 w-12 rounded-full border-4 border-green-500/30 border-t-green-600 animate-spin" />
        <div className="flex items-center gap-2">
          <Image src="/images/logo.svg" alt="Hitit Yalıtım" width={28} height={28} />
          <span className="text-sm font-medium text-green-900 dark:text-green-100">Yükleniyor...</span>
        </div>
      </div>
    </div>
  );
}


