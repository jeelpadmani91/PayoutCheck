import React from 'react';

interface LogoProps {
  className?: string;
  width?: number;
  height?: number;
  showText?: boolean;
}

export default function Logo({
  className = '',
  width = 32,
  height = 32,
  showText = false,
}: LogoProps) {
  return (
    <div className={`flex items-center gap-2 ${className}`}>
      <svg
        width={width}
        height={height}
        viewBox="0 0 32 32"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="flex-shrink-0"
      >
        <rect width="32" height="32" rx="8" fill="#0B1F33" />
        <path
          d="M9 16L14 21L23 11"
          stroke="#0E8F73"
          strokeWidth="3"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
      {showText && (
        <span className="font-bold text-navy text-xl leading-none">
          PayoutCheck
        </span>
      )}
    </div>
  );
}
