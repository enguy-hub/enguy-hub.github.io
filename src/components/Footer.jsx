const iconStyle = {
  width: '2.3rem',
  height: '2.3rem',
  borderRadius: '999px',
  display: 'inline-flex',
  alignItems: 'center',
  justifyContent: 'center',
  background: 'rgba(22, 36, 32, 0.85)',
  border: '1px solid var(--border)',
  color: 'var(--primary)'
};

const svgProps = {
  width: '18',
  height: '18',
  viewBox: '0 0 24 24',
  fill: 'currentColor',
  'aria-hidden': 'true'
};

function GitHubIcon() {
  return (
    <svg {...svgProps}>
      <path
        fillRule="evenodd"
        d="M12 .297a12 12 0 0 0-3.79 23.4c.6.11.82-.26.82-.58 0-.29-.01-1.06-.017-2.08-3.338.73-4.042-1.62-4.042-1.62-.546-1.39-1.333-1.76-1.333-1.76-1.09-.75.083-.73.083-.73 1.205.086 1.84 1.24 1.84 1.24 1.07 1.84 2.807 1.31 3.492 1 .108-.78.42-1.31.763-1.61-2.665-.3-5.466-1.34-5.466-5.94 0-1.31.468-2.39 1.236-3.23-.124-.3-.536-1.52.117-3.17 0 0 1.008-.32 3.3 1.23a11.5 11.5 0 0 1 3-.4 11.5 11.5 0 0 1 3 .4c2.29-1.55 3.296-1.23 3.296-1.23.655 1.65.243 2.87.12 3.17.77.84 1.233 1.92 1.233 3.23 0 4.61-2.807 5.64-5.48 5.94.43.38.823 1.11.823 2.23 0 1.61-.015 2.9-.015 3.29 0 .32.216.7.825.58A12 12 0 0 0 12 .297"
        clipRule="evenodd"
      />
    </svg>
  );
}

function LinkedInIcon() {
  return (
    <svg {...svgProps}>
      <path d="M20.447 20.452h-3.555v-5.57c0-1.33-.027-3.04-1.852-3.04-1.853 0-2.136 1.45-2.136 2.94v5.67H9.349V9h3.414v1.56h.05c.475-.9 1.636-1.85 3.37-1.85 3.6 0 4.267 2.37 4.267 5.45v6.29zM5.122 7.433c-1.144 0-2.07-.93-2.07-2.07 0-1.145.926-2.07 2.07-2.07 1.143 0 2.07.925 2.07 2.07 0 1.14-.927 2.07-2.07 2.07zM6.9 20.452H3.346V9H6.9v11.452z" />
    </svg>
  );
}

function ResearchGateIcon() {
  return (
    <svg {...svgProps}>
      <path d="M11.798 0C5.286 0 0 5.285 0 11.798c0 6.512 5.285 11.797 11.798 11.797 6.512 0 11.797-5.285 11.797-11.797C23.595 5.285 18.31 0 11.798 0zm6.553 17.106h-2.598l-1.39-2.397a1.89 1.89 0 0 0-.467-.532 2.276 2.276 0 0 0-.807-.48 2.785 2.785 0 0 0-.93-.15h-.893v3.559H8.624V6.544h4.514c.85 0 1.618.09 2.306.27.69.181 1.276.45 1.761.811.486.36.856.81 1.11 1.35.253.54.38 1.16.38 1.87 0 1.02-.27 1.87-.807 2.56-.537.69-1.323 1.18-2.36 1.47.28.12.54.31.78.568.24.257.47.58.69.97l1.953 3.764zm-4.399-6.75c.393-.327.59-.8.59-1.426 0-.64-.196-1.12-.59-1.442-.39-.322-.94-.483-1.64-.483h-1.44v3.822h1.44c.702 0 1.252-.163 1.64-.47z" />
    </svg>
  );
}

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const iconLinks = [
    {
      href: 'https://github.com/enguy-hub',
      ariaLabel: 'GitHub profile',
      Icon: GitHubIcon
    },
    {
      href: 'https://www.linkedin.com/in/hien-nguyen--/',
      ariaLabel: 'LinkedIn profile',
      Icon: LinkedInIcon
    },
    {
      href: 'https://www.researchgate.net/profile/Hien-Nguyen-153',
      ariaLabel: 'ResearchGate profile',
      Icon: ResearchGateIcon
    }
  ];

  return (
    <footer>
      <span>
        © {currentYear} enguy-hub |{' '}
        <a href="http://creativecommons.org/licenses/by/3.0/" target="_blank" rel="noreferrer">
          CC BY 3.0
        </a>
      </span>
      <span style={{ color: 'var(--fg-muted)' }}>
        Built with{' '}
        <a href="https://astro.build" target="_blank" rel="noreferrer">
          Astro
        </a>
      </span>
      <div style={{ display: 'flex', gap: '0.9rem', flexWrap: 'wrap' }}>
        {iconLinks.map(({ href, ariaLabel, Icon }) => (
          <a
            key={href}
            href={href}
            aria-label={ariaLabel}
            title={ariaLabel}
            style={iconStyle}
            target="_blank"
            rel="noreferrer"
          >
            <Icon />
          </a>
        ))}
      </div>
    </footer>
  );
}
