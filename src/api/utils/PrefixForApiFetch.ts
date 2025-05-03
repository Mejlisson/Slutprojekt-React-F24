export const prefixMap: Record<string, string> = {
    character: "4005",
    issue: "4000",
    volume: "4050",
    series: "4075",
    movie: "4025",
    creator: "4040",
};

export function getPrefixForResourceType(resourceType: string): string {
    const prefix = prefixMap[resourceType.toLowerCase()];
    if (!prefix) throw new Error(`Unknown resource type: ${resourceType}`);
    return prefix;
}