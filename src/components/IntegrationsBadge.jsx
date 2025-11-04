import PropTypes from 'prop-types';

const statusCopy = {
  active: {
    label: 'Live API integration',
    tone: 'var(--primary)'
  },
  incubating: {
    label: 'API in progress',
    tone: '#f59e0b'
  },
  archived: {
    label: 'Archived project',
    tone: '#94a3b8'
  }
};

export default function IntegrationsBadge({ apiKey, status = 'active' }) {
  if (!apiKey && status === 'active') {
    status = 'incubating';
  }

  const copy = statusCopy[status] ?? statusCopy.active;

  return (
    <div
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        gap: '1rem',
        width: '100%',
        background: 'rgba(22, 36, 32, 0.85)',
        color: copy.tone,
        borderRadius: '1rem',
        border: `1px dashed ${copy.tone}`,
        padding: '0.65rem 0.9rem',
        fontSize: '0.85rem',
        letterSpacing: '0.08em',
        textTransform: 'uppercase'
      }}
    >
      <span>{copy.label}</span>
      <code style={{ fontFamily: 'monospace', fontSize: '0.75rem' }}>
        {apiKey ?? 'pending'}
      </code>
    </div>
  );
}

IntegrationsBadge.propTypes = {
  apiKey: PropTypes.string,
  status: PropTypes.oneOf(['active', 'incubating', 'archived'])
};
