// Simple Portable Text renderer for Astro
import type { PortableTextBlock } from '@sanity/types';

type PortableTextContent = PortableTextBlock | { _type: string; [key: string]: any };

export function renderPortableText(blocks: PortableTextContent[]): string {
  if (!blocks || !Array.isArray(blocks)) return '';

  return blocks
    .map((block: any) => {
      if (block._type === 'block') {
        const text = block.children?.map((child: any) => {
          let content = child.text || '';

          if (child.marks?.includes('strong')) {
            content = `<strong>${content}</strong>`;
          }
          if (child.marks?.includes('em')) {
            content = `<em>${content}</em>`;
          }
          if (child.marks?.includes('code')) {
            content = `<code>${content}</code>`;
          }

          return content;
        }).join('') || '';

        const style = block.style || 'normal';

        switch (style) {
          case 'h1':
            return `<h1>${text}</h1>`;
          case 'h2':
            return `<h2>${text}</h2>`;
          case 'h3':
            return `<h3>${text}</h3>`;
          case 'blockquote':
            return `<blockquote>${text}</blockquote>`;
          default:
            return `<p>${text}</p>`;
        }
      } else if (block._type === 'image') {
        return '';
      }

      return '';
    })
    .join('');
}
