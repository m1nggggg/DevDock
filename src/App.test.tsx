import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { describe, expect, it } from 'vitest';

import App from './App';

describe('DevDock', () => {
  it('renders the current developer tools as external links', () => {
    render(<App />);

    expect(screen.getByRole('heading', { name: /devdock/i })).toBeInTheDocument();
    expect(screen.getByText(/raw link index/i)).toBeInTheDocument();
    expect(screen.getByRole('link', { name: /open tool planning poker/i })).toHaveAttribute(
      'href',
      'https://poker-pi-eosin.vercel.app/',
    );
    expect(screen.getByRole('link', { name: /open tool csv splitter/i })).toHaveAttribute(
      'href',
      'https://csv-splitter-woad.vercel.app/',
    );
    expect(screen.getByRole('link', { name: /open tool realm manager/i })).toHaveAttribute(
      'href',
      'https://realm-manager.vercel.app/',
    );
    expect(screen.getByRole('link', { name: /open tool menu visualizer/i })).toHaveAttribute(
      'href',
      'https://menu-visualizer-six.vercel.app/',
    );
  });

  it('uses related tool icons instead of numeric badges', () => {
    render(<App />);

    expect(screen.getByLabelText(/planning poker icon/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/realm manager icon/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/menu visualizer icon/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/csv splitter icon/i)).toBeInTheDocument();

    expect(screen.queryByText('1')).not.toBeInTheDocument();
    expect(screen.queryByText('2')).not.toBeInTheDocument();
    expect(screen.queryByText('3')).not.toBeInTheDocument();
    expect(screen.queryByText('4')).not.toBeInTheDocument();
  });

  it('filters tools by name and description', async () => {
    const user = userEvent.setup();
    render(<App />);

    await user.type(screen.getByRole('searchbox', { name: /search tools/i }), 'realm');

    expect(screen.getByText('Realm Manager')).toBeInTheDocument();
    expect(screen.queryByText(/tool shown/i)).not.toBeInTheDocument();
    expect(screen.queryByText('Planning Poker')).not.toBeInTheDocument();

    await user.clear(screen.getByRole('searchbox', { name: /search tools/i }));
    await user.type(screen.getByRole('searchbox', { name: /search tools/i }), 'large CSV files');

    expect(screen.getByText('CSV Splitter')).toBeInTheDocument();
    expect(screen.queryByText('Planning Poker')).not.toBeInTheDocument();
  });

  it('shows a helpful empty state when no tools match', async () => {
    const user = userEvent.setup();
    render(<App />);

    await user.type(screen.getByRole('searchbox', { name: /search tools/i }), 'not-a-tool');

    expect(screen.getByText(/no tools match/i)).toBeInTheDocument();
  });
});
