import { fetchBlocks } from '@/lib/blocks';
import { BlockRenderer } from '../BlockRenderer';

export default async function ServiceAreasPage() {
  const blocks = await fetchBlocks('service-areas');
  return (
    <main>
      <BlockRenderer blocks={blocks} />
    </main>
  );
}
