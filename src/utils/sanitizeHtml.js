import DOMPurify from 'dompurify';

const DEFAULT_SANITIZE_OPTIONS = {
  ALLOWED_TAGS: [
    'a',
    'b',
    'blockquote',
    'br',
    'code',
    'div',
    'em',
    'h1',
    'h2',
    'h3',
    'h4',
    'h5',
    'h6',
    'hr',
    'i',
    'img',
    'li',
    'ol',
    'p',
    'pre',
    'span',
    'strong',
    'sub',
    'sup',
    'table',
    'tbody',
    'td',
    'th',
    'thead',
    'tr',
    'ul'
  ],
  ALLOWED_ATTR: ['href', 'title', 'alt', 'src', 'target', 'rel', 'style']
};

export function sanitizeHtml(value = '') {
  if (typeof value !== 'string') return '';
  return DOMPurify.sanitize(value, DEFAULT_SANITIZE_OPTIONS);
}
