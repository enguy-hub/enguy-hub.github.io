import PropTypes from 'prop-types';
import IntegrationsBadge from './IntegrationsBadge.jsx';

export default function ProjectCard({ project }) {
  const {
    title,
    summary,
    tags = [],
    repo,
    liveUrl,
    apiKey,
    status = 'active'
  } = project;

  return (
    <article
      style={{
        border: '1px solid var(--border)',
        borderRadius: '1.6rem',
        padding: '2rem',
        background: 'rgba(22, 36, 32, 0.9)',
        boxShadow: 'inset 0 0 35px rgba(18, 43, 34, 0.45)',
        display: 'flex',
        flexDirection: 'column',
        gap: '1.15rem',
        minHeight: '100%',
        color: 'var(--fg)'
      }}
    >
      <header>
        <h3 style={{ margin: 0, fontSize: '1.32rem', lineHeight: 1.4 }}>{title}</h3>
        <p style={{ margin: '0.55rem 0 0', color: 'var(--fg-muted)', fontSize: '0.98rem' }}>{summary}</p>
      </header>

      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
        {tags.map((tag) => (
          <span
            key={tag}
            className="pill"
            style={{
              background: 'rgba(127, 185, 141, 0.16)',
              color: 'var(--primary-strong)'
            }}
          >
            {tag}
          </span>
        ))}
      </div>

      <div
        style={{
          display: 'flex',
          gap: '1rem',
          marginTop: 'auto',
          fontWeight: 500,
          flexWrap: 'wrap'
        }}
      >
        {liveUrl && (
          <a href={liveUrl} target="_blank" rel="noreferrer" style={{ color: 'var(--accent)' }}>
            Live demo →
          </a>
        )}
        {repo && (
          <a href={repo} target="_blank" rel="noreferrer" style={{ color: 'var(--primary)' }}>
            Source code →
          </a>
        )}
      </div>

      <IntegrationsBadge apiKey={apiKey} status={status} />
    </article>
  );
}

ProjectCard.propTypes = {
  project: PropTypes.shape({
    title: PropTypes.string.isRequired,
    summary: PropTypes.string.isRequired,
    slug: PropTypes.string,
    tags: PropTypes.arrayOf(PropTypes.string),
    repo: PropTypes.string,
    liveUrl: PropTypes.string,
    apiKey: PropTypes.string,
    status: PropTypes.oneOf(['active', 'incubating', 'archived'])
  }).isRequired
};
