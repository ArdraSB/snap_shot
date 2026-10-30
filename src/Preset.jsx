
import './Preset.css';

// Add new presets here. Each object creates one reusable product card.
export const presets = [
  {
    id: 'golden-hour',
    name: 'Golden Hour',
    subtitle: 'Warm light, soft highlights',
    description:
      'A warm, sun-kissed look for golden-hour portraits, nature and everyday moments.',
    price: '₹199',
    image: '/presets/golden-hour.jpg',
    tag: 'WARM & GLOWING',
    includes: 'Lightroom mobile preset',
    checkoutUrl: 'https://YOUR-CHECKOUT-LINK-1',
  },
  {
    id: 'muted-mood',
    name: 'Muted Mood',
    subtitle: 'Soft, calm and understated',
    description:
      'Muted colours and a gentle mood for quiet scenes, travel frames and portraits.',
    price: '₹199',
    image: '/presets/muted-mood.jpg',
    tag: 'SOFT & MUTED',
    includes: 'Lightroom mobile preset',
    checkoutUrl: 'https://YOUR-CHECKOUT-LINK-2',
  },
  {
    id: 'soft-film',
    name: 'Soft Film',
    subtitle: 'A subtle film-inspired finish',
    description:
      'A soft, film-inspired starting point for photographs with a little nostalgia.',
    price: '₹199',
    image: '/presets/soft-film.jpg',
    tag: 'FILM INSPIRED',
    includes: 'Lightroom mobile preset',
    checkoutUrl: 'https://YOUR-CHECKOUT-LINK-3',
  },
];

function PresetCard({ preset, index }) {
  const hasCheckoutLink =
    preset.checkoutUrl &&
    !preset.checkoutUrl.includes('YOUR-CHECKOUT-LINK');

  return (
    <article className="preset-product-card">
      <div className="preset-product-image-wrap">
        <img
          className="preset-product-image"
          src={preset.image}
          alt={`${preset.name} preset preview`}
          loading="lazy"
        />

        <span className="preset-product-number">
          {String(index + 1).padStart(2, '0')}
        </span>

        <span className="preset-product-tag">
          {preset.tag}
        </span>
      </div>

      <div className="preset-product-content">
        <div className="preset-product-heading">
          <div>
            <h3>{preset.name}</h3>
            <p className="preset-product-subtitle">
              {preset.subtitle}
            </p>
          </div>

          <strong className="preset-product-price">
            {preset.price}
          </strong>
        </div>

        <p className="preset-product-description">
          {preset.description}
        </p>

        <div className="preset-product-meta">
          <span>{preset.includes}</span>
          <span>Digital download</span>
        </div>

        {hasCheckoutLink ? (
          <a
            className="preset-buy-button"
            href={preset.checkoutUrl}
            target="_blank"
            rel="noopener noreferrer"
          >
            Get this preset <span>↗</span>
          </a>
        ) : (
          <button
            className="preset-buy-button preset-buy-disabled"
            type="button"
            disabled
          >
            Add checkout link <span>↗</span>
          </button>
        )}
      </div>
    </article>
  );
}

export default function PresetPage({ onBack }) {
  return (
    <main className="snapshot-site preset-store-page">
      <header className="site-header">
        <button
          className="wordmark preset-wordmark"
          onClick={onBack}
          aria-label="Back to Snapshot portfolio"
        >
          <img
            className="wordmark-logo"
            src={`${import.meta.env.BASE_URL}watermark/site-logo.png`}
            alt="Snap-shot"
          />
        </button>

        <nav
          className="main-nav"
          aria-label="Preset page navigation"
        >
          <button onClick={onBack}>Portfolio</button>
          <a href="#preset-products">Shop presets</a>
          <a href="#preset-info">Details</a>
        </nav>

        <button
          className="outline-button header-cta"
          onClick={onBack}
        >
          Back to site <span>↗</span>
        </button>
      </header>

      <section className="preset-store-hero">
        <div className="preset-store-copy">
          <div className="eyebrow">
            <span /> THE SNAPSHOT EDIT / PRESET STORE
          </div>

          <h1>
            A little <em>preset magic.</em>
          </h1>

          <p>
            Editing tools inspired by the colours, light and
            little details I love. Find a look you like and
            make it your own.
          </p>

          <a
            className="outline-button"
            href="#preset-products"
          >
            Explore the collection <span>↓</span>
          </a>
        </div>

        <div className="preset-store-visual">
          <img
            src="/presets/preset-cover.jpg"
            alt="A sample photograph edited with Snap Shot presets"
          />
          <span className="preset-store-visual-caption">
            COLOUR · LIGHT · FEELING
          </span>
        </div>
      </section>

      <section
        className="preset-products-section section-rule"
        id="preset-products"
      >
        <div className="section-topline">
          <span>01 / THE COLLECTION</span>
          <span>{presets.length} EDITING PRESETS</span>
        </div>

        <div className="preset-products-heading">
          <h2>
            Find your <em>look.</em>
          </h2>
          <p>
            Choose a preset to explore. Your purchase is
            completed securely on the checkout platform.
          </p>
        </div>

        <div className="preset-products-grid">
          {presets.map((preset, index) => (
            <PresetCard
              key={preset.id}
              preset={preset}
              index={index}
            />
          ))}
        </div>
      </section>

      <section
        className="preset-info-section"
        id="preset-info"
      >
        <div>
          <div className="section-topline">
            <span>02 / BEFORE YOU BUY</span>
          </div>

          <h2>
            A starting point for <em>your style.</em>
          </h2>
        </div>

        <div className="preset-info-copy">
          <p>
            Presets are editing starting points, not one-click
            guarantees. Results can vary depending on lighting,
            camera and the original photograph.
          </p>

          <ul>
            <li>
              Check the product details and compatibility
              before purchasing.
            </li>
            <li>
              Download the files after checkout and follow
              the included installation guide.
            </li>
            <li>
              Adjust exposure, white balance and other
              settings to suit each photo.
            </li>
          </ul>
        </div>
      </section>

      <footer className="site-footer">
        <span>
          © {new Date().getFullYear()} SNAPSHOT. MADE WITH FEELING.
        </span>

        <button onClick={onBack}>
          BACK TO PORTFOLIO ↑
        </button>
      </footer>
    </main>
  );
}
