export interface ReadingItem {
  title: string;
  author: string;
  year?: string;
  subjects: string[];
  why: string;
  difficulty: 'accessible' | 'moderate' | 'challenging';
  type: 'book' | 'essay' | 'article';
}

export const readings: ReadingItem[] = [
  {
    title: 'Thinking, Fast and Slow',
    author: 'Daniel Kahneman',
    year: '2011',
    subjects: ['philosophy', 'economics', 'ppe'],
    why: `Kahneman's distinction between System 1 (fast, intuitive) and System 2 (slow, deliberate) thinking is a direct entry-point for the tortoise-over-hare argument at the heart of this site. Interviewers want students who have activated System 2.`,
    difficulty: 'accessible',
    type: 'book',
  },
  {
    title: 'Ways of Seeing',
    author: 'John Berger',
    year: '1972',
    subjects: ['english-literature', 'history', 'classics'],
    why: `A short, visual, argument-driven text that asks you to question every assumption you bring to looking. Perfect for practising the "What is X for?" question type.`,
    difficulty: 'accessible',
    type: 'book',
  },
  {
    title: `Justice: What's the Right Thing to Do?`,
    author: 'Michael Sandel',
    year: '2009',
    subjects: ['philosophy', 'ppe', 'economics'],
    why: `Each chapter presents a genuine dilemma with no clean answer — exactly the grey-area thinking that interview panels probe. Read one chapter as a self-contained discussion exercise.`,
    difficulty: 'accessible',
    type: 'book',
  },
  {
    title: 'The Structure of Scientific Revolutions',
    author: 'Thomas Kuhn',
    year: '1962',
    subjects: ['philosophy', 'history', 'ppe'],
    why: `Kuhn's concept of a paradigm shift is now ubiquitous — but few students can explain it precisely. Knowing what it actually means, and how it differs from ordinary scientific progress, is an instant differentiator in interviews.`,
    difficulty: 'moderate',
    type: 'book',
  },
  {
    title: 'The Periodic Table',
    author: 'Primo Levi',
    year: '1975',
    subjects: ['english-literature', 'history'],
    why: `A memoir structured around chemical elements. A rich text for questions about form: what does it mean to organise experience like this? Why elements? Rewards slow, attentive reading.`,
    difficulty: 'moderate',
    type: 'book',
  },
  {
    title: 'The Communist Manifesto',
    author: 'Marx and Engels',
    year: '1848',
    subjects: ['history', 'ppe', 'economics', 'philosophy'],
    why: `Short, polemical, and precise: the perfect text for practising "What is X?", "What is X for?", and "What are the different types of X?" all at once. You do not need to be a Marxist to find it a useful thinking-tool.`,
    difficulty: 'moderate',
    type: 'book',
  },
  {
    title: 'Orientalism',
    author: 'Edward Said',
    year: '1978',
    subjects: ['english-literature', 'history', 'classics'],
    why: `Said's argument — that Western representations of the East say more about the West than the East — is both historically important and immediately applicable to how we read any text made about an "other".`,
    difficulty: 'challenging',
    type: 'book',
  },
  {
    title: 'A Confession',
    author: 'Leo Tolstoy',
    year: '1882',
    subjects: ['theology', 'philosophy', 'english-literature'],
    why: `Tolstoy's short account of his own crisis of meaning is one of the most direct introductions to questions about what makes a life meaningful — questions every theology and philosophy interview will touch.`,
    difficulty: 'accessible',
    type: 'book',
  },
];
