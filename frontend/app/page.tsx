import { fetchBlocks } from '@/lib/blocks';
import { BlockRenderer } from './BlockRenderer';

export default async function HomePage() {
  const blocks = await fetchBlocks('home');
  return (
    <main>
      <BlockRenderer blocks={blocks} />
    </main>
  );
}
