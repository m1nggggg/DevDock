type DevTool = {
  name: string;
  url: string;
  description: string;
  category: string;
};

export const tools: DevTool[] = [
  {
    name: 'Planning Poker',
    url: 'https://poker-pi-eosin.vercel.app/',
    description: 'Estimate stories with your team in a focused session.',
    category: 'Collaboration',
  },
  {
    name: 'Realm Manager',
    url: 'https://realm-manager.vercel.app/',
    description: 'Manage realm configuration from one dedicated surface.',
    category: 'Platform',
  },
  {
    name: 'Menu Visualizer',
    url: 'https://menu-visualizer-six.vercel.app/',
    description: 'Preview menu structure and inspect navigation behavior.',
    category: 'Interface',
  },
  {
    name: 'CSV Splitter',
    url: 'https://csv-splitter-woad.vercel.app/',
    description: 'Split large CSV files into smaller workable pieces.',
    category: 'Data',
  },
];
