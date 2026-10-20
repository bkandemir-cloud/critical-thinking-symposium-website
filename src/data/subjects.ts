export interface Subject {
  slug: string;
  title: string;
  tagline: string;
  colour: string;
  description: string;
}

export const subjects: Subject[] = [
  {
    slug: 'english-literature',
    title: 'English Literature',
    tagline: 'Language, meaning, and the limits of interpretation',
    colour: '#7b3f6e',
    description:
      'From close reading to theoretical lenses: how texts mean, resist, and surprise us.',
  },
  {
    slug: 'history',
    title: 'History',
    tagline: 'Evidence, causation, and the shape of the past',
    colour: '#8b4513',
    description:
      'What historians do, how they argue, and why the same event yields different stories.',
  },
  {
    slug: 'philosophy',
    title: 'Philosophy',
    tagline: 'Arguments, thought experiments, and the examined life',
    colour: '#2d6a4f',
    description:
      'Logic, ethics, epistemology: the tools philosophers use to take ideas apart.',
  },
  {
    slug: 'classics',
    title: 'Classics',
    tagline: 'Greece, Rome, and the foundations of Western thought',
    colour: '#b5651d',
    description:
      'Ancient texts and ideas that still underpin philosophy, politics, and literature today.',
  },
  {
    slug: 'economics',
    title: 'Economics',
    tagline: 'Markets, incentives, and the limits of rational choice',
    colour: '#1b4d7e',
    description:
      'From microeconomic theory to the big macroeconomic debates: how economists think.',
  },
  {
    slug: 'ppe',
    title: 'PPE',
    tagline: 'Philosophy, Politics, Economics — together',
    colour: '#3d5a80',
    description:
      'How the three disciplines intersect: power, institutions, justice, and trade-offs.',
  },
  {
    slug: 'theology',
    title: 'Theology & Religious Studies',
    tagline: 'Belief, reason, and the sacred',
    colour: '#5c4a1e',
    description:
      'How religions work as systems of thought, and how theologians reason about faith.',
  },
];
