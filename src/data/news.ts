export interface NewsItem {
  slug: string;
  title: string;
  date: string;
  category: 'event' | 'news' | 'reading-group';
  summary: string;
  body?: string;
}

export const news: NewsItem[] = [
  {
    slug: 'symposium-launch-2027',
    title: 'Critical Thinking Symposium — launch event',
    date: '2027-01-15',
    category: 'event',
    summary:
      'Join us for the inaugural Critical Thinking Symposium event: a day of deep-dive discussions, grey-area debates, and interview preparation workshops for Sixth Form students.',
  },
  {
    slug: 'interview-season-preparation',
    title: 'Getting ready for Oxbridge and university interviews',
    date: '2026-11-01',
    category: 'news',
    summary:
      'As interview season approaches, here are the approaches and texts that consistently help students think more slowly, more carefully, and more interestingly.',
  },
];
