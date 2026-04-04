import './globals.css';
import Link from 'next/link';

export const metadata = {
  title: 'Monu | Commodity Markets Analysis',
  description: 'Independent commodity research and market insights on energy, agriculture, and global trade flows.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {/* NAV */}
        <nav className="nav">
          <div className="nav-inner">
            <Link href="/" className="logo">
              Monu<span className="logo-dot">.</span>
            </Link>
            <ul className="nav-links">
              <li><Link href="/research" className="nav-link">Research</Link></li>
              <li><Link href="/about" className="nav-link">About</Link></li>
              <li><Link href="/contact" className="nav-link">Contact</Link></li>
            </ul>
          </div>
        </nav>

        {children}

        {/* FOOTER */}
        <footer className="footer">
          <span className="footer-text">&copy; 2026 Monu. All rights reserved.</span>
          <div className="footer-links">
            <a href="https://linkedin.com" target="_blank" rel="noopener">LinkedIn</a>
            <a href="mailto:monuchouhan833@gmail.com">Email</a>
          </div>
        </footer>
      </body>
    </html>
  );
}
