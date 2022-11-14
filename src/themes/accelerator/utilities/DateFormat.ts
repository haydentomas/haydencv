import type { Site } from '@config';

type FrontMatter = Record<string, any>;

export function formatDate (frontmatter: FrontMatter, lang: string, site: Site) {
  const date = frontmatter.pubDate ?? '';

  if (date) {
    return new Date(date).toLocaleDateString(lang, site.dateOptions);
  }
  
  return '';
}

export function formatModifiedDate (frontmatter: FrontMatter, lang: string, site: Site) {
  const date = frontmatter.modDate ?? '';

  if (date) {
    return new Date(date).toLocaleDateString(lang, site.dateOptions);
  }
  
  return '';
}