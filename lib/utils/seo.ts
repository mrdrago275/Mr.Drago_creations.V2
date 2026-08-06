export function absoluteUrl(path: string = ""): string {
  const base =
    process.env.NEXT_PUBLIC_SITE_URL ||
    "https://mrdragocreations.com";

  return new URL(path, base).toString();
}
