"use client";
export default function WaveDivider({ flip = false, className = "", variant = "red" }: { flip?: boolean; className?: string; variant?: "red" | "green" }) {
  return (
    <div className={className} aria-hidden>
      <svg
        viewBox="0 0 1440 80"
        className={`${flip ? "rotate-180" : ""} w-full h-16 sm:h-20 md:h-24 ${variant === "green" ? "fill-green-600" : "fill-red-600"}`}
        preserveAspectRatio="none"
      >
        <path d="M0,32 C240,96 480,-32 720,16 C960,64 1200,48 1440,8 L1440,80 L0,80 Z" />
      </svg>
    </div>
  );
}


