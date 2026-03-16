import { fetchBlocks } from '@/lib/blocks';
import { BlockRenderer } from '../BlockRenderer';

export default async function ServicesPage() {
  const blocks = await fetchBlocks('services');
  return (
    <main>
      <BlockRenderer blocks={blocks} />
    </main>
  );
}
