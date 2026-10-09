
import { useState } from 'react'
import './App.css'

const memories = {
  cutest: {
    title: 'Cutest Pictures',
    subtitle: 'The pictures that make my heart smile.',
    photos: [
      { file: 'cute1.jpg', caption: 'That adorable smile ♡', date: 'A little moment' },
      { file: 'cute2.jpg', caption: 'My pretty girl 🌷', date: 'One of my favourites' },
      { file: 'cute3.jpg', caption: 'Too cute to handle', date: 'Forever saved' },
      { file: 'cute4.jpg', caption: 'Just you being you ♡', date: 'A precious memory' },
    ],
  },
  places: {
    title: 'Places We Have Gone',
    subtitle: 'Every place is special when I am there with you.',
    photos: [],
  },
  favourites: {
    title: 'My Favourites',
    subtitle: 'Little things about you that I could never get over.',
    photos: [
      { file: 'smile-new.jpg', caption: 'Your beautiful smile', date: 'My favourite view' },
      { file: 'fav2.jpg', caption: 'Your laugh ♡', date: 'Instant happiness' },
      { file: 'fav3.jpg', caption: 'The way you look at me', date: 'Heart = gone' },
      { file: 'fav4.jpg', caption: 'Simply being Swati', date: 'Perfect as you are' },
    ],
  },
  together: {
    title: 'Us, Together',
    subtitle: 'Two people, a thousand little memories.',
    photos: [
      { file: 'us1.jpg', caption: 'Just us ♡', date: 'A memory to keep' },
      { file: 'us2.jpg', caption: 'My favourite company', date: 'Together is better' },
      { file: 'us3.jpg', caption: 'One for the album', date: 'Us, always' },
      { file: 'us4.jpg', caption: 'Our little world', date: 'And many more to come' },
    ],
  },
}

// Replace these examples with the real places you visited together.
const places = [
{
name: "Our Usual Place",
note: "Sector 61 · Our everyday little moments ♡",
address: "Sector 61, Noida, Uttar Pradesh"
},
{
name: "Our First Movie",
note: "Modi Mall · One of our first special dates ♡",
address: "Modi Mall, Ghaziabad, Uttar Pradesh"
},
{
name: "Our Cafe Date",
note: "Xero Degrees · Sector 18 ♡",
address: "Xero Degrees, Sector 18, Noida, Uttar Pradesh"
},
{
name: "Another Cafe Memory",
note: "The Cafe Artist · Sector 18 ♡",
address: "The Cafe Artist, Sector 18, Noida, Uttar Pradesh"
}
];




function PhotoCard({ photo, index }) {
  const [imageFailed, setImageFailed] = useState(false)
  const [isOpen, setIsOpen] = useState(false)

  return (
    <>
      <article className="photo-card">
        <div className={`photo-frame photo-tone-${index % 4}`}>
          {!imageFailed && (
            <img
              src={`/${photo.file}`}
              alt={photo.caption}
              onClick={() => setIsOpen(true)}
              onError={() => setImageFailed(true)}
              style={{ cursor: 'zoom-in' }}
            />
          )}

          {imageFailed && (
            <div className="photo-placeholder">
              <span>♡</span>
              <small>Add your photo</small>
              <code>{photo.file}</code>
            </div>
          )}

          <span className="photo-heart">♡</span>
        </div>

        <div className="photo-caption">
          <h3>{photo.caption}</h3>
          <p>{photo.date}</p>
        </div>
      </article>

      {isOpen && (
        <div
          className="photo-lightbox"
          onClick={() => setIsOpen(false)}
        >
          <button
            className="lightbox-close"
            onClick={() => setIsOpen(false)}
            aria-label="Close photo"
          >
            ✕
          </button>

          <img
            src={`/${photo.file}`}
            alt={photo.caption}
            onClick={(e) => e.stopPropagation()}
          />

          <p>{photo.caption}</p>
        </div>
      )}
    </>
  )
}

