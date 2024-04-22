import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...args: ClassValue[]) {
  return twMerge(clsx(...args));
}

export function hectrogramsToKilograms(hectograms: number) {
  return hectograms / 10;
}

export function decimetersToMeters(decimeters: number) {
  return decimeters / 10;
}
