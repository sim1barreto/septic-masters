import { fetchBlocks } from '@/lib/blocks';
import { BlockRenderer } from '../BlockRenderer';

export default async function AboutPage() {
  const blocks = await fetchBlocks('about');
  return (
    <main>
      <BlockRenderer blocks={blocks} />
    </main>
  );
}
