type ToolIconProps = {
  name: string;
};

const iconProps = {
  width: 22,
  height: 22,
  viewBox: '0 0 24 24',
  fill: 'none',
  xmlns: 'http://www.w3.org/2000/svg',
  'aria-hidden': true,
};

export const ToolIcon = ({ name }: ToolIconProps) => {
  switch (name) {
    case 'Planning Poker':
      return (
        <svg {...iconProps}>
          <rect x="4.5" y="6.5" width="10" height="13" rx="2.25" stroke="currentColor" strokeWidth="1.7" />
          <path d="M9.5 4.5h5.75a3.25 3.25 0 0 1 3.25 3.25V15" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" />
          <path d="M8 11h3M8 15h2" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" />
        </svg>
      );
    case 'Text Workbench':
      return (
        <svg {...iconProps}>
          <path d="M4.5 6h6M4.5 10h4M15.5 14h4M13.5 18h6" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" />
          <path d="m10 15 2 2 3.5-5" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M14 6h5.5M16 10h3.5" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" opacity=".55" />
        </svg>
      );
    case 'Realm Manager':
      return (
        <svg {...iconProps}>
          <circle cx="12" cy="12" r="8" stroke="currentColor" strokeWidth="1.7" />
          <path d="M4 12h16M12 4c2.2 2.16 3.33 4.83 3.4 8-.07 3.17-1.2 5.84-3.4 8-2.2-2.16-3.33-4.83-3.4-8C8.67 8.83 9.8 6.16 12 4Z" stroke="currentColor" strokeWidth="1.7" />
        </svg>
      );
    case 'Menu Visualizer':
      return (
        <svg {...iconProps}>
          <path d="M8.5 6.5H20M8.5 12H17M8.5 17.5H20" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" />
          <rect x="4" y="5" width="2.5" height="2.5" rx=".75" fill="currentColor" />
          <rect x="4" y="10.75" width="2.5" height="2.5" rx=".75" fill="currentColor" />
          <rect x="4" y="16.5" width="2.5" height="2.5" rx=".75" fill="currentColor" />
        </svg>
      );
    case 'CSV Splitter':
      return (
        <svg {...iconProps}>
          <rect x="3.5" y="4.5" width="17" height="15" rx="2.25" stroke="currentColor" strokeWidth="1.7" />
          <path d="M3.5 9.5h17M9 4.5v15M15 4.5v7" stroke="currentColor" strokeWidth="1.7" />
          <path d="m13 15 2 2 2-2M15 12.5V17" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      );
    default:
      return null;
  }
};
