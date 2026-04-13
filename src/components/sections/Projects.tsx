import { useState, useMemo } from 'react';
import { projects } from '../../data';
import SectionHeader from './SectionHeader';
import RepoCard from '../cards/RepoCard';
import WebsiteCard from '../cards/WebsiteCard';

const featured = projects.filter(p => p.featured);
const allTags = Array.from(new Set(projects.flatMap(p => p.tags))).sort();

export default function Projects() {
  const [activeTag, setActiveTag] = useState<string | null>(null);
  const [search, setSearch] = useState('');

  const filtered = useMemo(() => {
    return projects.filter(item => {
      if (activeTag && !item.tags.includes(activeTag)) return false;
      if (search) {
        const q = search.toLowerCase();
        return item.title.toLowerCase().includes(q) || item.description.toLowerCase().includes(q);
      }
      return true;
    });
  }, [activeTag, search]);

  return (
    <>
      {/* Featured */}
      <section className="featured-section">
        <SectionHeader label="Featured" />
        <div className="featured-grid">
          {featured.map(project => (
            project.type === 'Website'
              ? <WebsiteCard key={project.url} project={project} />
              : <RepoCard key={project.url} project={project} />
          ))}
        </div>
      </section>

      {/* All Projects */}
      <section className="projects-section">
        <SectionHeader label="Community Projects" />

        <div className="filters">
          <div className="filter-buttons-row">
            <button
              className={`filter-pill ${!activeTag ? 'active' : ''}`}
              onClick={() => setActiveTag(null)}
              aria-pressed={activeTag === null}
            >
              All
            </button>
            {allTags.map(tag => (
              <button
                key={tag}
                className={`filter-pill ${activeTag === tag ? 'active' : ''}`}
                onClick={() => setActiveTag(activeTag === tag ? null : tag)}
                aria-pressed={activeTag === tag}
              >
                {tag}
              </button>
            ))}
          </div>

          <input
            type="search"
            className="search-input"
            placeholder="Search projects..."
            value={search}
            onChange={e => setSearch(e.target.value)}
            aria-label="Search projects"
          />
        </div>

        <div className="project-grid">
          {filtered.map(project => (
            project.type === 'Website'
              ? <WebsiteCard key={project.url} project={project} />
              : <RepoCard key={project.url} project={project} />
          ))}
        </div>

        {filtered.length === 0 && (
          <p className="empty-state">No projects match your filters.</p>
        )}
      </section>
    </>
  );
}
