import { en } from "./dictionaries/en";
import { ar } from "./dictionaries/ar";

export type Locale = "en" | "ar";
export type Dictionary = typeof en | typeof ar;

const dictionaries = { en, ar } satisfies Record<Locale, Dictionary>;

export function getDictionary(locale: Locale): Dictionary {
  return dictionaries[locale];
}

export function isLocale(value: string): value is Locale {
  return value === "en" || value === "ar";
}
