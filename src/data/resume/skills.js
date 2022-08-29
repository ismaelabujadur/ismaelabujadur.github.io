// TODO: Add Athletic Skills, Office Skills,
// Data Engineering, Data Science, ML Engineering, ... ?
// Order attribute organizes how important each skill is
// (The bigger the number, the less important, being 1 the most important one)
const skills = [
  {
    title: 'Parkour',
    order: 5,
    category: ['Sports'],
  },
  {
    title: 'Weight-lifting',
    order: 5,
    category: ['Sports'],
  },
  {
    title: 'Hiking',
    order: 5,
    category: ['Sports'],
  },
  {
    title: 'Javascript',
    order: 4,
    category: ['Web Development', 'Programming Languages'],
  },
  {
    title: 'Node.JS',
    order: 3,
    category: ['Web Development'],
  },
  {
    title: 'React',
    order: 3,
    category: ['Web Development'],
  },
  {
    title: 'Bash',
    order: 2,
    category: ['Tools', 'Programming Languages'],
  },
  {
    title: 'Heroku',
    order: 2,
    category: ['Web Development', 'Tools'],
  },
  {
    title: 'MySQL/SQL',
    order: 4,
    category: ['Web Development', 'Databases', 'Programming Languages'],
  },
  {
    title: 'Data Mining',
    order: 3,
    category: ['Data Science'],
  },
  {
    title: 'Express.JS',
    order: 2,
    category: ['Web Development'],
  },
  {
    title: 'Git',
    order: 3,
    category: ['Tools'],
  },
  {
    title: 'Numpy',
    order: 3,
    category: ['Data Science', 'Data Engineering', 'Python'],
  },
  {
    title: 'Numba',
    order: 2,
    category: ['Data Science', 'Data Engineering', 'Python'],
  },
  {
    title: 'Jupyter',
    order: 3,
    category: ['Data Science', 'Python'],
  },
  {
    title: 'Typescript',
    order: 2,
    category: ['Web Development', 'Programming Languages'],
  },
  {
    title: 'HTML + SASS/SCSS/CSS',
    order: 3,
    category: ['Web Development', 'Programming Languages'],
  },
  {
    title: 'Python',
    order: 4,
    category: ['Programming Languages', 'Python'],
  },
  {
    title: 'C/C++',
    order: 2,
    category: ['Programming Languages'],
  },
  {
    title: 'MATLAB',
    order: 2,
    category: ['Programming Languages'],
  },
  {
    title: 'Data Visualization',
    order: 3,
    category: ['Data Science'],
  },
  {
    title: 'GraphQL',
    order: 2,
    category: ['Web Development', 'Databases'],
  },
  {
    title: 'Pandas',
    order: 4,
    category: ['Data Engineering', 'Data Science', 'Python'],
  },
  {
    title: 'Matplotlib',
    order: 3,
    category: ['Data Engineering', 'Data Science', 'Python'],
  },
  {
    title: 'Scikit-Learn',
    order: 4,
    category: ['Data Engineering', 'Data Science', 'Python'],
  },
  {
    title: 'Algorithms',
    order: 4,
    category: ['Data Engineering', 'Data Science'],
  },
  {
    title: 'ClickUp',
    order: 4,
    category: ['Project Management'],
  },
  {
    title: 'JIRA',
    order: 4,
    category: ['Project Management'],
  },
  {
    title: 'Zendesk',
    order: 4,
    category: ['Project Management'],
  },
  {
    title: 'English',
    order: 4,
    category: ['Languages'],
  },
  {
    title: 'Spanish',
    order: 4,
    category: ['Languages'],
  },

].map((skill) => ({ ...skill, category: skill.category.sort() }));

// this is a list of colors that I like. The length should be == to the
// number of categories. Re-arrange this list until you find a pattern you like.
const colors = [
  '#6968b3',
  '#37b1f5',
  '#40494e',
  '#515dd4',
  '#e47272',
  '#cc7b94',
  '#3896e2',
  '#c3423f',
  '#d75858',
  '#747fff',
  '#F94144',
  '#F3722C',
  '#F8961E',
  '#F9844A',
  '#F9C74F',
  '#90BE6D',
  '#43AA8B',
  '#4D908E',
  '#277DA1',
  '#577590',
  '#64cb7b',
];

const categories = [
  ...new Set(skills.reduce((acc, { category }) => acc.concat(category), [])),
]
  .sort()
  .map((category, index) => ({
    name: category,
    color: colors[index],
  }));

export { categories, skills };
