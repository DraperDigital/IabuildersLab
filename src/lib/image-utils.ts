export function getFallbackImage(slug?: string): string {
    if (!slug) return "/images/tropical-juice-selfie.jpg";
    return `/images/${slug}.jpg`;
}
