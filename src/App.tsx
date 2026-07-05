import { useState } from 'react';

import { tools } from './tools';

const normalize = (value: string) => value.trim().toLowerCase();

const ToolIcon = ({ name }: { name: string }) => {
  const commonProps = {
    width: 18,
    height: 18,
    viewBox: '0 0 24 24',
    fill: 'none',
    xmlns: 'http://www.w3.org/2000/svg',
    'aria-hidden': true,
  };

  switch (name) {
    case 'Planning Poker':
      return (
        <svg {...commonProps}>
          <rect x="5" y="7" width="9" height="12" rx="2" stroke="currentColor" strokeWidth="1.8" />
          <path d="M10 5.5h5.5a2 2 0 0 1 2 2V15" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
          <path d="M8.5 11h2M8.5 15h3" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
        </svg>
      );
    case 'Realm Manager':
      return (
        <svg {...commonProps}>
          <circle cx="12" cy="12" r="7" stroke="currentColor" strokeWidth="1.8" />
          <path d="M5 12h14M12 5a10 10 0 0 1 0 14M12 5a10 10 0 0 0 0 14" stroke="currentColor" strokeWidth="1.8" />
        </svg>
      );
    case 'Menu Visualizer':
      return (
        <svg {...commonProps}>
          <path d="M8 7h8M8 12h8M8 17h8" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
          <circle cx="5" cy="7" r="1.4" fill="currentColor" />
          <circle cx="5" cy="12" r="1.4" fill="currentColor" />
          <circle cx="5" cy="17" r="1.4" fill="currentColor" />
        </svg>
      );
    case 'CSV Splitter':
      return (
        <svg {...commonProps}>
          <rect x="4" y="5" width="16" height="14" rx="2" stroke="currentColor" strokeWidth="1.8" />
          <path d="M4 10h16M9 5v14M15 5v14" stroke="currentColor" strokeWidth="1.8" />
          <path d="M12 12.5v4M10.5 15l1.5 1.5 1.5-1.5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      );
    default:
      return null;
  }
};

const App = () => {
  const [query, setQuery] = useState('');

  const normalizedQuery = normalize(query);
  const filteredTools = normalizedQuery
    ? tools.filter((tool) => normalize(`${tool.name} ${tool.description}`).includes(normalizedQuery))
    : tools;

  return (
    <main className="page-shell">
      <header className="site-header">
        <div className="header-copy">
          <p className="eyebrow">Raw link index</p>
          <h1>DevDock</h1>
          <p>A minimalist link index for essential developer utilities.</p>
        </div>
      </header>

      <div className="command-palette">
        <section className="search-panel" aria-label="Find developer tools">
          <label htmlFor="tool-search" className="sr-only">
            Search tools
          </label>
          <div className="search-input-wrapper">
            <input
              id="tool-search"
              type="search"
              value={query}
              onChange={(event) => setQuery(event.target.value)}
              placeholder="Type to search tools..."
              autoComplete="off"
            />
          </div>
        </section>

        {filteredTools.length > 0 ? (
          <section className="tool-list" aria-label="Developer tools">
            {filteredTools.map((tool) => (
              <article className="tool-item" key={tool.url}>
                <div className="tool-item-left">
                  <span className="tool-icon" role="img" aria-label={`${tool.name} icon`}>
                    <ToolIcon name={tool.name} />
                  </span>
                  <div className="tool-copy">
                    <h2>{tool.name}</h2>
                    <p>{tool.description}</p>
                  </div>
                </div>
                <div className="tool-item-actions">
                  <a href={tool.url} target="_blank" rel="noreferrer" aria-label={`Open tool ${tool.name}`}>
                    <span className="arrow">↗</span>
                  </a>
                </div>
              </article>
            ))}
          </section>
        ) : (
          <section className="empty-state" aria-live="polite">
            <p>No tools match "{query}".</p>
            <button type="button" onClick={() => setQuery('')}>
              Clear search
            </button>
          </section>
        )}
      </div>
    </main>
  );
};

export default App;
