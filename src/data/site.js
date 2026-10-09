// Enhancement: central site configuration keeps identity, links, and homepage copy out of page components.
export const site = {
  name: 'Srujan Pandya',
  fullName: 'Srujan Mayank Pandya',
  roleLine: 'PhD · University at Buffalo · soft-matter physics',
  location: 'Buffalo, NY',
  email: 'srujanma@buffalo.edu',
  intro: 'Modeling soft-matter systems for applications in advanced manufacturing of thin films, and exploring relaxation in charged, porous dielectric deposits formed from nanoparticle aggregates.',
  researchInterests: [
    'soft matter',
    'electrospray deposition',
    'multiscale modeling',
    'soft microrobotics',
  ],
  links: {
    linkedin: 'https://www.linkedin.com/in/srujanpandya',
    github: 'https://github.com/SrujanPandya',
    substack: 'https://srujanpandya.substack.com',
  },
  substack: {
    name: 'Barely an Opinion',
    tagline: 'I cannot give everyone the story they want. But I am trying hard to give everyone the story they need.',
    homeUrl: 'https://srujanpandya.substack.com',
    subscribeUrl: 'https://srujanpandya.substack.com/subscribe',
    feedUrl: 'https://srujanpandya.substack.com/feed',
  },
  cvPath: '/Srujan_Pandya_Resume.pdf',
};

export const navItems = [
  { label: 'research', to: '/research' },
  { label: 'projects', to: '/projects' },
  { label: 'writing', to: '/writing' },
  { label: 'cv', to: '/cv' },
];

export const updates = [
  { year: '2026', text: 'investigating electrospray deposition processes' },
  { year: '2026', text: 'PhD in Mechanical Engineering begins at University at Buffalo' },
];
