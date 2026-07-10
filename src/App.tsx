import { useEffect, useMemo, useRef, useState } from 'react';

import { ToolIcon } from './ToolIcon';
import { tools } from './tools';

const normalize = (value: string) => value.trim().toLowerCase();

const SearchIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true">
    <circle cx="10.75" cy="10.75" r="6.75" stroke="currentColor" strokeWidth="1.8" />
    <path d="m16 16 4 4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
  </svg>
);

const ArrowIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
    <path d="M7 17 17 7M8 7h9v9" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const App = () => {
  const [query, setQuery] = useState('');
  const searchRef = useRef<HTMLInputElement>(null);

  const filteredTools = useMemo(() => {
    const normalizedQuery = normalize(query);
    if (!normalizedQuery) return tools;

    return tools.filter((tool) =>
      normalize(`${tool.name} ${tool.description} ${tool.category}`).includes(normalizedQuery),
    );
  }, [query]);

  useEffect(() => {
    const handleShortcut = (event: KeyboardEvent) => {
      const target = event.target as HTMLElement;
      const isEditable = target.tagName === 'INPUT' || target.tagName === 'TEXTAREA' || target.isContentEditable;

      if (event.key === '/' && !isEditable) {
        event.preventDefault();
        searchRef.current?.focus();
      }

      if (event.key === 'Escape' && document.activeElement === searchRef.current) {
        if (query) {
          setQuery('');
          return;
        }

        searchRef.current?.blur();
      }
    };

    window.addEventListener('keydown', handleShortcut);
    return () => window.removeEventListener('keydown', handleShortcut);
  }, [query]);

  const resultLabel = query
    ? `${filteredTools.length} ${filteredTools.length === 1 ? 'match' : 'matches'}`
    : `${tools.length.toString().padStart(2, '0')} tools`;

  return (
    <main className="page-shell">
      <header className="topbar">
        <a className="brand" href="/" aria-label="DevDock home">
          <span className="brand-mark" aria-hidden="true">D/</span>
          <span>DevDock</span>
        </a>
        <div className="workspace-meta">
          <span className="status-dot" aria-hidden="true" />
          Team utility index
        </div>
      </header>

      <section className="intro" aria-labelledby="page-title">
        <div>
          <p className="eyebrow">Raw link index · v1.0</p>
          <h1 id="page-title">The shortest route{' '}<br />to your tools.</h1>
        </div>
        <p className="intro-copy">
          A focused launchpad for the small utilities that keep your team moving.
          Find what you need, then get back to the work.
        </p>
      </section>

      <section className="directory" aria-label="Developer tool directory">
        <div className="search-panel" role="search">
          <label htmlFor="tool-search" className="sr-only">Search tools</label>
          <span className="search-icon"><SearchIcon /></span>
          <input
            ref={searchRef}
            id="tool-search"
            type="search"
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            placeholder="Search by tool or task"
            autoComplete="off"
            aria-keyshortcuts="/"
          />
          {query ? (
            <button className="clear-button" type="button" onClick={() => setQuery('')}>
              Clear
            </button>
          ) : (
            <kbd aria-label="Keyboard shortcut: slash">/</kbd>
          )}
        </div>

        <div className="directory-heading">
          <h2>Docked tools</h2>
          <span aria-live="polite">{resultLabel}</span>
        </div>

        {filteredTools.length > 0 ? (
          <div className="tool-list">
            {filteredTools.map((tool, index) => (
              <a
                className="tool-item"
                href={tool.url}
                target="_blank"
                rel="noreferrer"
                aria-label={`Open tool ${tool.name}`}
                key={tool.url}
              >
                <span className="tool-number" aria-hidden="true">{String(index + 1).padStart(2, '0')}</span>
                <span className="tool-icon" role="img" aria-label={`${tool.name} icon`}>
                  <ToolIcon name={tool.name} />
                </span>
                <span className="tool-copy">
                  <strong>{tool.name}</strong>
                  <span>{tool.description}</span>
                </span>
                <span className="tool-category">{tool.category}</span>
                <span className="launch-icon" aria-hidden="true"><ArrowIcon /></span>
              </a>
            ))}
          </div>
        ) : (
          <div className="empty-state" aria-live="polite">
            <span className="empty-code">404 / NO MATCH</span>
            <h2>No tools match “{query}”</h2>
            <p>Try another term or reset the index to see every tool.</p>
            <button type="button" onClick={() => setQuery('')}>Reset search</button>
          </div>
        )}
      </section>

      <footer className="site-footer">
        <span>DevDock / Internal</span>
        <span>Four tools. Zero detours.</span>
      </footer>
    </main>
  );
};

export default App;
