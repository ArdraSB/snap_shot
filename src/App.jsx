import { useEffect, useMemo, useState } from 'react';
import './App.css';

// Keep these paths aligned with the images in your public folder.
// Example: public/gallery/photo-01.jpg -> /gallery/photo-01.jpg
const photos = [
  { category: 'Travel', image: '/gallery/photo-01.jpg', alt: 'Sunset glowing over rippled ocean water' },
  { category: 'Ads', image: '/gallery/photo-02.jpg', alt: 'Vehicle photographed outdoors' },
  { category: 'Nature', image: '/gallery/photo-03.jpg', alt: 'White water lily among green leaves' },
  { category: 'Ads', image: '/gallery/photo-04.jpg', alt: 'Plants and product styling' },
  { category: 'Nature', image: '/gallery/photo-05.jpg', alt: 'Aquatic plants and fish' },
  { category: 'Ads', image: '/gallery/photo-06.jpg', alt: 'Car photographed under evening lights' },
  { category: 'Travel', image: '/gallery/photo-07.jpg', alt: 'Calm blue water and a fishing structure' },
  { category: 'Travel', image: '/gallery/photo-08.jpg', alt: 'Waterfall in a green landscape' },
  { category: 'Travel', image: '/gallery/photo-09.jpg', alt: 'Quiet beach at sunset' },
  { category: 'Nature', image: '/gallery/photo-10.jpg', alt: 'Purple flowers among green leaves' },
  { category: 'Nature', image: '/gallery/photo-11.jpg', alt: 'Yellow rose in a garden' },
  { category: 'Nature', image: '/gallery/photo-12.jpg', alt: 'Warm flame in the dark' },
  { category: 'Nature', image: '/gallery/photo-13.jpg', alt: 'Leaf covered in water droplets' },
  { category: 'Nature', image: '/gallery/photo-14.jpg', alt: 'Bright green leaf with droplets' },
  { category: 'Nature', image: '/gallery/photo-15.jpg', alt: 'Small flame glowing in the dark' },
  { category: 'Travel', image: '/gallery/photo-16.jpg', alt: 'Sunset over the ocean' },
  { category: 'Travel', image: '/gallery/photo-17.jpg', alt: 'Boat in a green mangrove channel' },
  { category: 'Nature', image: '/gallery/photo-18.jpg', alt: 'Monochrome rose' },
  { category: 'Nature', image: '/gallery/photo-19.jpg', alt: 'White flower surrounded by leaves' },
  { category: 'Nature', image: '/gallery/photo-20.jpg', alt: 'Pink flower in a garden' },
  { category: 'Nature', image: '/gallery/photo-21.jpg', alt: 'Fish among underwater plants' },
  { category: 'Nature', image: '/gallery/photo-22.jpg', alt: 'Close-up of a pink lily' },
  { category: 'Nature', image: '/gallery/photo-23.jpg', alt: 'Flower silhouetted against a soft sky' },
  { category: 'Nature', image: '/gallery/photo-24.jpg', alt: 'Pink flower against a dark background' },
  { category: 'Ads', image: '/gallery/photo-25.jpg', alt: 'Cosmetic bottles in a product setup' },
  { category: 'Travel', image: '/gallery/photo-26.jpg', alt: 'Ornate building under a blue sky' },
  { category: 'Nature', image: '/gallery/photo-27.jpg', alt: 'Yellow flower in a green field' },
  { category: 'Nature', image: '/gallery/photo-28.jpg', alt: 'Butterfly among green leaves' },
  { category: 'Nature', image: '/gallery/photo-29.jpg', alt: 'Butterfly among orange flowers' },
  { category: 'Nature', image: '/gallery/photo-30.jpg', alt: 'Butterfly among pink flowers' },
  { category: 'Travel', image: '/gallery/photo-31.jpg', alt: 'Silhouettes on a beach at sunset' },
  { category: 'Travel', image: '/gallery/photo-32.jpg', alt: 'People walking along the shore at dusk' },
  { category: 'Nature', image: '/gallery/photo-33.jpg', alt: 'Fish swimming among aquatic plants' },
];

