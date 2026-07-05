import { useState } from 'react';

import { tools } from './tools';

const normalize = (value: string) => value.trim().toLowerCase();

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
            {filteredTools.map((tool, index) => (
              <article className="tool-item" key={tool.url}>
                <div className="tool-item-left">
                  <span className="tool-index">{index + 1}</span>
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
