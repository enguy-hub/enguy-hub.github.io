import PropTypes from 'prop-types';

const links = [
  { href: '/projects', label: 'Projects' },
  { href: '/blogs', label: 'Blogs' },
  { href: '/research', label: 'Research' }
];

export default function Header({ title = 'HiEN' }) {
  return (
    <header className="site-header">
      <a href="/" className="site-brand">
        <img src="/images/logo.png" alt="HiEN logo" className="site-logo" />
        <span className="site-title">{title}</span>
      </a>
      <nav className="site-nav">
        {links.map((link) => (
          <a key={link.href} href={link.href}>
            {link.label}
          </a>
        ))}
      </nav>
    </header>
  );
}

Header.propTypes = {
  title: PropTypes.string
};