// Replace these example links with your real profile/contact links.
const links = {
  instagram: 'https://www.instagram.com/_snap._.shot/',
  youtube: 'https://www.youtube.com/@snap_shot_edits',
  gumroad: 'https://YOURNAME.gumroad.com/',
  whatsapp: 'https://wa.me/7907008629',
  email: 'mailto:shajardra15@gmail.com',
};

function SocialIcon({ type }) {
  if (type === 'instagram') return <svg viewBox="0 0 24 24" aria-hidden="true"><rect x="3" y="3" width="18" height="18" rx="5" /><circle cx="12" cy="12" r="4" /><circle cx="17.5" cy="6.5" r="1" className="filled" /></svg>;
  if (type === 'youtube') return <svg viewBox="0 0 24 24" aria-hidden="true"><rect x="2.5" y="5" width="19" height="14" rx="4" /><path d="m10 9 5 3-5 3Z" className="filled" /></svg>;
  if (type === 'whatsapp') return <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M20.3 11.8a8.2 8.2 0 0 1-12.1 7.1L3 20l1.2-5a8.2 8.2 0 1 1 16.1-3.2Z" /><path d="M8.6 7.8c.2-.4.4-.4.7-.4h.5c.2 0 .3.1.4.4l.7 1.7c.1.2 0 .4-.1.6l-.5.6c-.2.2-.2.3 0 .6.6 1 1.4 1.7 2.4 2.2.3.1.4.1.6-.1l.8-.9c.2-.2.4-.2.6-.1l1.6.8c.3.2.3.3.3.5 0 .5-.3 1.2-.7 1.5-.4.4-1.1.7-1.8.6-1-.1-2.2-.7-3.4-1.7-1.4-1.2-2.3-2.7-2.6-3.7-.3-.9-.1-1.8.5-2.6Z" /></svg>;
  return <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M4 12h16M13 5l7 7-7 7" /></svg>;
}

function SocialLink({ type, href, label }) {
  return <a className="social-icon" href={href} aria-label={label} title={label} target="_blank" rel="noreferrer"><SocialIcon type={type} /></a>;
}

