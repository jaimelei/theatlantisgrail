import { ArrowRight } from 'lucide-react';
import { FaGoodreadsG, FaInstagram, FaYoutube, FaDiscord, FaFacebookF } from 'react-icons/fa';

export default function Footer() {
  const quickLinks = [
    { label: 'Home', href: '/' },
    { label: 'Books', href: '/books' },
    { label: 'News', href: '/news' },
    { label: 'Community', href: '/community' },
    { label: 'About', href: '/about' },
  ];

  // Real social links, pulled from theatlantisgrail.com
  const socialLinks = [
    { label: 'Goodreads', Icon: FaGoodreadsG, url: 'https://www.goodreads.com/author/show/186145.Vera_Nazarian' },
    { label: 'Instagram', Icon: FaInstagram, url: 'https://www.instagram.com/vera_nazarian/' },
    { label: 'YouTube', Icon: FaYoutube, url: 'https://www.youtube.com/channel/UCG-CNPrVu9GFDlBDD5w2w-Q' },
    { label: 'Discord', Icon: FaDiscord, url: 'https://discord.gg/8zPBzumqsM' },
    { label: 'Facebook', Icon: FaFacebookF, url: 'https://www.facebook.com/AtlantisGrail' },
  ];

  return (
    <footer className="relative px-6 py-10 overflow-hidden border-t border-gold-400/20 bg-cosmos-950">
      {/* faint corona, echoes the hero without competing with it */}
      <div
        className="pointer-events-none absolute -top-32 left-1/2 h-64 w-[40rem] -translate-x-1/2 rounded-full opacity-[0.07] blur-3xl"
        style={{ background: 'radial-gradient(circle, #D4AF37 0%, transparent 70%)' }}
        aria-hidden="true"
      />

      <div className="relative mx-auto max-w-7xl">
        <div className="grid grid-cols-1 gap-8 pb-6 border-b md:grid-cols-12 md:gap-6 border-gold-400/10">
          {/* Column 1: Wordmark & Info */}
          <div className="md:col-span-5">
            <h2 className="mb-2 text-lg tracking-wide font-cinzel text-gold-400">
              THE ATLANTIS GRAIL
            </h2>
            <p className="mb-1.5 text-sm font-inter text-parchment-300">by Vera Nazarian</p>
            <p className="max-w-sm text-sm leading-relaxed font-inter text-parchment-400">
              Epic science fiction series spanning galaxies and destinies.
            </p>
          </div>

          {/* Column 2: Quick Links */}
          <div className="md:col-span-3">
            <h3 className="mb-3 text-xs tracking-[0.2em] uppercase font-cinzel text-parchment-200">
              Navigation
            </h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-sm transition-colors font-inter text-parchment-300 hover:text-gold-400"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Newsletter */}
          <div className="md:col-span-4">
            <h3 className="mb-3 text-xs tracking-[0.2em] uppercase font-cinzel text-parchment-200">
              Never miss a release
            </h3>
            <p className="mb-3 text-sm font-inter text-parchment-400">
              New books and announcements, straight to your inbox.
            </p>

            <div className="flex gap-2">
              <label htmlFor="footer-email" className="sr-only">
                Email address
              </label>
              <input
                id="footer-email"
                type="email"
                disabled
                placeholder="Your email address"
                className="flex-1 min-w-0 px-4 py-2 text-sm bg-white border rounded-md cursor-not-allowed border-cosmos-200 text-cosmos-950 placeholder-cosmos-400 font-inter"
              />
              <button
                type="button"
                disabled
                aria-label="Subscribe"
                className="inline-flex items-center justify-center px-4 py-2 font-semibold rounded-md cursor-not-allowed shrink-0 bg-gold-400 text-cosmos-950"
              >
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>

        {/* Bottom bar: social + legal */}
        <div className="flex flex-col items-center gap-4 pt-5 md:flex-row md:justify-between">
          <p className="order-2 text-xs font-inter text-parchment-400 md:order-1">
            © 2026 Vera Nazarian. All rights reserved.
          </p>

          <div className="flex order-1 gap-3 md:order-2">
            {socialLinks.map((social) => (
              <a
                key={social.label}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={social.label}
                title={social.label}
                className="inline-flex items-center justify-center w-8 h-8 transition-all border rounded-full bg-cosmos-900 border-gold-400/20 text-parchment-300 hover:border-gold-400 hover:text-gold-400"
              >
                <social.Icon className="w-3.5 h-3.5" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}