type DevTool = {
  name: string;
  url: string;
  description: string;
};

export const tools: DevTool[] = [
  {
    name: 'Planning Poker',
    url: 'https://poker-pi-eosin.vercel.app/',
    description: 'Estimate stories with your team in a focused session.',
  },
  {
    name: 'Realm Manager',
    url: 'https://realm-manager.vercel.app/',
    description: 'Manage realm configuration from one dedicated surface.',
  },
  {
    name: 'Menu Visualizer',
    url: 'https://menu-visualizer-six.vercel.app/',
    description: 'Preview menu structure and inspect navigation behavior.',
  },
  {
    name: 'CSV Splitter',
    url: 'https://csv-splitter-woad.vercel.app/',
    description: 'Split large CSV files into smaller workable pieces.',
  },
];