export default function App() {
  const [category, setCategory] = useState('All');
  const [selectedPhoto, setSelectedPhoto] = useState(null);
  const [lightboxPhotos, setLightboxPhotos] = useState(photos);
  const [wallpaperIndex, setWallpaperIndex] = useState(0);

  const filteredPhotos = useMemo(
    () => category === 'All' ? photos : photos.filter((photo) => photo.category === category),
    [category]
  );
  const wallpapers = [photos[0], photos[19], photos[13], photos[30], photos[28]];
  const brandPhotos = [photos[24], photos[5], photos[3], photos[1]];
  const showPhoto = (photo, collection = photos) => {
    setLightboxPhotos(collection);
    setSelectedPhoto(photo);
  };

  useEffect(() => {
    // Discourage casual saving: disable right-click/context menus on the page.
    const stopContextMenu = (event) => event.preventDefault();
    const stopImageDrag = (event) => {
      if (event.target instanceof HTMLImageElement) event.preventDefault();
    };
    document.addEventListener('contextmenu', stopContextMenu);
    document.addEventListener('dragstart', stopImageDrag);
    const onKeyDown = (event) => {
      if (event.key === 'Escape') setSelectedPhoto(null);
      if (selectedPhoto && event.key === 'ArrowRight') {
        const index = lightboxPhotos.findIndex((photo) => photo.image === selectedPhoto.image);
        setSelectedPhoto(lightboxPhotos[(index + 1) % lightboxPhotos.length]);
      }
      if (selectedPhoto && event.key === 'ArrowLeft') {
        const index = lightboxPhotos.findIndex((photo) => photo.image === selectedPhoto.image);
        setSelectedPhoto(lightboxPhotos[(index - 1 + lightboxPhotos.length) % lightboxPhotos.length]);
      }
    };
    window.addEventListener('keydown', onKeyDown);
    return () => {
      document.removeEventListener('contextmenu', stopContextMenu);
      document.removeEventListener('dragstart', stopImageDrag);
      window.removeEventListener('keydown', onKeyDown);
    };
  }, [selectedPhoto, lightboxPhotos]);

  useEffect(() => {
    document.body.style.overflow = selectedPhoto ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [selectedPhoto]);

  return (
    <main className="snapshot-site" id="top">
      <header className="site-header">
        <a className="wordmark" href="#top" aria-label="Snap-shot home">
          <img className="wordmark-logo" src="/watermark/site-logo.png" alt="Snap-shot" />
        </a>
        <nav className="main-nav">
          <a href="#gallery">Gallery</a><a href="#brand">Brand work</a><a href="#wallpapers">Wallpapers</a><a href="#presets">Presets</a><a href="#contact">Contact</a>
        </nav>
        <a className="outline-button header-cta" href={links.instagram} target="_blank" rel="noreferrer">Let's connect <span>↗</span></a>
      </header>

      <section className="hero">
        <div className="hero-copy">
          <div className="eyebrow"><span /> VISUAL JOURNAL / 001</div>
          <h1>Moments<br />That Tell <em>Stories</em></h1>
          <p>Hi, I'm a photographer & visual creator, capturing nature's beauty, travel stories and brand moments that inspire.</p>
          <div className="hero-socials">
            <SocialLink type="youtube" href={links.youtube} label="YouTube" />
            <SocialLink type="instagram" href={links.instagram} label="Instagram" />
            <SocialLink type="whatsapp" href={links.whatsapp} label="WhatsApp" />
            <a className="mini-social" href={links.gumroad} target="_blank" rel="noreferrer">Presets store</a>
          </div>
          {/* <a className="text-link" href="#gallery"><span className="round-arrow">↘</span> Explore my work</a> */}
        </div>
        <div className="hero-art" aria-label="Featured photography">
          <div className="hero-card card-back card-back-left"><img src={photos[7].image} alt={photos[7].alt} /></div>
          <div className="hero-card card-back card-back-right"><img src={photos[8].image} alt={photos[8].alt} /></div>
          <button className="hero-card card-front" onClick={() => showPhoto(photos[22])} aria-label="View featured sunset photograph"><img src={photos[22].image} alt={photos[22].alt} /></button>
          {/* <div className="hero-art-note">Chasing light<br /><em>and little things.</em></div> */}
        </div>
      </section>

      <section className="gallery-section section-rule" id="gallery">
        <div className="section-topline"><span>01 / SELECTED FRAMES</span><span>SHOT WITH CURIOSITY</span></div>
        <div className="section-heading-row">
          <h2>My <em>Gallery</em></h2>
          <div className="filters" aria-label="Filter gallery">
            {['All', 'Ads', 'Nature', 'Travel'].map((item) => <button key={item} className={category === item ? 'filter active' : 'filter'} onClick={() => setCategory(item)}>{item}</button>)}
            <button className="filter shuffle" onClick={() => { setCategory('All'); showPhoto(photos[Math.floor(Math.random() * photos.length)]); }}>↗ Shuffle</button>
          </div>
        </div>
        <div className="gallery-grid">
          {filteredPhotos.map((photo, index) => <button className={`gallery-tile tile-${index % 8}`} key={photo.image} onClick={() => showPhoto(photo)} aria-label={`Open ${photo.alt}`}>
            <img src={photo.image} alt={photo.alt} loading="lazy" />
            <span className="tile-overlay"><span>{photo.category}</span><b>↗</b></span>
          </button>)}
        </div>
      </section>

      <section className="brand-section section-rule" id="brand">
        <div className="brand-copy">
          <div className="section-topline"><span>02 / MADE FOR BRANDS</span></div>
          <h2>Brand <em>Work</em></h2>
          <p>Creating visual stories that make products stand out. Real product shots to campaign imagery, every frame is crafted with purpose.</p>
          <a className="outline-button" href="#gallery" onClick={() => setCategory('Ads')}>View my portfolio <span>↗</span></a>
        </div>
        <div className="brand-strip">
          {brandPhotos.map((photo) => <button className="brand-tile" key={photo.image} onClick={() => showPhoto(photo, brandPhotos)}><img src={photo.image} alt={photo.alt} loading="lazy" /></button>)}
        </div>
      </section>

      <section className="wallpaper-section section-rule" id="wallpapers">
        <div className="wallpaper-heading">
          <div className="section-topline"><span>03 / TAKE A LITTLE BEAUTY WITH YOU</span></div>
          <h2>Mobile <em>Wallpapers</em></h2>
          <p>Handpicked wallpapers for your screens.<br />Available for free download.</p>
          {/* <a className="outline-button" href="#gallery">View all <span>↗</span></a> */}
        </div>
        <div className="wallpaper-carousel">
          <button className="carousel-arrow" onClick={() => setWallpaperIndex((wallpaperIndex - 1 + wallpapers.length) % wallpapers.length)} aria-label="Previous wallpaper">‹</button>
          <div className="wallpaper-cards">
            {[-1, 0, 1].map((offset) => {
              const photo = wallpapers[(wallpaperIndex + offset + wallpapers.length) % wallpapers.length];
              return <button key={`${photo.image}-${offset}`} className={`wallpaper-card wallpaper-offset-${offset}`} onClick={() => showPhoto(photo, wallpapers)} aria-label={`View wallpaper: ${photo.alt}`}><img src={photo.image} alt={photo.alt} loading="lazy" /><span>SNAPSHOT · WALLPAPER</span></button>;
            })}
          </div>
          <button className="carousel-arrow" onClick={() => setWallpaperIndex((wallpaperIndex + 1) % wallpapers.length)} aria-label="Next wallpaper">›</button>
        </div>
      </section>

      <section className="presets-section" id="presets">
        <div className="contact-landscape"><img src={photos[15].image} alt="" loading="lazy" /></div>
        <div className="presets-copy">
          <div className="section-topline"><span>04 / MY EDITING LOOK</span></div>
          <h2>Bring the mood <em>to your photos</em></h2>
          <p>Get the presets I use to shape my signature colors and create a consistent look for your own photos.</p>
          <a className="outline-button" href={links.gumroad} target="_blank" rel="noreferrer">Explore my presets <span>↗</span></a>
        </div>
      </section>

      <section className="contact-section" id="contact">
        <div className="contact-landscape"><img src={photos[7].image} alt="" loading="lazy" /></div>
        <div className="contact-copy">
          <div className="section-topline"><span>05 / LET'S MAKE SOMETHING</span></div>
          <h2>Let's Create<br /><em>Something Amazing</em></h2>
          <p>For freelance editing, brand photography or just to say hello.</p>
          <a className="outline-button" href={links.whatsapp} target="_blank" rel="noreferrer">Get in touch <span>↗</span></a>
        </div>
        <div className="contact-links">
          <span className="contact-label">FOLLOW MY JOURNEY</span>
          <div className="footer-socials">
            <SocialLink type="instagram" href={links.instagram} label="Instagram" />
            <SocialLink type="youtube" href={links.youtube} label="YouTube" />
            <SocialLink type="whatsapp" href={links.whatsapp} label="WhatsApp" />
            <a className="social-icon text-social" href={links.gumroad} target="_blank" rel="noreferrer" aria-label="Gumroad">G</a>
          </div>
          <div className="footer-nav"><a href="#gallery">Photography</a><a href="#brand">Editing</a><a href={links.gumroad} target="_blank" rel="noreferrer">Presets</a><a href="#contact">Contact</a></div>
        </div>
      </section>

      <footer className="site-footer"><span>© {new Date().getFullYear()} SNAPSHOT. MADE WITH FEELING.</span><a href="#top">BACK TO TOP ↑</a></footer>

      {selectedPhoto && <div className="lightbox" role="dialog" aria-modal="true" aria-label="Photo viewer" onClick={() => setSelectedPhoto(null)}>
        <button className="lightbox-close" onClick={() => setSelectedPhoto(null)} aria-label="Close photo">×</button>
        <button className="lightbox-arrow" onClick={(event) => { event.stopPropagation(); const index = lightboxPhotos.findIndex((p) => p.image === selectedPhoto.image); setSelectedPhoto(lightboxPhotos[(index - 1 + lightboxPhotos.length) % lightboxPhotos.length]); }} aria-label="Previous photo">‹</button>
        <figure onClick={(event) => event.stopPropagation()}><img src={selectedPhoto.image} alt={selectedPhoto.alt} /><figcaption>{selectedPhoto.category}<span>SNAPSHOT / VISUAL DIARY</span></figcaption></figure>
        <button className="lightbox-arrow" onClick={(event) => { event.stopPropagation(); const index = lightboxPhotos.findIndex((p) => p.image === selectedPhoto.image); setSelectedPhoto(lightboxPhotos[(index + 1) % lightboxPhotos.length]); }} aria-label="Next photo">›</button>
      </div>}
    </main>
  );
}
