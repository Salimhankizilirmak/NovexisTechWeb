"use client";
export default function WaveDivider({ flip = false, className = "" }: { flip?: boolean; className?: string }) {
  return (
    <div className={className} aria-hidden>
      <svg
        viewBox="0 0 1440 80"
        className={`${flip ? "rotate-180" : ""} w-full h-16 sm:h-20 md:h-24 fill-red-600`}
        preserveAspectRatio="none"
      >
        <path d="M0,32 C240,96 480,-32 720,16 C960,64 1200,48 1440,8 L1440,80 L0,80 Z" />
      </svg>
    </div>
  );
}