function App() {
  const [screen, setScreen] = useState('note')
  const [password, setPassword] = useState('')
  const [error, setError] = useState(false)
  const [section, setSection] = useState('home')
  const [category, setCategory] = useState('cutest')
  const [letterOpen, setLetterOpen] = useState(false)
  const [songPlaying, setSongPlaying] = useState(false)

  function unlockWebsite(e) {
    e.preventDefault()

    if (password.trim() === '9/10/2025') {
      setScreen('home')
      setError(false)
    } else {
      setError(true)
    }
  }

  function navigate(nextSection) {
    setSection(nextSection)
    if (nextSection === 'memories') setCategory('cutest')
  }

  return (
    <main className="page">
      <div className="ambient ambient-one" />
      <div className="ambient ambient-two" />
      <div className="decor decor-one">✿</div>
      <div className="decor decor-two">🌸</div>
      <div className="decor decor-three">♡</div>
      <div className="decor decor-four">🌷</div>

      {screen === 'note' && (
        <section className="letter-card">
          <div className="seal">💌</div>
          <p className="eyebrow">A LITTLE NOTE FOR YOU</p>
          <h1 className="script-heading">Hey, my love.</h1>
          <div className="ornament">──────── ♡ ────────</div>

          <div className="letter-content">
            <p>Before you enter our little world, there's something I need to tell you.</p>
            <p>First of all, I'm really sorry that I'm late. 🥺❤️ I wanted to have this ready for us on October 9th, our special day, but I couldn't finish it in time.</p>
            <p>I was working on building this little website just for you, and things took a little longer than I expected. Between fixing some code issues, getting the different sections to work properly, and trying to make every little detail as beautiful as you deserve, I ran out of time.</p>
            <p>I know I couldn't give this to you on the exact day, and I'm sorry for that. But I didn't want to rush something that's so close to my heart just for the sake of finishing it.</p>
            <p>Every little detail here is my way of reminding you how special you are to me. I wanted to make you something you could come back to whenever you miss me, whenever you need a smile, or whenever you just want a little reminder of how much you're loved.</p>
            <p className="pink-line">I'm a little late, baby, but my love for you isn't. 🫶🏻</p>
            <p>So, forgive your slightly late but very much in-love boyfriend?</p>
            <p>I made this little world just for you. Every flower, every letter, every memory, and every surprise is waiting for you inside.</p>
            <p className="pink-line">Happy belated anniversary, my love. I love you. Always. 💗</p>
            <p className="signature">With all my heart,<br />Your favourite person. 💌</p>
          </div>

          <button className="primary-button" onClick={() => setScreen('passkey')}>
            Open my heart <span>♡</span>
          </button>
          <p className="footnote">Made with love, just for you</p>
        </section>
      )}

      {screen === 'passkey' && (
        <section className="passkey-card">
          <div className="seal">🗝️</div>
          <p className="eyebrow">JUST BETWEEN US</p>
          <h1 className="script-heading">A little secret</h1>
          <p className="muted">Enter our special date to open your surprise.</p>
          <form onSubmit={unlockWebsite}>
            <input
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="DD/MM/YYYY"
              aria-label="Anniversary passkey"
            />
            {error && <p className="error">Not quite, try our special date again ♡</p>}
            <button className="primary-button full-button" type="submit">Unlock our world ♡</button>
          </form>
          <p className="footnote">A tiny world made for two</p>
        </section>
      )}

      {screen === 'home' && (
        <section className="site-shell">
          <header className="site-header">
            <button className="brand" onClick={() => navigate('home')}>
              <span className="brand-icon">♡</span>
              <span>our little world<small>just you & me</small></span>
            </button>
            <span className="header-date">09 · 10 · 2025</span>
          </header>

          <div className="site-content">
            {section === 'home' && (
              <section className="hero">
                <span className="hero-flower flower-left">✿</span>
                <span className="hero-flower flower-right">❀</span>
                <p className="eyebrow">TO MY FAVOURITE PERSON</p>
                <div className="hero-heart">♡</div>
                <h1 className="hero-title">Happy Anniversary,<span>Swati</span></h1>
                <p className="hero-subtitle">A little place for our memories,<br />our moments, and our love.</p>
                <div className="date-pill">09 <i /> OCTOBER <i /> 2025</div>
                <p className="hero-quote">“In a world full of people,<br />I'm glad I found you.”</p>
                <button className="primary-button" onClick={() => navigate('memories')}>Explore our memories ↗</button>
                <div className="hero-bottom">A LOVE STORY THAT'S STILL BEING WRITTEN ♡</div>
              </section>
            )}

            {section === 'memories' && (
              <section className="memories-section">
                <div className="section-heading">
                  <p className="eyebrow">LITTLE MOMENTS, FOREVER</p>
                  <h1 className="page-title">Our memories<span>♡</span></h1>
                  <p className="muted">Every picture has a story. Every story has you.</p>
                </div>

                <div className="category-tabs">
                  <button className={category === 'cutest' ? 'selected' : ''} onClick={() => setCategory('cutest')}>♡ Cutest Pictures</button>
                  <button className={category === 'places' ? 'selected' : ''} onClick={() => setCategory('places')}>⌖ Our Places</button>
                  <button className={category === 'favourites' ? 'selected' : ''} onClick={() => setCategory('favourites')}>✿ My Favourites</button>
                  <button className={category === 'together' ? 'selected' : ''} onClick={() => setCategory('together')}>♥ Us, Together</button>
                </div>

                {category !== 'places' ? (
                  <>
                    <div className="gallery-intro">
                      <div>
                        <h2>{memories[category].title}</h2>
                        <p>{memories[category].subtitle}</p>
                      </div>
                      <span className="gallery-count">♡ 0{memories[category].photos.length}</span>
                    </div>
                    <div className="photo-grid">
                      {memories[category].photos.map((photo, index) => (
                        <PhotoCard key={photo.file} photo={photo} index={index} />
                      ))}
                    </div>
                    <p className="gallery-note">More little memories, more reasons to smile. ♡</p>
                  </>
                ) : (
                  <div className="places-section">
                    <div className="gallery-intro">
                      <div>
                        <h2>Places we've gone</h2>
                        <p>Little pins on the map of our story.</p>
                      </div>
                      <span className="gallery-count">⌖</span>
                    </div>
                    <div className="places-grid">
                      {places.map((place, index) => (
                        <article className="place-card" key={place.name}>
                          <div className={`map-art map-art-${index}`}>
                            <span className="map-pin">♥</span>
                            <span className="map-label">A PLACE IN OUR STORY</span>
                            <span className="map-road road-one" />
                            <span className="map-road road-two" />
                          </div>
                          <div className="place-details">
                            <span className="place-number">MEMORY 0{index + 1}</span>
                            <h3>{place.name}</h3>
                            <p>{place.note}</p>
                            <a
                              href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(place.address)}`}
                              target="_blank"
                              rel="noreferrer"
                              className="map-link"
                            >
                              Find on Google Maps ↗
                            </a>
                          </div>
                        </article>
                      ))}
                    </div>
                    <p className="gallery-note">Replace the sample places in App.jsx with your real locations.</p>
                  </div>
                )}
              </section>
            )}

            {section === 'letters' && (
              <section className="simple-section">
                <p className="eyebrow">WORDS FROM MY HEART</p>
                <h1 className="page-title">Letters for Swati<span>♡</span></h1>
                <p className="muted">Some things deserve to be written down.</p>
                <article className="envelope-card">
                  <div className="envelope-icon">💌</div>
                  <p className="eyebrow">A LETTER FOR YOU</p>
                  <h2>To my favourite girl</h2>
                  <p>A little letter, written with all my love.</p>
                  {!letterOpen ? (
                    <button className="primary-button" onClick={() => setLetterOpen(true)}>Open your letter ♡</button>
                  ) : (
                    
<div className="personal-letter">
  <p>Dear Swati, ❤️</p>

  <p>
    You make ordinary days feel special. I love all the
    little things that make you who you are, and I'm so
    grateful to have you in my life.
  </p>

  <p>
    Meri pyaari bacchii, I truly believe in you. I know
    you're going to do really well in your boards. I believe
    in your abilities, and I'm already so proud of you.
    Even when you feel stressed or doubt yourself, remember
    that I believe in you. Just keep trying and giving your
    best, baby. ❤️
  </p>

  <p>
    I appreciate your efforts more than you know. From your
    good morning to your good night, your little messages,
    your time, your care, and every little thing you do —
    everything matters to me.
  </p>

  <p>
    You have no idea how happy your little things make me.
    Talking to you, listening to you, seeing your messages,
    and hearing about your day make me smile so much.
    Meri pyaari bacchii, you make my ordinary days special
    just by being yourself. ❤️
  </p>

  <p>
    Whenever boards feel overwhelming or life gets difficult,
    remember that I'm always cheering for you. You don't
    have to be perfect; I just want you to believe in
    yourself as much as I believe in you.
  </p>

  <p>
    This is our little corner of the internet, but the
    memories we make together are what make it meaningful.
    I'm proud of you, I appreciate you, and I'm so happy
    that it's you.
  </p>

  <p>Love you, always. ♡</p>

  <p className="signature">Yours, always ❤️</p>
</div>
                  )}
                </article>
              </section>
            )}

      
{section === 'music' && (
  <section className="simple-section">
    <p className="eyebrow">A SOUNDTRACK FOR US ♡</p>

    <h1 className="page-title">
      Our little music corner<span>♫</span>
    </h1>

    <p className="muted">
      For songs that somehow remind me of you.
    </p>

    <article className="music-card">
      <div className="album-art">
        <span>♫</span>
        <i>♡</i>
      </div>

      <p className="eyebrow">OUR SPECIAL SONG</p>
      <h2>Our song ❤️</h2>
      <p>A little song for my favourite person.</p>

      <audio controls loop>
        <source src="/music/our-song.mp3" type="audio/mpeg" />
        Your browser does not support audio.
      </audio>
    </article>
  </section>
)}
{section === 'location' && (
  <section className="simple-section">
    <p className="eyebrow">A LITTLE MAP OF US ♡</p>

    <h1 className="page-title">
      Our Little Places<span>♡</span>
    </h1>

    <p className="muted">
      Every place holds a little piece of our story.
    </p>

    <div className="places-list">
      <a
        className="place-item"
        href="https://www.google.com/maps/search/?api=1&query=Sector+61+Noida"
        target="_blank"
        rel="noreferrer"
      >
        <span className="place-emoji">📍</span>
        <div>
          <h2>Our Usual Place</h2>
          <p>Sector 61 · Our everyday little moments ♡</p>
          <span className="map-link">Open in Google Maps ↗</span>
        </div>
      </a>

      <a
        className="place-item"
        href="https://www.google.com/maps/search/?api=1&query=Modi+Mall+Ghaziabad"
        target="_blank"
        rel="noreferrer"
      >
        <span className="place-emoji">🎬</span>
        <div>
          <h2>Our First Movie</h2>
          <p>Modi Mall · One of our first special dates ♡</p>
          <span className="map-link">Open in Google Maps ↗</span>
        </div>
      </a>

      <a
        className="place-item"
        href="https://www.google.com/maps/search/?api=1&query=Xero+Degrees+Sector+18+Noida"
        target="_blank"
        rel="noreferrer"
      >
        <span className="place-emoji">☕</span>
        <div>
          <h2>Our Cafe Date</h2>
          <p>Xero Degrees, Sector 18 · Sweet little memories ♡</p>
          <span className="map-link">Open in Google Maps ↗</span>
        </div>
      </a>

      <a
        className="place-item"
        href="https://www.google.com/maps/search/?api=1&query=The+Cafe+Artist+Sector+18+Noida"
        target="_blank"
        rel="noreferrer"
      >
        <span className="place-emoji">💕</span>
        <div>
          <h2>Another Cafe Memory</h2>
          <p>The Cafe Artist, Sector 18 · Just you and me ♡</p>
          <span className="map-link">Open in Google Maps ↗</span>
        </div>
      </a>
    </div>
  </section>
)}
          </div>

          <footer className="site-footer">
            <nav className="main-nav">
              <button className={section === 'home' ? 'nav-active' : ''} onClick={() => navigate('home')}><span>⌂</span>Home</button>
              <button className={section === 'memories' ? 'nav-active' : ''} onClick={() => navigate('memories')}><span>❀</span>Memories</button>
              <button className={section === 'letters' ? 'nav-active' : ''} onClick={() => navigate('letters')}><span>✉</span>Letters</button>
              <button className={section === 'music' ? 'nav-active' : ''} onClick={() => navigate('music')}><span>♫</span>Music</button>
              
<button className={section === 'location' ? 'nav-active' : ''} onClick={() => navigate('location')}>
  <span>📍</span>Places
</button>


            </nav>
            <p>Made with love, for Swati <span>♡</span></p>
          </footer>
        </section>
      )}
    </main>
  )
}

export default App