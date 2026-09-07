export const biography = 'I’m a designer and artist based in Boston and Beijing with experience in Human Factors and UX design. I’m currently pursuing a combined degree in Human Factors Psychology and Arts at Tufts University.';

// Set href when a new page is ready. Navigation updates automatically.
export const navigation = [
  { label: 'My works', href: '/works' },
  { label: 'My Experience', href: null },
  { label: 'Contact', href: null },
];
export const projects = [
  { title: 'UX Project', description: 'User research and digital product experiences.', href: '/works/ux' },
  { title: 'CAD Designs', description: '3D modeling and physical design exploration.' },
];

// Add case-study descriptions and routes here when the content is ready.
export const uxProjects = [
  { title: 'Statusly' },
  { title: 'Li Auto — Internship Website' },
];

// Homepage navigation and numbered placeholders; replace with project assets later.
export const headerNavigation = navigation.filter(item => item.label !== 'My works');
export const featuredProjects = [1, 2, 3, 4].map(id => ({ id }));
