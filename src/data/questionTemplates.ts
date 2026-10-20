export type QuestionForm = 'what-is' | 'what-is-for' | 'types-of';
export type QuestionDepth = 'simple' | 'grey' | 'deep';
export type InputMode = 'text' | 'concept';

export interface GeneratedQuestion {
  form: QuestionForm;
  depth: QuestionDepth;
  question: string;
  fiveWhys: string[];
  teacherNote?: string;
}

export interface QuestionTemplate {
  form: QuestionForm;
  depth: QuestionDepth;
  pattern: (term: string, subject?: string) => string;
  fiveWhysPatterns: ((term: string) => string)[];
  teacherNote?: string;
}

export const questionTemplates: QuestionTemplate[] = [
  /* ── WHAT IS X? ─────────────────────────────────────────── */
  {
    form: 'what-is',
    depth: 'simple',
    pattern: (t) => `What is ${t}?`,
    fiveWhysPatterns: [
      (t) => `Why does it matter how we define ${t}?`,
      (t) => `What would change if our definition of ${t} were different?`,
      (t) => `Is ${t} a natural category or a human invention?`,
      (t) => `Who gets to decide what counts as ${t}?`,
      (t) => `Can something be partly ${t} and partly not?`,
    ],
    teacherNote:
      'Start here. Students often assume they know what a term means. This question surfaces hidden assumptions.',
  },
  {
    form: 'what-is',
    depth: 'grey',
    pattern: (t) => `Is ${t} always easy to identify — or are there cases where it is genuinely unclear?`,
    fiveWhysPatterns: [
      (t) => `What makes a borderline case of ${t} borderline?`,
      (t) => `Does the ambiguity point to something in the world, or in our concept?`,
      (t) => `Could we resolve the borderline case by adding more information, or is the uncertainty irreducible?`,
      (t) => `What's at stake when we disagree about whether something is ${t}?`,
      (t) => `If two experts disagree about a case, does one have to be wrong?`,
    ],
    teacherNote:
      'Grey questions are the engine of interview conversations. The best candidates look for the edges, not the centre.',
  },
  {
    form: 'what-is',
    depth: 'deep',
    pattern: (t) => `What would we lose if the concept of ${t} disappeared from our thinking entirely?`,
    fiveWhysPatterns: [
      (t) => `Is ${t} doing work that no other concept could do?`,
      (t) => `Has the meaning of ${t} changed across history or cultures?`,
      (t) => `Is ${t} a useful fiction, or does it pick out something real?`,
      (t) => `What does the existence of ${t} as a concept tell us about the people who use it?`,
      (t) => `Could we redesign ${t} to be more precise — and what would we gain or lose?`,
    ],
    teacherNote:
      'The deepest form of the "What is X?" question. Push students who have given a good definition toward this.',
  },

  /* ── WHAT IS X FOR? ─────────────────────────────────────── */
  {
    form: 'what-is-for',
    depth: 'simple',
    pattern: (t) => `What is ${t} for?`,
    fiveWhysPatterns: [
      (t) => `Who benefits most from ${t}?`,
      (t) => `Would society function differently without ${t}?`,
      (t) => `Is the purpose of ${t} different for different people?`,
      (t) => `Has the purpose of ${t} changed over time?`,
      (t) => `Is ${t} a means to an end, or is it valuable in itself?`,
    ],
    teacherNote:
      'This shifts focus from definition to function. Students often find this easier to engage with, so use it to build confidence before moving to deeper forms.',
  },
  {
    form: 'what-is-for',
    depth: 'grey',
    pattern: (t) =>
      `Is the purpose of ${t} straightforward — or do different people use it for different, and possibly conflicting, ends?`,
    fiveWhysPatterns: [
      (t) => `Can ${t} be misused? What would that tell us about its proper use?`,
      (t) => `If ${t} serves conflicting purposes, which purpose should take priority?`,
      (t) => `Is there a tension between what ${t} is officially for and what it actually does?`,
      (t) => `Could ${t} serve its purpose better by being different?`,
      (t) => `Does knowing what ${t} is for change how we evaluate it?`,
    ],
  },
  {
    form: 'what-is-for',
    depth: 'deep',
    pattern: (t) =>
      `If ${t} did not exist, would we need to invent it? What does the answer reveal?`,
    fiveWhysPatterns: [
      (t) => `Is the need that ${t} meets universal, or culturally specific?`,
      (t) => `Does ${t} create the very need it claims to fulfil?`,
      (t) => `What assumptions about human nature are built into ${t}?`,
      (t) => `Is there a version of society in which ${t} would be unnecessary?`,
      (t) => `What does the fact that we have ${t} tell us about the world we live in?`,
    ],
    teacherNote:
      'A demanding form. Best used when students are fluent with the simpler version. The counter-question "Does X create the need it claims to fulfil?" can open very rich discussions.',
  },

  /* ── TYPES OF X ─────────────────────────────────────────── */
  {
    form: 'types-of',
    depth: 'simple',
    pattern: (t) => `What are the different types of ${t}?`,
    fiveWhysPatterns: [
      (t) => `Do all types of ${t} share something in common, or is it just a word we use for convenience?`,
      (t) => `Are some types of ${t} more important than others?`,
      (t) => `Is the division into types natural, or have we imposed it?`,
      (t) => `Could the same thing belong to more than one type?`,
      (t) => `Are there any types of ${t} that most people don't notice?`,
    ],
    teacherNote:
      'Taxonomy exercises are a gentle way into analysis. Ask students to justify their categories, not just list them.',
  },
  {
    form: 'types-of',
    depth: 'grey',
    pattern: (t) =>
      `Are the categories we use to classify ${t} natural — or have we imposed an arbitrary structure onto something more continuous?`,
    fiveWhysPatterns: [
      (t) => `What work do the categories do? What would we gain or lose by collapsing two of them?`,
      (t) => `Can one ${t} shift from one category to another? What would trigger that shift?`,
      (t) => `Are these the same categories everyone would use, or are they culturally specific?`,
      (t) => `Is the hardest case to classify also the most interesting one?`,
      (t) => `What happens at the edges between categories?`,
    ],
  },
  {
    form: 'types-of',
    depth: 'deep',
    pattern: (t) =>
      `Is the very act of dividing ${t} into types a form of understanding, or a form of distortion?`,
    fiveWhysPatterns: [
      (t) => `Does classifying ${t} change it — or just describe it?`,
      (t) => `Who has the authority to create or revise the taxonomy of ${t}?`,
      (t) => `What would a radically different taxonomy of ${t} reveal?`,
      (t) => `Are there things about ${t} that resist classification altogether?`,
      (t) => `Is a perfect taxonomy of ${t} possible in principle, or always provisional?`,
    ],
    teacherNote:
      'The deepest form of the types question. Ask this only after students have done the basic taxonomy; the contrast between their initial categories and this question creates productive discomfort.',
  },
];

export function generateQuestions(
  term: string,
  selectedForms: QuestionForm[],
  selectedDepths: QuestionDepth[]
): GeneratedQuestion[] {
  const results: GeneratedQuestion[] = [];
  for (const template of questionTemplates) {
    if (
      selectedForms.includes(template.form) &&
      selectedDepths.includes(template.depth)
    ) {
      results.push({
        form: template.form,
        depth: template.depth,
        question: template.pattern(term),
        fiveWhys: template.fiveWhysPatterns.map((fn) => fn(term)),
        teacherNote: template.teacherNote,
      });
    }
  }
  return results;
}

export const formLabels: Record<QuestionForm, string> = {
  'what-is': '"What is X?"',
  'what-is-for': '"What is X for?"',
  'types-of': '"What are the types of X?"',
};

export const depthLabels: Record<QuestionDepth, string> = {
  simple: 'Simple',
  grey: 'Grey',
  deep: 'Deep',
};

export const depthDescriptions: Record<QuestionDepth, string> = {
  simple: 'A direct, answerable question — but one that hides more than it shows.',
  grey: 'A question with no clean answer. The conversation is the point.',
  deep: 'A question that makes the concept itself strange. Use it when students are ready.',
};
