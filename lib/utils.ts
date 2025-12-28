import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function isExternalLink(href: string) {
  return href.startsWith("http://") || href.startsWith("https://");
}

export function isMailLink(href: string) {
  return href.startsWith("mailto:");
}
