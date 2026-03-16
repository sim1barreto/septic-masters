import { fetchBlocks } from '@/lib/blocks';
import { BlockRenderer } from '../BlockRenderer';

export default async function ContactPage() {
  const blocks = await fetchBlocks('contact');
  return (
    <main>
      <BlockRenderer blocks={blocks} />
    </main>
  );
}
