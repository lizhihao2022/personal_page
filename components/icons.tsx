import React from "react";
import { cn } from "@/lib/utils";

type IconProps = React.SVGProps<SVGSVGElement> & { className?: string };

export function GithubIcon({ className, ...props }: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden
      className={cn("h-5 w-5", className)}
      {...props}
    >
      <path d="M12 2C6.48 2 2 6.58 2 12.26c0 4.5 2.87 8.31 6.84 9.66.5.09.68-.22.68-.5 0-.25-.01-.91-.01-1.78-2.78.62-3.37-1.37-3.37-1.37-.45-1.18-1.11-1.5-1.11-1.5-.91-.64.07-.63.07-.63 1 .07 1.53 1.05 1.53 1.05.9 1.57 2.37 1.12 2.95.86.09-.67.35-1.12.63-1.38-2.22-.26-4.55-1.15-4.55-5.13 0-1.13.39-2.06 1.03-2.79-.1-.26-.45-1.3.1-2.71 0 0 .84-.27 2.75 1.06a9.32 9.32 0 0 1 5 0c1.9-1.33 2.74-1.06 2.74-1.06.55 1.41.2 2.45.1 2.71.64.73 1.03 1.66 1.03 2.79 0 3.99-2.34 4.86-4.57 5.12.36.32.68.95.68 1.92 0 1.39-.01 2.51-.01 2.85 0 .28.18.6.69.5A10.04 10.04 0 0 0 22 12.26C22 6.58 17.52 2 12 2Z" />
    </svg>
  );
}

export function MailIcon({ className, ...props }: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.6}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden
      className={cn("h-5 w-5", className)}
      {...props}
    >
      <rect x="3" y="5" width="18" height="14" rx="2" />
      <path d="m5 7 7 5 7-5" />
    </svg>
  );
}

export function FileIcon({ className, ...props }: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.6}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden
      className={cn("h-5 w-5", className)}
      {...props}
    >
      <path d="M7 3h7l5 5v13H7z" />
      <path d="M14 3v6h6" />
    </svg>
  );
}

export function ScholarIcon({ className, ...props }: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.6}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden
      className={cn("h-5 w-5", className)}
      {...props}
    >
      <path d="m3 7 9-4 9 4-9 4-9-4Z" />
      <path d="m7 10.5 5 2.5 5-2.5" />
      <path d="m7 14.5 5 2.5 5-2.5" />
    </svg>
  );
}

export function LinkedinIcon({ className, ...props }: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden
      className={cn("h-5 w-5", className)}
      {...props}
    >
      <path d="M4.98 3.5C4.98 4.88 3.89 6 2.5 6S0 4.88 0 3.5 1.09 1 2.48 1 4.98 2.12 4.98 3.5ZM.2 8.33h4.56V24H.2V8.33ZM8.36 8.33h4.37v2.14h.06c.61-1.15 2.1-2.37 4.33-2.37 4.63 0 5.48 3.05 5.48 7V24h-4.56v-6.59c0-1.57-.03-3.58-2.18-3.58-2.18 0-2.51 1.7-2.51 3.46V24H8.36V8.33Z" />
    </svg>
  );
}

export function DblpIcon({ className, ...props }: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.6}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden
      className={cn("h-5 w-5", className)}
      {...props}
    >
      <rect x="3" y="3" width="18" height="18" rx="3" />
      <path d="M7.5 7.5h5a3 3 0 0 1 0 6h-5z" />
      <path d="M14 10.5h2.5v6" />
    </svg>
  );
}

export function ExternalIcon({ className, ...props }: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.6}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden
      className={cn("h-4 w-4", className)}
      {...props}
    >
      <path d="M7 17 17 7" />
      <path d="M7 7h10v10" />
    </svg>
  );
}
