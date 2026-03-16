export type Block = {
  blockName: string;
  attrs: Record<string, unknown>;
  innerBlocks: Block[];
};

export async function fetchBlocks(slug: string): Promise<Block[]> {
  const apiUrl = process.env.NEXT_PUBLIC_WP_API_URL ?? 'http://localhost';
  try {
    const res = await fetch(`${apiUrl}/wp-json/site/v1/blocks/${slug}`, {
      next: { revalidate: 60 },
    });
    if (!res.ok) return [];
    return res.json();
  } catch {
    return [];
  }
}
